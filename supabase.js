import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';
const url=import.meta.env?.VITE_SUPABASE_URL || window.__SUPABASE_URL__ || '';
const key=import.meta.env?.VITE_SUPABASE_PUBLISHABLE_KEY || window.__SUPABASE_PUBLISHABLE_KEY__ || '';
export const supabase=createClient(url,key);