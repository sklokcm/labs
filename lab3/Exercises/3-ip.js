'use strict';

const ipToInt = (ip) => {
  const str = ip.split('.');
  const int = [];
  for(let i = 0; i<str.length; i++){
    int.push(parseInt(str[i]));
  }
  const r = (int[0]<<8<<8<<8) + (int[1]<<8<<8) + (int[2]<<8) + int[3];
  return r;
};


console.log(ipToInt('192.168.1.10'));
