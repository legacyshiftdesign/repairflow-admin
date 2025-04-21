import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://pttzgpnxyvokatvphezm.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0dHpncG54eXZva2F0dnBoZXptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyNjI3NDksImV4cCI6MjA2MDgzODc0OX0.7NXGSV_D1Dl4dyqa2biMWLZHfqnpJanMSTLbZS8kZh0'
)