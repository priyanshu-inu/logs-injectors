[![NPM Version][npm-version-image]][npm-url]
[![NPM Install Size][npm-install-size-image]][npm-install-size-url]
[![NPM Downloads][npm-downloads-image]][npm-downloads-url]

# logs-injector

**A simple and useful tool to automatically insert `console.log` statements into your JavaScript functions for debugging purposes.**

## Table of Contents

* [Installation](#installation)
* [Features](#features)
* [Usage](#usage)
* [Example](#example)
* [Explanation](#explanation)

## Installation

This package is available via [npm](https://www.npmjs.com/).

Before installing, make sure you have [Node.js](https://nodejs.org/) installed.

To install the package, run the following command:

```bash
```npm install logs-injector```


##Start

```npm install logs-injector```

##Run the Tool

```node path/to/logs-injector.js path/to/your/javascript-file.js```

##Example

```function multiply(x, y) {
  return x * y;
}

console.log(multiply(5, 10));```

##After Running logs-injector

```function multiply(x, y) {
  console.log('Function: multiply | Variables: x, y');
  return x * y;
}

console.log(multiply(5, 10));```


##Features


##How It Works:

Parsing: The JavaScript file is read and parsed into an AST.

```const ast = parser.parse(code, { sourceType: 'module', plugins: ['jsx'] });```

##Traversing: 

##explanation

The AST is traversed to locate function declarations, expressions, and arrow functions.

```traverse(ast, {
    FunctionDeclaration(path) {
        insertConsoleLog(path);
    },
    FunctionExpression(path) {
        insertConsoleLog(path);
    },
    ArrowFunctionExpression(path) {
        insertConsoleLog(path);
    },
});```

##usage

##Log Injection: 

A console log statement is injected at the start of each identified function.

##Code Generation: 

The modified AST is transformed back into JavaScript code.
