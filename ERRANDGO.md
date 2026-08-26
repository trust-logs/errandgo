# ErrandGo

Global marketplace for errands, delivery, house chores and office chores.

## Product foundation
- Post and browse errands
- Search and category filtering
- House and office chores
- Local currency and country configuration
- Local payment-method configuration
- Wallet/deposit UX
- Trust, ratings, verification and disputes architecture
- Responsive web/PWA-ready interface

## Production backend
Use a secure backend such as Supabase Auth + Postgres with Row Level Security. Suggested tables: profiles, wallets, ledger_entries, errands, applications, jobs, payments, deposits, payouts, reviews, disputes, notifications.

Real payments must be processed server-side through licensed providers available in each launch market. Provider webhooks must be signature-verified and idempotent before a deposit is credited. Never expose provider secret keys in browser code.

Task payments should use a server-side ledger/escrow workflow with clear completion, refund, dispute and payout states. KYC/identity verification, fraud controls, audit logs and country-specific legal requirements should be implemented before real-money launch.
