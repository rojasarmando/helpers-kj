# HelpersKJ 🚀

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)

A premium, high-performance, and native TypeScript DOM manipulation library. Inspired by the simplicity of jQuery but built with modern Vanilla JS standards.

---

## 📦 Installation

```bash
npm install helpers-kj
```

Or use it via CDN (Unpkg):
```html
<script src="https://unpkg.com/helpers-kj/dist/helpers-kj.umd.js"></script>
```

---

## 🛠️ Usage Modes

### 1. Modern Module (ESM)
```typescript
import { kj, randomNumber } from 'helpers-kj';

kj('#app').shadow('blue');
```

### 2. Standard Browser (CDN)
```html
<script src="https://unpkg.com/helpers-kj/dist/helpers-kj.umd.js"></script>
<script>
  kj('#username').uppercase();
</script>
```

---

## 📚 API Reference

### DOM Manipulation (`kj()`)

The `kj(selector)` function returns a `HelpersKJ` instance with the following methods:

| Method | Description | Example |
| :--- | :--- | :--- |
| `.shadow(color?)` | Applies a box-shadow effect. Default is 'white'. Pass `false` or `"none"` to remove. | `kj('.card').shadow('red')` |
| `.disabled(bool)` | Enables or disables an input/button. | `kj('#btn').disabled(true)` |
| `.visibility(bool)`| Toggles `display: block` or `none`. | `kj('.loader').visibility(false)` |
| `.noCopy()` | Prevents cut, copy, and paste on the element. | `kj('.private').noCopy()` |
| `.uppercase()` | Transforms text to uppercase (live for inputs, immediate for others). | `kj('#name').uppercase()` |
| `.validateField(str)`| Restricts input to only specific characters. | `kj('#age').validateField('0123456789')` |
| `.maxLength(num)` | Sets the `maxlength` attribute. | `kj('#zip').maxLength(5)` |
| `.emptyField(sel)` | Validates if input is empty and shows error in `sel`. | `kj('#email').emptyField('#err')` |
| `.length(sel, min)`| Validates minimum length and shows error in `sel`. | `kj('#pwd').length('#err', 8)` |
| `.compare(sel, err)`| Compares current input with another element `sel`. | `kj('#pwd2').compare('#pwd', '#err')` |
| `.stripSpace()` | Trims whitespace from input value. | `kj('#user').stripSpace()` |
| `.securePassword(e)`| Validates password (min 1 Upper, 1 Lower, 1 Number). | `kj('#pwd').securePassword('#err')` |
| `.route(url)` | Redirects the page when the element is clicked. | `kj('#home').route('/index.html')` |
| `.clear(selector)` | Clears the innerHTML of `selector` when current element is clicked. | `kj('#reset').clear('#output')` |
| `.test()` | Shows a friendly alert message. | `kj('body').test()` |

### Standalone Utilities

You can also import/use these utility functions:

| Function | Description | Example |
| :--- | :--- | :--- |
| `randomNumber(min, max)` | Returns a random integer between min and max. | `const n = randomNumber(1, 10)` |
| `getLocalTime(date?)` | Formats time as `HH:MM:SSam/pm`. | `getLocalTime()` |
| `ajax(url, cb, p?, m?)`| Simplified Fetch wrapper for JSON requests. | `ajax('/api', console.log)` |

#### Regex Presets
Available via `HelpersKJUtils.Regex` or individual imports:
- `Regex.onlyNumbers()`
- `Regex.onlyLetters()`
- `Regex.onlyLettersNumbers()`
- `Regex.onlyPasswords()`

---

## 👤 Author
**Armando Rojas** - [rojasarmando](https://github.com/rojasarmando)

---

## 📄 License
MIT
