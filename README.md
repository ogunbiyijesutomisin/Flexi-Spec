# Flexi-Spec — Full build

Identity: Ogunbiyi Jesutomisin (Flexi-Spec)
Stack: HTML/CSS/JS + Supabase + Vercel
No assets/ directory. No api/ directory.
Admin is a separate `admin.html` page.

## Setup
1. Create a Supabase project.
2. Run `schema.sql` in Supabase SQL Editor.
3. Create ONE Supabase Auth user.
4. Insert that user's UUID into `admin_profiles` with role `admin`.
5. Set Vercel environment variables:
   VITE_SUPABASE_URL
   VITE_SUPABASE_PUBLISHABLE_KEY

Do not expose a Supabase service-role key.

Note: browser-only static deployment cannot read Vite env variables without a bundling step. For a plain Vercel static deployment, inject the public Supabase URL/key into `supabase.js` or convert this project to a Vite build. The publishable key is safe to expose; service-role key is not.
