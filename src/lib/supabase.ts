import { createClient } from '@supabase/supabase-js'

// VITE_* for local .env.local; NEXT_PUBLIC_* are set by the Vercel Supabase integration
const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL ?? import.meta.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ??
  import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
  import.meta.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase env vars missing: set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY')
}

export const supabase =
  supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null
