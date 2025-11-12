// vite.config.mjs
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  build: {
    lib: {
      entry: "src/main.tsx",
      name: "WxccTaskAgentAuto",
      fileName: () => "wxcc-taskagentauto.js",
      formats: ["iife"], // produce un archivo usable directamente como <script>
    },
    rollupOptions: {
      // 👇 NO excluir nada, así React y ReactDOM se incluyen en el bundle final
      external: [],
      output: {
        globals: {},
      },
    },
    outDir: "dist",
    emptyOutDir: true,
  },
});
