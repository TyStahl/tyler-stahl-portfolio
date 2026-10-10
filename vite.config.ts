import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // NEXT_PUBLIC_ lets the Vercel Supabase integration's public env vars reach the client
  envPrefix: ['VITE_', 'NEXT_PUBLIC_'],
})
