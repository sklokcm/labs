'use strict';

const pipe = (...fns) => {
    for (let func of fns){
        if (typeof(func) !== "function"){
            throw new Error("Argument is not a function!");
        }
    }
    return (x) => {
        let result = x;
        for (const func of fns) {
            result = func(result);
        }
        return result;
    };
};

const func = pipe((x=>x+3),(x=>x*3),(x=>x-3));
console.log(func(5));

