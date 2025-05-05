import fs from 'fs';

// BEGIN
export const move = (srcPath, destPath, cb) => {
  fs.readFile(srcPath, (errRead, data) => {
    if (errRead) {
      cb(errRead);
      return;
    }
    fs.writeFile(destPath, data, (errWrite) => {
      if (errWrite) {
        cb(errWrite);
        return;
      }
      fs.unlink(srcPath, (errUnlink) => {
        if (errUnlink) {
          cb(errUnlink);
          return;
        }
        cb(null); 
      });
    });
  });
};
// END
