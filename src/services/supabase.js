import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://gfuqadowvixztyoolpgl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmdXFhZG93dml4enR5b29scGdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEyMDI4NTksImV4cCI6MjA3Njc3ODg1OX0.uZaJt9TwY0uvyG0QXWEzbUGyvQ0hVysjLi6FmSr6TZM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
