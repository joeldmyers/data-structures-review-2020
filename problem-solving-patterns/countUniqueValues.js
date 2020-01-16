// set approach.
// const countUniqueValues = array => {
//   const set = new Set();
//   array.forEach(item => {
//     set.add(item);
//   });
//   return set.size;
// };

// moving pointers approach.

const countUniqueValues = array => {
  // note, array must be sorted.

  let uniqueCount = 0;
  let previousItem;

  array.forEach(item => {
    if (item !== previousItem) {
      uniqueCount++;
    }
    previousItem = item;
  });
  return uniqueCount;
};

module.exports = countUniqueValues;
