import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ghPages } from "vite-plugin-gh-pages";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react(), ghPages()],
    base: mode == "production" ? "/repo_name/" : "/",
  };
});
