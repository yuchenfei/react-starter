import tailwindcss from '@tailwindcss/vite'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import { defineConfig, type UserConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import type { InlineConfig } from 'vitest/node'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [TanStackRouterVite(), react(), tsconfigPaths(), tailwindcss()],
  test: {
    environment: 'jsdom',
    setupFiles: './src/testing/setup-tests.ts',
  },
  // https://github.com/vitest-dev/vitest/discussions/1106#discussioncomment-11595504
} as UserConfig & { test: InlineConfig })
