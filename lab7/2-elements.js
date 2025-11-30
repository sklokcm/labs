'use strict';

const removeElements = (array, ...items) => {
  for(let i in items){
    if(i >= 0){
    array.splice(i, 1);
  }
  }
  return array;
};

console.log(removeElements([1,2,3,4,5,6,7], 1, 6));