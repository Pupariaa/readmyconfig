import { readFileSync, existsSync } from 'fs';
import { resolve } from 'path';

export function readViteConfig() {
    const paths = [
        resolve(process.cwd(), 'vite.config.js'),
        resolve(process.cwd(), 'vite.config.ts'),
        resolve(process.cwd(), '..', 'vite.config.js'),
        resolve(process.cwd(), '..', 'vite.config.ts')
    ];

    for (const path of paths) {
        if (existsSync(path)) {
            return readFileSync(path, 'utf8');
        }
    }

    return null;
}

export function readViteConfigJson() {
    const paths = [
        resolve(process.cwd(), 'vite.config.json'),
        resolve(process.cwd(), '..', 'vite.config.json')
    ];

    for (const path of paths) {
        if (existsSync(path)) {
            const content = readFileSync(path, 'utf8');
            return JSON.parse(content);
        }
    }

    return null;
}

export function getVitePort() {
    const config = readViteConfigJson();
    return config?.server?.port || 3000;
}

export function getViteHost() {
    const config = readViteConfigJson();
    return config?.server?.host || 'localhost';
}

export function getViteBase() {
    const config = readViteConfigJson();
    return config?.base || '/';
}
