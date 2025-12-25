create table if not exists public.profiles (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  full_name text,
  subscription_status text default 'trial',
  created_at timestamptz not null default now()
);

alter table public.profiles
  enable row level security;

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

alter table public.appeals
  enable row level security;
