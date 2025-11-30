'use strict';

const iterate = (obj, callback) => {
    const keys = Object.keys(obj);
    for (const key of keys) {
        const value = obj[key];
        callback(key, value, obj);
    }
};

console.log(iterate({Twigs: 1, Lorde: 2, Rosa: 3}, (key, value, object) => {
    console.log(`Key: ${key}, Value: ${value}`);
}));

