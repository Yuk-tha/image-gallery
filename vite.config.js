import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 📚 MENTOR NOTE:
// base: '/image-gallery/' tells Vite that on GitHub Pages,
// the app lives at https://username.github.io/image-gallery/
// Change 'image-gallery' to match your GitHub repository name exactly!

export default defineConfig({
  plugins: [react()],
  base: '/image-gallery/',
})
