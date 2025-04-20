import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@pages": resolve(__dirname, "src", "pages"),
      "@components": resolve(__dirname, "src", "components"),
      "@stores": resolve(__dirname, "src", "stores"),
      "@services": resolve(__dirname, "src", "services"),
      "@utils": resolve(__dirname, "src", "utils"),
      "@routers": resolve(__dirname, "src", "routers"),
      "@hooks": resolve(__dirname, "src", "hooks"),
    },
  },
  server: {
    host: true,
    port: 8888,
    proxy: {
      "/api": {
        // target: 'http://101.37.18.23:3000/', // 线上
        target: "http://localhost:3000", // 本地
        changeOrigin: true, // 是否改变源地址
        // rewrite: (path) => path.replace(/^\/api/, ''), // 重写路径
      },
    },
  },
});
