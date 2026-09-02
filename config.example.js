// ═══════════════════════════════════════════════════════════════════════════
//  Align360 1099 Portal — per-client configuration
//
//  Copy this file to `config.js` alongside the two HTML files and fill in the
//  values from  Supabase dashboard > Project Settings > API.
//
//  This is the ONLY file that differs between clients. The HTML files stay
//  byte-identical everywhere, so a fix ships by copying them over — no
//  re-editing, no drift between one client's copy and another's.
//
//  The anon key is safe to publish: it grants nothing on its own. Every table
//  is protected by row level security, so a user still only sees what their
//  role allows. Never put the SERVICE ROLE key in this file — that one
//  bypasses RLS entirely and belongs only in Edge Function secrets.
// ═══════════════════════════════════════════════════════════════════════════

window.ALIGN360_CONFIG = {
  SUPABASE_URL:      'https://YOUR-PROJECT-REF.supabase.co',
  SUPABASE_ANON_KEY: 'YOUR-ANON-KEY'
};
