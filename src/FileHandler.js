import path from 'path';
import fs from 'fs';
import parse from './Parser.js';

const readFile = (filepath) => fs.readFileSync(filepath);
const getFileFormat = (filepath) => path.extname(filepath);
const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);

export default (filepath) => {
  const fullFilePath = getFullPath(filepath);
  const fileContent = readFile(fullFilePath);
  const fileFormat = getFileFormat(fullFilePath);
  return parse(fileContent, fileFormat);
};
