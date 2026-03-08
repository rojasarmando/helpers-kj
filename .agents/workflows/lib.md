---
description: How to build and test the HelpersKJ library
---

# HelpersKJ Library Workflow

This workflow describes how to manage the HelpersKJ library.

## Build and Package

To build the library for distribution (ESM and UMD):

```bash
npm run build
```

The output will be in the `dist/` directory.

## Testing

To run unit tests:

```bash
npm test
```

## Adding New Features

1. Define utility functions in `src/utils.ts`.
2. Add DOM-related methods to the `HelpersKJ` class in `src/dom.ts`.
3. Export them in `src/index.ts`.
4. Add a test case in `src/tests/`.
