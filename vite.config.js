import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react({ jsxRuntime: 'automatic' })],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    hmr: {
      // Allows Vite's HMR client to reconnect when the dev server is exposed
      // through a local proxy/tunnel that forwards HTTP and WebSocket traffic.
      clientPort: 5173,
    },
  },
});
