
# Nickael Almeida ESLint config

## Whats included?

- Standard config base

## Setup

### Node.js

Install dependencies:
```
npm i -D git+https://github.com/nickaelAlmeida/eslint-config.git
```
Inside `eslint.config.mjs`
```
import config from 'eslint-config/node.mjs';

export default [
  ...config.recommended,
];
```
Inside `package.json`
```
{
  "scripts": {
    "lint": "eslint ./src --format stylish"
  }
}
```