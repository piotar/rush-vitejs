const path = require('path')
const { defineConfig } = require('vite')
import commonjs from '@rollup/plugin-commonjs';

module.exports = defineConfig({
    plugins: [commonjs({
        esmExternals: true,

    })],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/main.ts'),
            name: 'A',
            fileName: (format) => `index.${format}.js`
        },
        rollupOptions: {
            external: [
                '@localxx/utils',
                'redux'
            ],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    '@localxx/utils': 'Utils',
                    'redux': 'Redux',
                }
            }
        }
    },
    resolve: {
        dedupe: ['@localxx/utils', 'redux'],
    },
})