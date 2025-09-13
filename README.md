# readmyconfig

[![npm version](https://badge.fury.io/js/readmyconfig.svg)](https://badge.fury.io/js/readmyconfig)
[![Downloads](https://img.shields.io/npm/dt/readmyconfig)](https://www.npmjs.com/package/readmyconfig)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen.svg)](https://nodejs.org/)


A simple JavaScript library to read Node.js project configuration files synchronously without requiring await.

## Installation

```bash
npm install readmyconfig
```

## Usage

```javascript
import Konf from 'readmyconfig';

// Read package.json
const pkg = Konf.package();
console.log(pkg.name, pkg.version);

// Read tsconfig.json
const tsconfig = Konf.tsconfig();
console.log(tsconfig.compilerOptions?.target);

// Read vite config
const vite = Konf.vite();
console.log(vite); // Raw content for JS/TS files

// Read ESLint config
const eslint = Konf.eslint();
console.log(eslint);

// Read Prettier config
const prettier = Konf.prettier();
console.log(prettier);

// Check what configs are available
console.log(Konf.list());

// Check if a specific config exists
if (Konf.has('package')) {
  console.log('package.json found');
}

// Get any config by name
const customConfig = Konf.get('webpack');
```

## Supported Configuration Files

- `package.json`
- `tsconfig.json`
- `vite.config.js` / `vite.config.ts`
- `.eslintrc.json` / `.eslintrc.js` / `eslint.config.js`
- `.prettierrc` / `.prettierrc.json` / `prettier.config.js`
- `webpack.config.js`
- `rollup.config.js`
- `.babelrc` / `babel.config.json`
- `jest.config.js`
- `vitest.config.ts`
- `tailwind.config.js`
- `postcss.config.js`
- `next.config.js`
- `nuxt.config.js`

## API

### Methods

- `Konf.package()` - Returns package.json content
- `Konf.tsconfig()` - Returns tsconfig.json content
- `Konf.vite()` - Returns vite config content
- `Konf.eslint()` - Returns ESLint config content
- `Konf.prettier()` - Returns Prettier config content
- `Konf.webpack()` - Returns webpack config content
- `Konf.rollup()` - Returns rollup config content
- `Konf.babel()` - Returns babel config content
- `Konf.jest()` - Returns jest config content
- `Konf.vitest()` - Returns vitest config content
- `Konf.tailwind()` - Returns tailwind config content
- `Konf.postcss()` - Returns postcss config content
- `Konf.next()` - Returns next.js config content
- `Konf.nuxt()` - Returns nuxt.js config content
- `Konf.get(name)` - Returns config by name
- `Konf.has(name)` - Checks if config exists
- `Konf.list()` - Returns array of available config names

## Features

- Synchronous reading (no await needed)
- Automatic file detection in current and parent directories
- JSON parsing for .json files
- Raw content for .js/.ts files
- Graceful handling of missing files
- ESM support

## Requirements

- Node.js 14.0.0 or higher
- ESM support

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [Nodemailer](https://nodemailer.com/)
- Inspired by modern email best practices
- Templates designed for accessibility and compatibility

## Support

- [Report bugs](https://github.com/Pupariaa/readmyconfig/issues)
- [Request features](https://github.com/Pupariaa/readmyconfig/issues)
- [Documentation](https://github.com/Pupariaa/readmyconfig#readme)

---

Made with ❤️ by [Puparia](https://github.com/Pupariaa)