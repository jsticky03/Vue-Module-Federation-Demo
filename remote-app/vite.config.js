import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext' // assumes we use browsers supporting latest features
  },
  plugins: [
    vue(),
    federation({
      name: 'remote-app',
      filename: 'remoteEntry.js',
      // Modules to expose
      exposes: {
          './RemoteButton': './src/RemoteButton.vue',
      },
      vue:{
        generate: false
      }
    })
  ],
})
