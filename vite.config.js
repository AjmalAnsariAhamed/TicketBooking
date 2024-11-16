import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude:   
 [
      'locomotive-scroll',
      'framer-motion',
      'react-icons/io'
    ]
  }
})
