'use strict';
// const firstMod = require('./first-module');

// firstMod.doIt();

const configurableMod = require('./configurable-module');

const configuredA = configurableMod ({logPrefix: 'A> '});
configuredA.log('test');