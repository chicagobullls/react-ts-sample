import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@photo': path.resolve(__dirname, './src/containers/Diagnostic/PhotoProcessing'),
    },
  },
  build: {
    manifest: true,
  },
  envPrefix: 'REACT',
  plugins: [tsconfigPaths(), react()],
})
