import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  base: "/web-app/", // GitHub Pages: https://<user>.github.io/web-app/
  plugins: [react()],
  resolve: {
    alias: {
      react: path.resolve(__dirname, "node_modules/react"),
      "react-dom": path.resolve(__dirname, "node_modules/react-dom"),
      "@chakra-ui/react": path.resolve(__dirname, "node_modules/@chakra-ui/react"),
      "@emotion/react": path.resolve(__dirname, "node_modules/@emotion/react"),
      "@emotion/styled": path.resolve(__dirname, "node_modules/@emotion/styled"),
      "framer-motion": path.resolve(__dirname, "node_modules/framer-motion"),
    },
  },
  optimizeDeps: {
    exclude: ["design-system"],
  },
  server: {
    watch: {
      ignored: ["**/node_modules/**", "**/chakra-app/node_modules/**"],
    },
  },
});
