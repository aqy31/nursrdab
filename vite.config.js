import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true,
    port: 3000,
    open: false
  },
  assetsInclude: ['**/*.glb', '**/*.gltf', '**/*.usdz'],
  build: {
    target: 'esnext',
    chunkSizeWarningLimit: 30000
  }
});
