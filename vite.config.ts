import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/4pro2025/', // 
  build: {
    outDir: 'docs', // 出力先を 'docs' に変更
  },
})