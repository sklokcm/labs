'use strict';

// Implement function `range(start: number, end: number): array` returning
// array with all numbers from the range [15, 30] including endpoints

const range = (start, end) =>{
    let arr=[];
    for(let i = start; i<=end; i++){
        arr.push(i);
    }
    return arr;
}

console.log(range(1, 67));
