'use strict';

const unique = (array) => {
    const res = [];
    for(let i of array){
        if(!res.includes(i)){
            res.push(i);
        }
    }
    return res;
};

console.log(unique([1,2,2,3,4,5,6,7,8,8,9,9,10,10]))
