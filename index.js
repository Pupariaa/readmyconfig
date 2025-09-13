import { readFileSync, existsSync } from 'fs';
import { resolve } from 'path';

class KonfReader {
    constructor() {
        this.configs = new Map();
        this.loadAll();
    }

    loadAll() {
        const readers = [
            { name: 'package', file: 'package.json' },
            { name: 'tsconfig', file: 'tsconfig.json' },
            { name: 'vite', file: 'vite.config.js' },
            { name: 'viteTs', file: 'vite.config.ts' },
            { name: 'eslint', file: '.eslintrc.json' },
            { name: 'eslintJs', file: '.eslintrc.js' },
            { name: 'prettier', file: '.prettierrc' },
            { name: 'prettierJson', file: '.prettierrc.json' },
            { name: 'webpack', file: 'webpack.config.js' },
            { name: 'rollup', file: 'rollup.config.js' },
            { name: 'babel', file: '.babelrc' },
            { name: 'babelJson', file: 'babel.config.json' },
            { name: 'jest', file: 'jest.config.js' },
            { name: 'vitest', file: 'vitest.config.ts' },
            { name: 'tailwind', file: 'tailwind.config.js' },
            { name: 'postcss', file: 'postcss.config.js' },
            { name: 'next', file: 'next.config.js' },
            { name: 'nuxt', file: 'nuxt.config.js' }
        ];

        readers.forEach(({ name, file }) => {
            try {
                const content = this.readConfig(file);
                if (content) {
                    this.configs.set(name, content);
                }
            } catch (err) {
                // silently skip missing files
            }
        });
    }

    readConfig(filename) {
        const paths = [
            resolve(process.cwd(), filename),
            resolve(process.cwd(), '..', filename),
            resolve(process.cwd(), '..', '..', filename)
        ];

        for (const path of paths) {
            if (existsSync(path)) {
                const content = readFileSync(path, 'utf8');

                if (filename.endsWith('.json')) {
                    return JSON.parse(content);
                }

                if (filename.endsWith('.js') || filename.endsWith('.ts')) {
                    return content;
                }

                return content;
            }
        }
        return null;
    }

    package() {
        return this.configs.get('package');
    }

    tsconfig() {
        return this.configs.get('tsconfig');
    }

    vite() {
        return this.configs.get('vite') || this.configs.get('viteTs');
    }

    eslint() {
        return this.configs.get('eslint') || this.configs.get('eslintJs');
    }

    prettier() {
        return this.configs.get('prettier') || this.configs.get('prettierJson');
    }

    webpack() {
        return this.configs.get('webpack');
    }

    rollup() {
        return this.configs.get('rollup');
    }

    babel() {
        return this.configs.get('babel') || this.configs.get('babelJson');
    }

    jest() {
        return this.configs.get('jest');
    }

    vitest() {
        return this.configs.get('vitest');
    }

    tailwind() {
        return this.configs.get('tailwind');
    }

    postcss() {
        return this.configs.get('postcss');
    }

    next() {
        return this.configs.get('next');
    }

    nuxt() {
        return this.configs.get('nuxt');
    }

    get(name) {
        return this.configs.get(name);
    }

    has(name) {
        return this.configs.has(name);
    }

    list() {
        return Array.from(this.configs.keys());
    }
}

const konf = new KonfReader();

export default konf;
export { KonfReader };
