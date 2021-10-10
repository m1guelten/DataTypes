'use strict';

const countTypesInArray = (array) => {
    const obj = {
      number: 0,
      string: 0,
      boolean: 0,
    };
    for (const name of massiv) {
      if (typeof name === 'number'){obj.number++};
      if (typeof name === 'string'){obj.string++};
      if (typeof name === 'boolean'){obj.boolean++};
    }
    return obj;
  };
    
module.exports = { countTypesInArray };
