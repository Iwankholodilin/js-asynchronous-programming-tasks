import fs from 'fs';

// BEGIN
export default (filePath, data, cb) => {
    fs.writeFile(filePath, data, (err) => {
        if (!(err))
            cb();
    })
};
// END