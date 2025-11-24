'use strict';

const sum = (...args) => {
  let s = 0;
  for (let i of args){
    s+=i;
  }
  return s;
};

console.log(sum(1,2,3,4,5))
