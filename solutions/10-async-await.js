import fsp from 'fs/promises';

// BEGIN
export const exchange = async (filePath1, filePath2) => {
    try {
      const [content1, content2] = await Promise.all([
        fsp.readFile(filePath1, 'utf-8'),
        fsp.readFile(filePath2, 'utf-8')
      ]);
      await fsp.writeFile(filePath2, content1, 'utf-8');
      await fsp.writeFile(filePath1, content2, 'utf-8');
  
    } catch (error) {
      console.error(`Ошибка при обмене содержимого файлов:`, error);
      throw error;
    }
  };
// END