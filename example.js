import Konf from './index.js';

console.log('Available configs:', Konf.list());

console.log('\nPackage info:');
const pkg = Konf.package();
if (pkg) {
    console.log('Name:', pkg.name);
    console.log('Version:', pkg.version);
    console.log('Scripts:', Object.keys(pkg.scripts || {}));
} else {
    console.log('No package.json found');
}

console.log('\nTypeScript config:');
const tsconfig = Konf.tsconfig();
if (tsconfig) {
    console.log('Target:', tsconfig.compilerOptions?.target);
    console.log('Module:', tsconfig.compilerOptions?.module);
    console.log('OutDir:', tsconfig.compilerOptions?.outDir);
} else {
    console.log('No tsconfig.json found');
}

console.log('\nVite config:');
const vite = Konf.vite();
if (vite) {
    console.log('Vite config found:', typeof vite === 'string' ? 'JavaScript/TypeScript' : 'JSON');
} else {
    console.log('No vite config found');
}

console.log('\nESLint config:');
const eslint = Konf.eslint();
if (eslint) {
    console.log('ESLint config found');
} else {
    console.log('No ESLint config found');
}

console.log('\nPrettier config:');
const prettier = Konf.prettier();
if (prettier) {
    console.log('Prettier config found');
} else {
    console.log('No Prettier config found');
}
