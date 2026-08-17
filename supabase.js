import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";
const SUPABASE_URL="https://ayxrcahgjzppsudvoeuj.supabase.co";
const SUPABASE_PUBLISHABLE_KEY="sb_publishable_OVvrtk1VEmNh0AdKmxyLVA_E8APN9md";
export const supabase=createClient(SUPABASE_URL,SUPABASE_PUBLISHABLE_KEY);
