import fs from 'fs';

// BEGIN
export default (filePath, period, cb) => {
    let lastTime = null;
    let timerId = setInterval(() => {
      fs.stat(filePath, (err, stats) => {
        if (err) {
          clearInterval(timerId);
          cb(err);
          return;
        }
        const modified = stats.mtimeMs;
        if (lastTime === null) {
            lastTime = modified;
        } else if (modified > lastTime) {
            lastTime = modified;
          cb(null);
        }
      });
    }, period);
    return timerId;
  };
// END
