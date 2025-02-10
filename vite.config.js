import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ghPages } from "vite-plugin-gh-pages";
import path from "path";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react(), ghPages()],
    base: mode == "production" ? "/armangrewal007-template/" : "/",
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
