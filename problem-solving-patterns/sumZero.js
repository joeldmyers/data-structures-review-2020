const sumZero = array => {
  // this takes a sorted array and returns the first pair that sums to zero.

  let leftPointer = 0;
  let rightPointer = array.length - 1;

  while (leftPointer < rightPointer) {
    const a = array[leftPointer];
    const b = array[rightPointer];
    const sum = a + b;

    if (sum === 0) {
      return [a, b];
    } else if (sum > 0) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }
  return undefined;
};

module.exports = sumZero;
