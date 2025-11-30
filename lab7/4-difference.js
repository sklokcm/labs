'use strict';

const difference = (array1, array2) => {
    const res =[];
    for(let i of array1){
        if(!array2.includes(i)){
            res.push(i)
        }
    }
    return res;    
};

console.log(difference([1,2,4,6,7,8,9,3,4,6],[2,6,9,3]));
console.log(difference(['Beijing', 'Kyiv'], ['Kyiv', 'London', 'Baghdad']));

