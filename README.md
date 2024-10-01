# Auto Logger Package

This package automatically inserts `console.log` statements into all functions in a JavaScript file to log function variables for debugging purposes.

[![NPM Version][npm-version-image]][npm-url]
[![NPM Install Size][npm-install-size-image]][npm-install-size-url]
[![NPM Downloads][npm-downloads-image]][npm-downloads-url]

# logs-injector

**A simple and useful tool to automatically insert `console.log` statements into your JavaScript functions for debugging purposes.**

## Table of Contents

* [Installation](#installation)
* [Features](#features)
* [Usage](#usage)
* [Running Tests](#running-tests)
* [Examples](#examples)
* [Contributing](#contributing)
* [License](#license)

## Installation

This package is available via [npm](https://www.npmjs.com/).

Before installing, make sure you have [Node.js](https://nodejs.org/) installed.

To install the package, run the following command:

```bash
$ npm install logs-injector


## Features

* **Automatic Console Log Insertion**: Injects `console.log` statements into every function in your JavaScript files, logging function parameters and return values.
* **AST-based Parsing**: Uses [Babel](https://babeljs.io/) to parse your JavaScript into an Abstract Syntax Tree (AST) to identify and modify functions.
* **Formatted Code**: After injection, your code is automatically formatted using [Prettier](https://prettier.io/).
* **Ease of Debugging**: Captures function arguments and return values, helping you quickly identify and fix issues in your code.
* **No Code Change**: Your original code logic remains intact; only logging statements are added to improve traceability.


## Usage

1. **Install the package**: First, install the package via npm.
   ```bash
   npm install logs-injector



### Step-by-Step Guide:

1. **Install**: Show the npm installation command.
2. **Inject Logs**: Provide instructions on how to run your tool on a file.
3. **Run the Code**: Explain how users can see the injected logs by running their JavaScript files.
4. **Provide an Example**: Show a sample before-and-after code snippet to make it clear how the tool works.

You can now add this into your `README.md` file under the **Usage** section!


## Example

Here's a quick example to demonstrate how the `logs-injector` package works.

Suppose you have a JavaScript file `app.js` with the following code:

```js
// app.js

function multiply(x, y) {
  return x * y;
}

console.log(multiply(5, 10));


### Explanation:
1. **Original Code Example**: Provide a snippet of the user's original code.
2. **Injector Command**: Show how to run the `logs-injector` tool on the file.
3. **Modified Code**: Present the modified version of the code with injected logs.
4. **Output Example**: Explain the expected console output after running the modified file.

You can now include this **Example** section in your `README.md` file to help users understand how to use your package!


## Running Tests

To ensure that everything is working as expected, you can run the provided tests.

### Prerequisites

Make sure you have installed all the dependencies:

```bash
npm install

