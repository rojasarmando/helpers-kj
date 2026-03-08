---
name: helpers-kj-best-practices
description: Coding standards and patterns for the HelpersKJ library
---

# HelpersKJ Best Practices

## DOM Selection
Always use the `kj()` factory function for selecting elements. It handles `string` selectors, `HTMLElement`, and `NodeList`.

```typescript
kj('.my-class').shadow('red');
```

## Method Chaining
Most methods in `HelpersKJ` class support chaining.

```typescript
kj('button')
  .disabled(true)
  .visibility(false);
```

## Validation Pattern
Validation methods take an `errorSelector` to display error messages.

```typescript
kj('#email').emptyField('#email-error');
```

## Performance
Avoid selecting the same element multiple times in a loop. Store the `HelpersKJ` instance if needed.
