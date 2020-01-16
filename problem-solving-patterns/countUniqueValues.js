const countUniqueValues = array => {
  const set = new Set();
  array.forEach(item => {
    set.add(item);
    return;
  });
  return set.size;
};
module.exports = countUniqueValues;
