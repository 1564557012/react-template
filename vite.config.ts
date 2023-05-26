import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import  path from 'path'
import viteEslint from 'vite-plugin-eslint'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    viteEslint({
      failOnError: false
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
// server: {
//     port: 3000,
//     proxy: {
//       "/api": {
//         target: "https://yourBaseUrl",
//         changeOrigin: true,
//         cookieDomainRewrite: "",
//         secure: false,
//       },
//     },
//   },

})
