import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  base: '/weather_app',
  server: {
    port: 5001,
  },
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: 'weather_app',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App',
      },
      shared: ["react", "react-dom"],
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]'
      }
    }
  },
  preview: {
    port: 5001,
    strictPort: true,
    cors: true
  }
})
