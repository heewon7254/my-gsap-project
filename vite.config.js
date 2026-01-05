import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/my-gsap-project/", // 중요! 레파지토리 이름으로 변경
});
