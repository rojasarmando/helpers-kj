import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'HelpersKJ',
            fileName: (format) => `helpers-kj.${format}.js`,
            formats: ['es', 'umd']
        },
        outDir: 'dist',
        rollupOptions: {
            external: [],
            output: {
                globals: {},
            },
        },
    },
});
