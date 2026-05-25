#!/bin/bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
FRONTEND_DIR="$SCRIPT_DIR/frontend"
MERGED_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

if [ -f "$MERGED_ROOT/.env" ]; then
  set -a
  . "$MERGED_ROOT/.env"
  set +a
fi

if [ -f "$SCRIPT_DIR/.env" ]; then
  set -a
  . "$SCRIPT_DIR/.env"
  set +a
fi
PORT="${PORT:-5290}"
DB_NAME="${PGDATABASE:-dental_orthodontic_operations_suite}"
DB_HOST="${PGHOST:-127.0.0.1}"

echo "======================================="
echo "      Dental Orthodontic Operations Suite"
echo "======================================="
echo

if [ ! -d "$FRONTEND_DIR" ]; then
  echo "Error: frontend directory not found:"
  echo "  $FRONTEND_DIR"
  exit 1
fi

if lsof -ti:$PORT >/dev/null 2>&1; then
  echo "Freeing port $PORT"
  lsof -ti:$PORT | xargs kill -9 2>/dev/null || true
  sleep 1
fi

cd "$FRONTEND_DIR"

if [ ! -d node_modules ]; then
  echo "Installing frontend dependencies..."
  npm install
fi

echo "Ensuring PostgreSQL database '$DB_NAME' exists..."
if ! psql -h "$DB_HOST" -d postgres -tAc "SELECT 1 FROM pg_database WHERE datname = '$DB_NAME'" | grep -q 1; then
  createdb -h "$DB_HOST" "$DB_NAME"
fi

export PGHOST="$DB_HOST"
export PGDATABASE="$DB_NAME"

echo "Starting dental orthodontic operations suite frontend on http://localhost:$PORT"
echo "Login: admin@dental-orthodontic-operations.local / admin123"
echo "Press Ctrl-C to stop."
echo

exec npx next dev --hostname 127.0.0.1 --port $PORT
