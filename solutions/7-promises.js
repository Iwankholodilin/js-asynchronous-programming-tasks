import fsp from 'fs/promises';

// BEGIN
export const reverse = async (filePath) => {
    const data = await fsp.readFile(filePath, 'utf-8');
    const revData = data.split('\n').reverse().join('\n');
    await fsp.writeFile(filePath, revData, 'utf-8');
  };
// END