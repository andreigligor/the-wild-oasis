import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://youegujrjgokhslglvem.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvdWVndWpyamdva2hzbGdsdmVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk3MjYxODksImV4cCI6MjAyNTMwMjE4OX0.X0H6weYvEUktn_FEXtBFzldTZ6Xxdf9Vqbjuc0FzDpw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
