const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/main.ts'),
            name: 'B',
            fileName: (format) => `index.${format}.js`
        },
        rollupOptions: {
            external: ['@localxx/utils', '@localxx/a'],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    '@localxx/utils': 'Utils',
                    '@localxx/a': 'A'
                }
            }
        }
    },
    resolve: {
        // dedupe: ['@localxx/utils', '@localxx/a'],
    }
})