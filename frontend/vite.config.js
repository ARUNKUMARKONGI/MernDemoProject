import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  base: "/MernDemoProject/",   // <- crucial, trailing slash required
  plugins: [react()]
})