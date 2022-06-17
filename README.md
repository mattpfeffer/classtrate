# classtrate

A small utility for stripping unwanted classes from HTML strings ✂️

## When do you need this?

Working with genereated HTML can be a pain; you don't always have control of the output and when you
need to use that markup somewhere else you often have to perform some clean up first. This library
allows you to filter specific vendor generated classes (or IDs) to make working with HTML strings
easier. Some possible use cases:

-   Reducing document size prior to HTML minification
-   Preventing class collisions and other conflicts
-   Cleaning output for user operations like copying and pasting

## Minimum Requirements

This library makes use of
[String.prototype.replaceAll()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll)
so support for **ES2021** or higher is required.

_See [Caniuse](https://caniuse.com/mdn-javascript_builtins_string_replaceall)_

## Installation

Install the package:

```sh
# Using npm
npm install classtrate

# Using Yarn
yarn add classtrate
```

## Usage

Import and filter with a string or glob:

```js
import { filter } from 'classtrate'; // require() also supported

const source = '<h1 class="br-fGy7jw my-class">My Heading</h1>'; // String of janky HTML
const pattern = 'br-*'; // or []

const output = filter(source, pattern); // <h1 class="my-class">My Heading</h1>
```

## Features

Supports these glob features:

-   Brace Expansion
-   Extended glob matching
-   "Globstar" \*\* matching
