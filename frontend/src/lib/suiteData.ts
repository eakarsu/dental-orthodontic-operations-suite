export type Metric = { label: string; value: string; note: string };
export const sourceSystems = [
  { name: 'AIDentalOrthodonticOperationsAssistant', ownership: 'Patients source capabilities and workflows', coverage: ['Patients', 'Appointments', 'Cases'] },
  { name: 'AIDentalOrthodonticOperationsOperations', ownership: 'Appointments source capabilities and workflows', coverage: ['Care Plans', 'Authorizations', 'Resources'] },
  { name: 'AIDentalOrthodonticOperationsAnalytics', ownership: 'Cases source capabilities and workflows', coverage: ['Approvals', 'Exceptions', 'Compliance'] },
  { name: 'AIDentalOrthodonticOperationsWorkflow', ownership: 'Care Plans source capabilities and workflows', coverage: ['Outcomes', 'Analytics', 'Reports'] },
];
export const dashboardMetrics: Metric[] = [
  { label: 'Patients', value: '84', note: 'Active' },
  { label: 'Appointments', value: '61', note: 'Open' },
  { label: 'Cases', value: '37', note: 'Need review' },
  { label: 'AI Tool Runs', value: '318', note: 'Last 24 hours' },
];
export const healthMetrics: Metric[] = [
  { label: 'Exceptions', value: '28', note: 'Open' },
  { label: 'Approvals', value: '46', note: 'Pending' },
  { label: 'Documents', value: '640', note: 'Tracked' },
  { label: 'Audit Items', value: '91%', note: 'Current' },
];
export const dashboardModules = ['Patients operating view', 'Appointments operating view', 'Cases operating view', 'Care Plans operating view', 'Authorizations operating view', 'Resources operating view', 'Approvals operating view', 'Exceptions operating view'];
export const workflowHighlights = ['Patients workflow with records, approvals, audit, and reporting', 'Appointments workflow with records, approvals, audit, and reporting', 'Cases workflow with records, approvals, audit, and reporting', 'Care Plans workflow with records, approvals, audit, and reporting', 'Authorizations workflow with records, approvals, audit, and reporting'];
