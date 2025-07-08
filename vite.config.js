import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,             // enables external access
    watch: {
      usePolling: true      // ensures file watching inside Docker works
    },
    strictPort: true
  }
})
