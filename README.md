# Dental Orthodontic Operations Suite

Wave:
- Portfolio next-20 completion batch

Source candidates represented:
- `AIDentalOrthodonticOperationsAssistant`
- `AIDentalOrthodonticOperationsOperations`
- `AIDentalOrthodonticOperationsAnalytics`
- `AIDentalOrthodonticOperationsWorkflow`

This suite is a runnable merged app with one login, one dashboard, one feature-first sidebar, PostgreSQL-backed records/documents/notifications/audit, role behavior, and smoke coverage.

## Local Run

```bash
cd /Users/erolakarsu/projects/merged/dental-orthodontic-operations-suite
./start.sh
```

Local URL:
- `http://127.0.0.1:5290`

Seeded users:
- `admin@dental-orthodontic-operations.local / admin123`
- `manager@dental-orthodontic-operations.local / manager123`
- `analyst@dental-orthodontic-operations.local / analyst123`

## Validation

```bash
cd /Users/erolakarsu/projects/merged/dental-orthodontic-operations-suite/frontend
npm run typecheck
SMOKE_BASE_URL=http://127.0.0.1:5290 npm run smoke
```
