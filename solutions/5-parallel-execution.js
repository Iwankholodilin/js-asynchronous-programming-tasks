import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

// BEGIN
export const getDirectorySize = (dirPath, cbDir) => {
    fs.readdir(dirPath, (err, files) => {
      if (err) {
        cbDir(err);
        return;
      }
      const filePaths = files.map(file => path.join(dirPath, file));
      async.map(filePaths, (filePath, cbFile) => {
        fs.stat(filePath, (errStat, stats) => {
          if (errStat) {
            cbFile(errStat);
            return;
          }
          if (stats.isFile()) {
            cbFile(null, stats.size);
          } else {
            cbFile(null, 0);
          }
        });
      }, (errMap, res) => {
        if (errMap) {
          cbDir(errMap);
          return;
        }
	const sumSize = _.sumBy(res, size => size);
        cbDir(null, sumSize);
      });
    });
  };
// END
