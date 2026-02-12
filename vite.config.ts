import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),   tailwindcss(),],
  test: {
    globals: true,           // Enables 'describe', 'it', 'expect' globally
    environment: 'jsdom',    // Uses jsdom for browser-like testing
  },
})
