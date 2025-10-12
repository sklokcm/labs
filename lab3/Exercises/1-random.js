'use strict';

const random = (min, max) => {
  // Generate random Number between from min to max
  // Use Math.random() and Math.floor()
  // See documentation at MDN
  const randNum = Math.floor(Math.random() * (max - min + 1) + min);
  return randNum;
};

console.log(random(1, 20))
