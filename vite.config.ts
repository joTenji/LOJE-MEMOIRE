import { wayfinder } from '@laravel/vite-plugin-wayfinder';
// import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
// import ip from 'ip';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react(),
        // tailwindcss(),
        wayfinder({
            formVariants: true,
        }),
    ],
    esbuild: {
        jsx: 'automatic',
    },
    // server: {
    //     host: true,
    //     port: 5173,
    //     // strictPort: true,
    //     // hmr: {
    //     //     host: '192.168.100.82', // automatique
    //     // },
    //     // cors: true,
    // },
});
