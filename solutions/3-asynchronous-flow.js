import fs from 'fs';

// BEGIN
export const compareFileSizes = (oneFilepath, twoFilepath, cb) => {
    fs.stat(oneFilepath, (oneError, oneData) => {
      if (oneError) {
        cb(oneError);
        return;
      }
      fs.stat(twoFilepath, (twoError, twoData) => {
        if (twoError) {
          cb(twoError);
          return;
        }
  
        const oneSize = oneData.size;
        const twoSize = twoData.size;
  
        const result = Math.sign(oneSize - twoSize);
  
        cb(null, result);
      });
    });
  };
// END