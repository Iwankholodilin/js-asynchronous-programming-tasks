import fs from 'fs';

// BEGIN
export default (filePath) => {
    const callback = (_error, data) => console.log(data)
    fs.readFile(filePath, 'utf-8', callback);
};
// END