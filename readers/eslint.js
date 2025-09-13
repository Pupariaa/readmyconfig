import { readFileSync, existsSync } from 'fs';
import { resolve } from 'path';

export function readEslintConfig() {
    const paths = [
        resolve(process.cwd(), '.eslintrc.json'),
        resolve(process.cwd(), '.eslintrc.js'),
        resolve(process.cwd(), 'eslint.config.js'),
        resolve(process.cwd(), '..', '.eslintrc.json'),
        resolve(process.cwd(), '..', '.eslintrc.js')
    ];

    for (const path of paths) {
        if (existsSync(path)) {
            if (path.endsWith('.json')) {
                const content = readFileSync(path, 'utf8');
                return JSON.parse(content);
            } else {
                return readFileSync(path, 'utf8');
            }
        }
    }

    return null;
}

export function getEslintRules() {
    const config = readEslintConfig();
    if (typeof config === 'object' && config !== null) {
        return config.rules || {};
    }
    return {};
}

export function getEslintExtends() {
    const config = readEslintConfig();
    if (typeof config === 'object' && config !== null) {
        return config.extends || [];
    }
    return [];
}

export function getEslintEnv() {
    const config = readEslintConfig();
    if (typeof config === 'object' && config !== null) {
        return config.env || {};
    }
    return {};
}
