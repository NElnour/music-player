import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, '/src') }]
  },
  plugins: [svelte()],
  build: {
    chunkSizeWarningLimit: 1600,
    assetsInlineLimit: '0',
  },
})
