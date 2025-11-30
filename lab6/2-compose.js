'use strict';

const compose = (...fns) => {
    const handlers = [];
    const composed = (x) => {
        try {
            return fns.reduceRight((acc, fn) => fn(acc), x);
        } catch (error) {
            for (const handler of handlers) {
                handler(error);
            }
            return undefined;
        }
    };
    composed.on = (name, handler) => {
        if (name === 'error' && typeof handler === 'function') {
            handlers.push(handler);
        }
    };

    return composed;
};


const inc = x => x + 1;
const double = x => x * 2;
const f = compose(inc, double);
console.log(f(5));

const badFunc = x => { throw new Error('Something went wrong!'); };
const fError = compose(inc, badFunc, double);
fError.on('error', (e) => {
    console.log("Error: ", e.message);
});

const result = fError(5);
console.log('Result:', result);