import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // 👇 مهم علشان GitHub Pages /real-estate-ui/
  base: "/real-estate-ui/",
  build: {
    outDir: "docs", // 👈 خلي Vite يبني في docs مباشرة
  },
});