#!/usr/bin/env bash
set -e

# 16th HOLE dependency repair for Node 18.x
if ! command -v node >/dev/null 2>&1; then
  echo "Node.js is not installed. Install Node.js 18.x or newer first."
  exit 1
fi

NODE_MAJOR="$(node -p "process.versions.node.split('.')[0]")"
if [ "$NODE_MAJOR" -lt 18 ]; then
  echo "This project requires Node.js 18.x or newer. Current: $(node -v)"
  exit 1
fi

echo "Using $(node -v) and npm $(npm -v)"
rm -rf node_modules package-lock.json
npm install
npm run build

echo ""
echo "Build completed successfully. Start the app with: npm run dev"
