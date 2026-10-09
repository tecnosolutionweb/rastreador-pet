import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Permite abrir o build (dist/) direto pelo navegador ou publicar em qualquer lugar
  base: './',
})