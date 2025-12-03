import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, (process as any).cwd(), '');
  
  return {
    // Explicitly define public directory (standard is 'public')
    publicDir: 'public',
    plugins: [react()],
    define: {
      // Polyfill process.env.API_KEY for the browser environment
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  };
});