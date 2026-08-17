# Flexi-Spec

Ogunbiyi Jesutomisin (Flexi-Spec) personal platform.

## Root structure
No `assets/` folder. No `api/` folder. No source files are hidden inside either.

## Stack
HTML, CSS, JavaScript, Supabase, Vercel.

## Deploy
1. Create Supabase project.
2. Run `schema.sql`.
3. Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` in Vercel.
4. Deploy this repository to Vercel.
5. Create the single admin in Supabase Auth and add authenticated-admin RLS policies.

Never expose a service-role key in frontend code.
