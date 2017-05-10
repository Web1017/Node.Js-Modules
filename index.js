'use strict';

// For more Information on how modules was set up, Refer to following link.
// ---> https://mva.microsoft.com/en-US/training-courses/mastering-nodejs-part-2-nodejs-modules-16666?l=i0DY0JjtC_3906218965

//type node-inspector to launch it
/*
    destructuring & aliasing (git)
    const {doSomething, getItDone: git} = require('./first-module');
    doSomething();
    git();
*/
const firstMod1 = require('./first-module');

const firstMod2 = require('./first-module');

console.log(firstMod1 === firstMod2);

firstMod1.put('test data');
console.log(firstMod2.get());

// const configurableMod = require('./configurable-module');

// const configuredA = configurableMod ({logPrefix: 'A> '});
// configuredA.log('test');

// const configuredB = configurableMod ({logPrefix: 'B> '});
// configuredB.log('test 2');