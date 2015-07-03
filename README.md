[![NPM Version](http://img.shields.io/npm/v/shimixify.svg?style=flat)](https://npmjs.org/package/shimixify)
[![Build Status](http://img.shields.io/travis/royriojas/shimixify.svg?style=flat)](https://travis-ci.org/royriojas/shimixify)

# shimixify
> browserify transform to replace require calls to custom browser globals

## Overview
This transform will turn this:

```javascript
var win = require('window');
var doc = require('document');
```

Into this:

```javascript
var win = (global.window);
var doc = (global.document);
```

So your code works well once it runs in the browser.

## Install

```bash
npm i --save-dev shimixify
```

## Usage

```

// this is the hash of shims that will be matched against the
// calls to require. For example calling
// require('jQuery') ==> will be replaced by ==> (global.jQuery);
// browserify injects a global variable that is a reference to the window object
// technically you can also use jQuery directly without using the `global` notation
var shims = {
  window: 'global.window',
  jQuery: 'global.jQuery',
  chrome: 'global.chrome',
  screen: 'global.screen',
  document: 'global.document',
  Worker: 'global.Worker',
  Promise: 'global.Promise',
  self: 'global.self',
  react: 'global.React'
};

var shimify = require( 'shimify' ).configure( { shims: shims } );

var b = browserify();
b.add('./my-module');
b.transform( shimify );

b.bundle().pipe(process.stdout);
```

**NOTE:** accessing window, document or other globals from a module will work, but it makes explicit that
you're accessing a global. Using this transform will make it easier to have code that is easily testable
using tools like [proxiquerify](https://www.npmjs.com/package/proxyquire), to replace those dependencies
during unit testing.

```javascript
var proxyquire = require('proxyquire');
var mockWindow = require('mockWindow');

// this will replace calls to require('window') with a mocked instance
// in order to make the unit tests for this module
// no more globals and your code is not easier to test!
var myModule = proxyquire('./my-module', { window: mockWindow });
```

## [Changelog](./changelog.md)

