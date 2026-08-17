# Flexi-Spec — Dynamic Supabase Edition

Ogunbiyi Jesutomisin (Flexi-Spec)

## Architecture

This build contains page shells only. Content is NOT stored as individual
article/project/contributor HTML files.

Supabase is the content source for:
- projects
- articles
- feed posts
- labs
- achievements
- contributors
- pages
- media
- SEO metadata
- messages
- handles
- site settings

The public pages dynamically fetch and render content.

## Deploy

This is a static Vercel deployment. No build output directory is required.

1. Run `schema.sql` in Supabase SQL Editor.
2. Create the single admin Auth user in Supabase.
3. Configure the Supabase URL and publishable key in `supabase.js`.
4. Push the root files to GitHub.
5. Import the repository into Vercel with Framework Preset `Other`.

Never expose a Supabase service-role key in frontend code.
