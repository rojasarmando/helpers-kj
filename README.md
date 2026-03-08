# HelpersKJ 🚀

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=flat&logo=vitest&logoColor=white)](https://vitest.dev/)

A premium, high-performance, and native TypeScript DOM manipulation library. Inspired by the simplicity of jQuery but built with modern Vanilla JS standards. **HelpersKJ** is designed to be lightweight, typed, and dependency-free.

---

## ✨ Features

- 🚀 **Lightning Fast**: No overhead, just native DOM manipulation.
- 📦 **Zero Dependencies**: Pure Vanilla TypeScript.
- 🛡️ **Type Safe**: Full IntelliSense support with auto-generated declaration files.
- 🌐 **Dual Distribution**: Ships with both **ES Modules (ESM)** and **UMD** (for CDN/Unpkg).
- 🧪 **Rock Solid**: 100% test coverage on core utilities using Vitest & JSDOM.

---

## 📦 Installation

```bash
npm install helpers-kj
```

Or use it via CDN:
```html
<script src="https://unpkg.com/helpers-kj/dist/helpers-kj.umd.js"></script>
```

---

## 🛠️ Quick Start

### The `kj()` Factory
The entry point of the library is the `kj()` function. It accepts selectors, `HTMLElement`, or `NodeList`.

```typescript
import { kj } from 'helpers-kj';

// Apply a premium shadow effect
kj('.card').shadow('rgba(0,0,0,0.1)');

// Chainable actions
kj('button')
  .visibility(true)
  .disabled(false);
```

### Form Validation
Built-in helpers for common validation patterns:

```typescript
// Auto-uppercase inputs as the user types
kj('#username').uppercase();

// Validate empty field with error message
kj('#email').emptyField('#email-error');

// Secure password validation (Uppercase + Lowercase + Number)
kj('#password').securePassword('#pass-error');
```

### Advanced Utilities
Standalone functions for daily tasks:

```typescript
import { randomNumber, getLocalTime, ajax } from 'helpers-kj';

const code = randomNumber(1000, 9999);
console.log(`Your time is: ${getLocalTime()}`);

// Clean AJAX requests
ajax('https://api.example.com/data', (data) => {
  console.log('Received:', data);
}, { key: 'value' });
```

---

## 🧪 Development & Testing

We take quality seriously. Our test suite ensures every helper works as expected across environments.

```bash
# Install dependencies
npm install

# Run the test suite
npm test

# Build for production
npm run build
```

---

## 👤 Author

**Armando Rojas**
- GitHub: [@rojasarmando](https://github.com/rojasarmando)

*Refactored from a jQuery legacy project into a modern TS powerhouse.*

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
