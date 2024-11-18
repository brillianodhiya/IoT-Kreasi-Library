import { defineConfig } from "vite";

export default defineConfig({
  // Base public path when served in development or production.
  base: "/",

  // Directory to serve as plain static assets.
  publicDir: "public",

  // Directory to save cache files.
  cacheDir: "node_modules/.vite",

  // Build options
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    minify: "esbuild",
  },

  // Server options
  server: {
    host: "localhost",
    port: 3000,
    open: true,
    strictPort: false,
  },

  // Plugins
  plugins: [],
});
