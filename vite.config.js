import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react-router-dom'],
  },
  server: {
    port: 5173, // Customize the port if needed
  },
})

// In this configuration, the optimizeDeps option 
// is used to specify that Vite should include the 
// react-router-dom package in its dependency optimization. 
// This ensures that the package is transpiled and bundled correctly.