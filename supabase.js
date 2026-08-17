import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const url = 'https://ayxrcahgjzppsudvoeuj.supabase.co';

const key = 'sb_publishable_OVvrtk1VEmNh0AdKmxyLVA_E8APN9md';

export const supabase = createClient(url, key);
