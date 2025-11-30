'use strict';

const contract = (fn, ...types) => {
  const expectedReturn = types.pop();
  const expectedArgs = types;

  return (...params) => {
    if (params.length !== expectedArgs.length) {
      throw new TypeError(`Expected ${expectedArgs.length} arguments, got ${params.length}`);
    }

    for (let i = 0; i < params.length; i++) {
      const currentVal = params[i];
      const typeRule = expectedArgs[i];
      const typeString = typeRule.name.toLowerCase();

      if (typeof currentVal !== typeString) {
        throw new TypeError(`Argument at index ${i} expected to be ${typeRule.name}`);
      }
    }

    const output = fn(...params);

    const returnTypeString = expectedReturn.name.toLowerCase();
    
    if (typeof output !== returnTypeString) {
      throw new TypeError(`Result expected to be ${expectedReturn.name}`);
    }

    return output;
  };
};

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
console.log(addNumbers(2, 3));
