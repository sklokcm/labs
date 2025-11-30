'use strict';

const store = (x) => () => x;

const item = store(3);
const res = item();
console.log(res);
