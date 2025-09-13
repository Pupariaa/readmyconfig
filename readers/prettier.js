import { readFileSync, existsSync } from 'fs';
import { resolve } from 'path';

export function readPrettierConfig() {
    const paths = [
        resolve(process.cwd(), '.prettierrc'),
        resolve(process.cwd(), '.prettierrc.json'),
        resolve(process.cwd(), 'prettier.config.js'),
        resolve(process.cwd(), '..', '.prettierrc'),
        resolve(process.cwd(), '..', '.prettierrc.json')
    ];

    for (const path of paths) {
        if (existsSync(path)) {
            if (path.endsWith('.json')) {
                const content = readFileSync(path, 'utf8');
                return JSON.parse(content);
            } else if (path.endsWith('.js')) {
                return readFileSync(path, 'utf8');
            } else {
                return readFileSync(path, 'utf8');
            }
        }
    }

    return null;
}

export function getPrettierSemi() {
    const config = readPrettierConfig();
    if (typeof config === 'object' && config !== null) {
        return config.semi || true;
    }
    return true;
}

export function getPrettierSingleQuote() {
    const config = readPrettierConfig();
    if (typeof config === 'object' && config !== null) {
        return config.singleQuote || false;
    }
    return false;
}

export function getPrettierTabWidth() {
    const config = readPrettierConfig();
    if (typeof config === 'object' && config !== null) {
        return config.tabWidth || 2;
    }
    return 2;
}

export function getPrettierTrailingComma() {
    const config = readPrettierConfig();
    if (typeof config === 'object' && config !== null) {
        return config.trailingComma || 'es5';
    }
    return 'es5';
}
