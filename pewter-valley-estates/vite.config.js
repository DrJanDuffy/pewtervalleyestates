
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'ddc7cb37-2a1d-48b2-9406-9a054b315489-00-hsufrmrcpxab.worf.replit.dev'
    ]
  }
})
