'use strict';

const array = () => {
  const data = [];
  const a = (i) => data[i];
  a.push = (i) => data.push(i);
  a.pop = () => data.pop();
  return a;
};
const arr = array();

arr.push("Kicks");
arr.push("Give up");

console.log(arr(0));
console.log(arr(1));

arr.pop();

console.log(arr(1));