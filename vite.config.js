import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    base: "/From-App/", // استبدل "From-App" باسم المشروع الخاص بك
    plugins: [react()],
});
