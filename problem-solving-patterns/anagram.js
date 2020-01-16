const validAnagram = (string1, string2) => {
  if (string1.length !== string2.length) {
    return false;
  }

  let frequencyString1 = {};
  let frequencyString2 = {};

  for (let char of string1) {
    frequencyString1[char] = (frequencyString1[char] || 0) + 1;
  }

  for (let char of string2) {
    frequencyString2[char] = (frequencyString2[char] || 0) + 1;
  }

  for (let key in frequencyString1) {
    if (
      !frequencyString2[key] ||
      frequencyString1[key] !== frequencyString2[key]
    ) {
      return false;
    }
  }

  return true;
};

module.exports = validAnagram;
