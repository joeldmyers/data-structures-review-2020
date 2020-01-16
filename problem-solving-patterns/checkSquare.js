const checkSquare = (array1, array2) => {
  const array1Squared = array1.map(item => item * item);
  console.log(array1Squared);
  array1Squared.forEach((item, index) => {
    if (item !== array2[index]);
    return false;
  });

  return true;
};

module.exports = checkSquare;
