import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from "@tailwindcss/vite";



// https://vite.dev/config/
export default defineConfig({
  base: '/his-primevue-app/', // 這一行是關鍵！

  plugins: [vue(),tailwindcss()],
})
