'use strict';

const removeElement = (array, item) => {
  const i = array.indexOf(item);
  if(i >= 0){
    array.splice(i, 1);
  }
  return array;
};

console.log(removeElement([1,2,3,4,5,6,7], 6));
