import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/MernDemoProject-v2/",   // <- added "-v2" to force new URL
  plugins: [react()]
});