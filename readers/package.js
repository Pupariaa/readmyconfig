import { readFileSync, existsSync } from 'fs';
import { resolve } from 'path';

export function readPackageJson() {
    const paths = [
        resolve(process.cwd(), 'package.json'),
        resolve(process.cwd(), '..', 'package.json')
    ];

    for (const path of paths) {
        if (existsSync(path)) {
            const content = readFileSync(path, 'utf8');
            return JSON.parse(content);
        }
    }

    throw new Error('package.json not found');
}

export function getPackageName() {
    const pkg = readPackageJson();
    return pkg.name;
}

export function getPackageVersion() {
    const pkg = readPackageJson();
    return pkg.version;
}

export function getDependencies() {
    const pkg = readPackageJson();
    return pkg.dependencies || {};
}

export function getDevDependencies() {
    const pkg = readPackageJson();
    return pkg.devDependencies || {};
}

export function getScripts() {
    const pkg = readPackageJson();
    return pkg.scripts || {};
}
