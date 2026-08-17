import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
const url = window.__SUPABASE_URL__ || "";
const key = window.__SUPABASE_PUBLISHABLE_KEY__ || "";
export const supabase = url && key ? createClient(url,key) : null;
export const configured = !!supabase;
