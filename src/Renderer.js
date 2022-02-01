import plain from './renderers/plain.js';

export default (ast, format) => {
  switch (format) {
    case 'plain':
      return plain(ast);
    default:
      throw new Error(`no such renderer: ${format}`);
  }
};
