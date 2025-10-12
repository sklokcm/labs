'use strict';

const arr = [1, 2, "3", "456", 6.7, true, false, 400, "Lux", "Home", 8, 8.9, '6', 'h', "Yep", false, false];

const countTypesInArray = (arr)=>{
    let count = {}
    let type;
    for(const i of arr){
        type=typeof(i);
        count[type] = count[type] + 1 || 1;
    }
    return count;

};

console.log(countTypesInArray(arr));

