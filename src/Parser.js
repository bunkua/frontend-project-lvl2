export default (data, dataFormat) => {
  let parsed = '';
  switch (dataFormat) {
    case '.json':
      parsed = JSON.parse(data);
      break;
    default:
      break;
  }
  return parsed;
};
