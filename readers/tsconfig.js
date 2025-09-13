import { readFileSync, existsSync } from 'fs';
import { resolve } from 'path';

export function readTsConfig() {
    const paths = [
        resolve(process.cwd(), 'tsconfig.json'),
        resolve(process.cwd(), '..', 'tsconfig.json')
    ];

    for (const path of paths) {
        if (existsSync(path)) {
            const content = readFileSync(path, 'utf8');
            return JSON.parse(content);
        }
    }

    return null;
}

export function getCompilerOptions() {
    const tsconfig = readTsConfig();
    return tsconfig?.compilerOptions || {};
}

export function getTarget() {
    const opts = getCompilerOptions();
    return opts.target || 'es5';
}

export function getModule() {
    const opts = getCompilerOptions();
    return opts.module || 'commonjs';
}

export function getOutDir() {
    const opts = getCompilerOptions();
    return opts.outDir || 'dist';
}

export function getRootDir() {
    const opts = getCompilerOptions();
    return opts.rootDir || 'src';
}

export function isStrict() {
    const opts = getCompilerOptions();
    return opts.strict || false;
}
