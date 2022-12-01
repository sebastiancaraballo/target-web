import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@common/": fileURLToPath(
        new URL("./src/components/common/", import.meta.url)
      ),
      "@components/": fileURLToPath(
        new URL("./src/components/", import.meta.url)
      ),
      "@services/": fileURLToPath(
        new URL("./src/services/", import.meta.url)
      ),
      "@assets/": fileURLToPath(new URL("./src/assets/", import.meta.url)),
    },
  },
  plugins: [react()]
})
