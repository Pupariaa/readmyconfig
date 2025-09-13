import Konf from './index.js';

// Example usage in a real project
console.log('=== Project Configuration Reader ===\n');

// Get project basic info
const pkg = Konf.package();
if (pkg) {
    console.log(`Project: ${pkg.name} v${pkg.version}`);
    console.log(`Description: ${pkg.description || 'No description'}`);
    console.log(`Main entry: ${pkg.main || 'Not specified'}`);
    console.log(`Type: ${pkg.type || 'CommonJS'}`);

    if (pkg.scripts) {
        console.log('\nAvailable scripts:');
        Object.entries(pkg.scripts).forEach(([name, script]) => {
            console.log(`  ${name}: ${script}`);
        });
    }
}

// Check TypeScript configuration
const tsconfig = Konf.tsconfig();
if (tsconfig) {
    console.log('\n=== TypeScript Configuration ===');
    console.log(`Target: ${tsconfig.compilerOptions?.target || 'es5'}`);
    console.log(`Module: ${tsconfig.compilerOptions?.module || 'commonjs'}`);
    console.log(`Strict mode: ${tsconfig.compilerOptions?.strict || false}`);
    console.log(`Out directory: ${tsconfig.compilerOptions?.outDir || 'dist'}`);
}

// Check build tools
const vite = Konf.vite();
if (vite) {
    console.log('\n=== Vite Configuration ===');
    console.log('Vite config found (JS/TS format)');
}

// Check linting
const eslint = Konf.eslint();
if (eslint) {
    console.log('\n=== ESLint Configuration ===');
    if (typeof eslint === 'object') {
        console.log('Rules:', Object.keys(eslint.rules || {}).length);
        console.log('Extends:', eslint.extends?.length || 0);
    } else {
        console.log('ESLint config found (JS format)');
    }
}

// Check formatting
const prettier = Konf.prettier();
if (prettier) {
    console.log('\n=== Prettier Configuration ===');
    if (typeof prettier === 'object') {
        console.log('Semi:', prettier.semi);
        console.log('Single quotes:', prettier.singleQuote);
        console.log('Tab width:', prettier.tabWidth);
    } else {
        console.log('Prettier config found');
    }
}

// Summary
console.log('\n=== Summary ===');
console.log(`Total configs found: ${Konf.list().length}`);
console.log('Available configs:', Konf.list().join(', '));

// Check for specific frameworks
if (Konf.has('next')) {
    console.log('Next.js project detected');
}
if (Konf.has('nuxt')) {
    console.log('Nuxt.js project detected');
}
if (Konf.has('tailwind')) {
    console.log('Tailwind CSS detected');
}
