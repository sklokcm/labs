'use strict';

const sum = (...args) => {
  let s=0;
  let i=0;
  do {
    s+=args[i];
    i++;
  }while(i<args.length)
  return s;
};

console.log(sum(1,3,4,6,8));
