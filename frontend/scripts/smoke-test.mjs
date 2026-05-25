const baseUrl = process.env.SMOKE_BASE_URL || 'http://127.0.0.1:5290';

async function login(email, password) {
  const response = await fetch(`${baseUrl}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  if (!response.ok) throw new Error(`Login failed for ${email}`);
  const cookie = response.headers.get('set-cookie');
  if (!cookie) throw new Error(`No session cookie for ${email}`);
  return cookie.split(';')[0];
}

async function expectStatus(path, cookie, status) {
  const response = await fetch(`${baseUrl}${path}`, {
    headers: { cookie },
  });
  if (response.status !== status) {
    throw new Error(`${path} returned ${response.status}, expected ${status}`);
  }
  return response;
}

async function expectJson(path, cookie, status = 200) {
  const response = await expectStatus(path, cookie, status);
  return response.json();
}

const adminCookie = await login('admin@dental-orthodontic-operations.local', 'admin123');
const managerCookie = await login('manager@dental-orthodontic-operations.local', 'manager123');
const analystCookie = await login('analyst@dental-orthodontic-operations.local', 'analyst123');

await expectJson('/api/dashboard', adminCookie);
await expectJson('/api/entities/records', analystCookie);
await expectJson('/api/documents', analystCookie);
await expectStatus('/api/documents/upload', analystCookie, 405);

const records = await expectJson('/api/entities/records', managerCookie);
const rowId = records.rows[0].id;

const approveResponse = await fetch(`${baseUrl}/api/entities/records/approve`, {
  method: 'POST',
  headers: {
    cookie: managerCookie,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ rowId, approved: true }),
});
if (!approveResponse.ok) {
  throw new Error(`Manager approval failed with ${approveResponse.status}`);
}

const forbiddenApprove = await fetch(`${baseUrl}/api/entities/records/approve`, {
  method: 'POST',
  headers: {
    cookie: analystCookie,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ rowId, approved: false }),
});
if (forbiddenApprove.status !== 403) {
  throw new Error(`Analyst approve returned ${forbiddenApprove.status}, expected 403`);
}

await expectJson('/api/notifications', adminCookie);
await expectJson('/api/audit', adminCookie);
await expectJson('/api/source-tables', adminCookie);

const aiResponse = await fetch(baseUrl + '/api/ai-tools/run', {
  method: 'POST',
  headers: {
    cookie: adminCookie,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ toolId: 'suite-assistant', input: 'Summarize the top priorities for this suite.' }),
});
if (!aiResponse.ok) {
  throw new Error('AI tool returned ' + aiResponse.status);
}
const aiPayload = await aiResponse.json();
if (!aiPayload.response || !aiPayload.tool) {
  throw new Error('AI tool response was incomplete');
}

const featuresPayload = await expectJson('/api/features', adminCookie);
const sourceFeature = (featuresPayload.featureCatalog || []).find((feature) => feature.href && feature.href.startsWith('/features/source-'));
if (sourceFeature) {
  const sourceSlug = sourceFeature.href.split('/').pop();
  await expectJson(`/api/features/${sourceSlug}`, adminCookie);
  await expectJson(`/api/feature-state/${sourceSlug}`, adminCookie);
  await expectJson(`/api/entities/${sourceSlug}`, adminCookie);
}

const aiToolsPayload = await expectJson('/api/ai-tools/run', adminCookie);
const exactDonorTool = (aiToolsPayload.tools || []).find((tool) => tool.category === 'Exact Donor AI Feature');
if ((featuresPayload.featureCatalog || []).some((feature) => feature.href && feature.href.startsWith('/features/source-')) && !exactDonorTool) {
  throw new Error('Expected at least one exact donor AI feature tool');
}


console.log('Smoke test passed');
