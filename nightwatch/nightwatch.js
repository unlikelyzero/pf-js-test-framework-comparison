#!/usr/bin/env node
// This runner is to ensure babel is registered and therefore ES6 can be used
// on the test suite source code.
require('@babel/register');
require('nightwatch/bin/runner.js');
