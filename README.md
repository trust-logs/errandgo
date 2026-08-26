# ErrandGo

A standalone global marketplace for errands, house chores, office chores, shopping and local task work.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Vercel

Import `trust-logs/errandgo` into Vercel. Use:
- Framework: Vite
- Root Directory: `./`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`
- Node.js: 20.x or newer

`vercel.json` already contains the build/output settings and SPA rewrite.

## Production payments

The current wallet button is a UI demo only. Do not treat it as a real balance. Real deposits, escrow and payouts must be implemented server-side using licensed payment providers, signed webhooks, idempotency, a double-entry ledger, authentication, KYC where required, fraud controls and country-specific compliance.
