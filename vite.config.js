import { defineConfig } from 'vite'
import Pages from 'vite-plugin-pages'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    Pages({
      dirs: [
        { dir: 'src/pages', baseRoute: '' },
      ],
    }),
  ],
})