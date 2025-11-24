'use strict';

const max = (matrix) => {
  let m=matrix[0][0];
  for(let i = 0; i<matrix.length; i++){
    const r = matrix[i];
    for(let j = 0; j<r.length; j++){
      if(m<r[j]){
        m=r[j];
      }
    }
  }
  return m;
}

console.log(max([[1,2,3], [4,5], [6,7,8,9]]));

