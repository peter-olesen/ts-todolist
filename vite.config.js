import { defineConfig } from "vite"
import ts from "typescript"

export default defineConfig ({
    // config options
    plugins: [ts()],
    base: "/todolist-ts/"
  });