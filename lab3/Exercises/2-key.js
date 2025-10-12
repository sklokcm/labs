'use strict';

const generateKey = (length, possible) => {
  // Generate string of random characters
  // Use Math.random() and Math.floor()
  // See documentation at MDN
  const str = [];
  for(let i=0; i<length; i++){
    const chr = Math.floor(Math.random() * possible.length);
    str.push(possible[chr]);
  }
  return str;
};

const alphabet = "йцукенгшщзхїфівапролджєячсмитьбюЙЦУКЕНГШЩЗХЇФІВАПРОЛДЖЄЯЧСМТБЮ";

console.log(generateKey(25,alphabet));
