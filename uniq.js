import uniq from 'lodash/uniq.js';

const a = uniq(['a', 'b', 'a', 'f', 'd', 'e']).sort();
console.log(a);
