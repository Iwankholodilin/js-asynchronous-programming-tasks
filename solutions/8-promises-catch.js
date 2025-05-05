import fsp from 'fs/promises';

// BEGIN
export const touch = (filePath) => {
    return fsp.access(filePath)
      .then(() => {
        return Promise.resolve();
      })
      .catch(() => {
        return fsp.writeFile(filePath, '');
      });
  };
// END