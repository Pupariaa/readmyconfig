import Konf from './index.js';

function runTests() {
    console.log('Running readmyconfig tests...\n');

    // Test 1: Check if package.json is readable
    try {
        const pkg = Konf.package();
        console.log('✓ package.json readable:', pkg ? 'Yes' : 'No');
        if (pkg) {
            console.log('  - Name:', pkg.name);
            console.log('  - Version:', pkg.version);
        }
    } catch (err) {
        console.log('✗ package.json error:', err.message);
    }

    // Test 2: Check available configs
    const available = Konf.list();
    console.log('\n✓ Available configs:', available.length > 0 ? available.join(', ') : 'None');

    // Test 3: Test individual config methods
    const configs = [
        { name: 'tsconfig', method: () => Konf.tsconfig() },
        { name: 'vite', method: () => Konf.vite() },
        { name: 'eslint', method: () => Konf.eslint() },
        { name: 'prettier', method: () => Konf.prettier() },
        { name: 'webpack', method: () => Konf.webpack() },
        { name: 'babel', method: () => Konf.babel() }
    ];

    console.log('\n✓ Config availability:');
    configs.forEach(({ name, method }) => {
        try {
            const result = method();
            console.log(`  - ${name}:`, result ? 'Found' : 'Not found');
        } catch (err) {
            console.log(`  - ${name}: Error - ${err.message}`);
        }
    });

    // Test 4: Test has() method
    console.log('\n✓ has() method tests:');
    ['package', 'tsconfig', 'vite', 'eslint'].forEach(name => {
        console.log(`  - ${name}:`, Konf.has(name));
    });

    console.log('\nTests completed!');
}

runTests();
