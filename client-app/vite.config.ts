import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: '../API/wwwroot'
  },
  server: {
    host: true,
    strictPort: true,
    port: 3000
  },
  plugins: [react()],
})
