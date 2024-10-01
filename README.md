# logs-injector

**A simple and useful tool to automatically insert `console.log` statements into your JavaScript functions for debugging purposes.**

## Table of Contents

* [Installation](#installation)
* [Start](#start)
* [Features](#features)
* [Usage](#usage)
* [Example](#example)
* [Explanation](#explanation)

## Installation

This package is available via [npm](https://www.npmjs.com/).

Before installing, make sure you have [Node.js](https://nodejs.org/) installed.

To install the package, run the following command:

## Usage

The `logs-injector` tool can be used to automatically insert `console.log` statements into your JavaScript functions. Here’s how to use it effectively:

### Step 1: Install the Package

Make sure you have installed the package using npm:

```bash
npm install logs-injector
```

## Start 

```bash
install logs-injector
```

## Run the Tool

```bash
node path/to/logs-injector.js path/to/your/javascript-file.js
```

## Example

```bash
function multiply(x, y) {
  return x * y;
}

console.log(multiply(5, 10));
```

## After Running logs-injector

```bash
function multiply(x, y) {
  console.log('Function: multiply | Variables: x, y');
  return x * y;
}

console.log(multiply(5, 10));
```


## Features


Parsing: The JavaScript file is read and parsed into an AST.

```bash
const ast = parser.parse(code, { sourceType: 'module', plugins: ['jsx'] });
```


## Explanation

The AST is traversed to locate function declarations, expressions, and arrow functions.

```bash
traverse(ast, {
    FunctionDeclaration(path) {
        insertConsoleLog(path);
    },
    FunctionExpression(path) {
        insertConsoleLog(path);
    },
    ArrowFunctionExpression(path) {
        insertConsoleLog(path);
    },
});
```

## Log Injection: 

A console log statement is injected at the start of each identified function.

## Code Generation: 

The modified AST is transformed back into JavaScript code.
