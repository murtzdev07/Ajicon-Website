import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import Sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    Sitemap({
      hostname: 'https://www.ajicon.com', // Replace with your actual live domain
      dynamicRoutes: [
        '/',
        '/careers'
      ],
      exclude: ['/admin-portal'] // Strictly hides the admin dashboard from Google
    })
  ],
})