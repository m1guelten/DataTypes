'use strict';

const inc=(num)=>{
    if (typeof num === 'object') {
      num.n = num.n+1;
    }
  }
  

module.exports = { inc };
