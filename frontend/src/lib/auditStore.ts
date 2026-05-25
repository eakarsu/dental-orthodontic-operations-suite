import { ensureListSeed, listPgPayloads, upsertPgPayload } from '@/lib/postgres';
export type AuditEntry = { id: string; at: string; area: string; action: string };
const seedAudit: AuditEntry[] = [
  { id: 'audit-seed-1', at: '2026-05-24 08:15', area: 'Patients', action: 'Patients queue created' },
  { id: 'audit-seed-2', at: '2026-05-24 09:10', area: 'Appointments', action: 'Appointments review assigned' },
  { id: 'audit-seed-3', at: '2026-05-24 11:40', area: 'Cases', action: 'Cases queue refreshed' },
];
async function ensureStore() { await ensureListSeed('audit_log', seedAudit, 'audit-log.json') }
export async function getAuditEntries(): Promise<AuditEntry[]> { await ensureStore(); return listPgPayloads<AuditEntry>('audit_log') }
export async function appendAuditEntry(area: string, action: string) { await ensureStore(); await upsertPgPayload('audit_log', { id: `audit-${Date.now()}`, at: new Date().toLocaleString(), area, action }) }
