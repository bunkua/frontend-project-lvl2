export default (ast) => {
  const result = ast.map((node) => {
    let string;
    switch (node.status) {
      case 'added':
        string = `  + ${node.propertyName}: ${node.newValue}`;
        break;
      case 'removed':
        string = `  - ${node.propertyName}: ${node.oldValue}`;
        break;
      case 'unchanged':
        string = `    ${node.propertyName}: ${node.newValue}`;
        break;
      case 'changed':
        string = [
          `  - ${node.propertyName}: ${node.oldValue}`,
          `  + ${node.propertyName}: ${node.newValue}`,
        ].join('\n');
        break;
      default:
        throw new Error(`no such case: ${node.status}`);
    }
    return string;
  }).join('\n');
  return `{\n${result}\n}`;
};
