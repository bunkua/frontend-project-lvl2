import uniq from 'lodash/uniq.js';
import has from 'lodash/has.js';

const getObjectsKeys = (...objects) => {
  const keys = [];
  objects.map((object) => keys.push(...Object.keys(object)));
  return uniq(keys).sort();
};

const buildNode = (status, propertyName, oldValue, newValue) => (
  {
    status, propertyName, oldValue, newValue,
  }
);

const compare = (key, before, after) => {
  let result;

  if (!has(before, key)) {
    return buildNode('added', key, null, after[key]);
  }

  if (!has(after, key)) {
    return buildNode('removed', key, before[key], null);
  }

  if (before[key] === after[key]) {
    result = buildNode('unchanged', key, before[key], after[key]);
  } else {
    result = buildNode('changed', key, before[key], after[key]);
  }

  return result;
};

export default (beforeData, afterData) => {
  const keys = getObjectsKeys(beforeData, afterData);
  return keys.map((key) => compare(key, beforeData, afterData));
};
