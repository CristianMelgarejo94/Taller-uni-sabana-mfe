import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5000,
    proxy: {
      '/weather_app': {
        target: 'http://localhost:5001/weather_app/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/weather_app/, ''),
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: 'shell',
      filename: 'remoteEntry.js',
      remotes: {
        weatherApp: 'http://localhost:5001/weather_app/assets/remoteEntry.js',
        newsApp: 'http://localhost:5002/news_app/assets/remoteEntry.js',
      },
      exposes: {
        './Main': './src/Main.tsx',
      },
      shared: ['react', 'react-dom']
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})
