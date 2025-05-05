import fsp from 'fs/promises';

// BEGIN
const transformPath = (path) => {
    return fsp.stat(path)
        .then(stats => {
            if (stats.isDirectory()) {
                return "directory";
            }

            if (stats.isFile()) {
                return "file";
            }

            return null;
        })
        .catch(() => {
            return null;
        });
};

export const getTypes = (filePaths) => {
    const promises = filePaths.map(transformPath);
    return Promise.all(promises);
};
// END