'use strict';

const inc = (obj) =>{
  obj.num++;
};

const obj={
  num : 2
};

inc(obj);

console.log(obj);
