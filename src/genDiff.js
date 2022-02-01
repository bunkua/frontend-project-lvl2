import getData from './FileHandler.js';
import buildTree from './Builder.js';
import render from './Renderer.js';

export default function genDiff(beforeFilePath, afterFilePath, format = null) {
  const beforeData = getData(beforeFilePath);
  const afterData = getData(afterFilePath);

  const ast = buildTree(beforeData, afterData);
  return render(ast, format);
}
