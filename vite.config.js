import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" keeps asset paths relative so the site works from any folder
// or GitHub Pages sub-path.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
