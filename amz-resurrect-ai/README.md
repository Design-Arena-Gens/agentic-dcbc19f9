# AMZ-Resurrect AI

Amazon KSA/UAE reinstatement co-pilot powered by a reasoning-first OpenAI agent and Supabase.

## Tech Stack

- Next.js 15 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4 + Shadcn-inspired UI primitives
- Supabase (PostgreSQL, Auth)
- Vercel AI SDK (`ai` + `@ai-sdk/openai`)

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Copy environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Fill in:
   - `OPENAI_API_KEY`
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
3. **Run Supabase migrations**
   ```bash
   supabase db push
   ```
   The schema lives in `supabase/schema.sql`.
4. **Start the dev server**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000`.

## Database Schema

```sql
-- profiles
create table if not exists public.profiles (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  full_name text,
  subscription_status text default 'trial',
  created_at timestamptz not null default now()
);

-- appeals
create table if not exists public.appeals (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete set null,
  seller_name text not null,
  asin text not null,
  violation_type text not null,
  root_cause_input text not null,
  generated_poa text,
  status text default 'draft',
  created_at timestamptz not null default now()
);
```

## Key Folders

- `src/app/page.tsx` – customer-facing landing page.
- `src/app/dashboard/page.tsx` – AI appeal builder (client component).
- `src/app/api/generate-appeal/route.ts` – Vercel AI SDK streaming endpoint with hidden investigator prompt.
- `src/components/ui` – Shadcn-inspired Tailwind primitives.
- `src/lib` – Supabase clients and utilities.

## Deployment

```bash
npm run build
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-dcbc19f9
```

Once deployed, verify:

```bash
curl https://agentic-dcbc19f9.vercel.app
```
