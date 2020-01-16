const countUniqueValues = require("./countUniqueValues");

describe("checking if this finds count of unique values", () => {
  test("see if this works", () => {
    expect(countUniqueValues([1, 1, 1, 1, 2])).toEqual(2);
    expect(countUniqueValues([1, 2, 3, 4, 5, 6])).toEqual(6);
    expect(countUniqueValues([-1, 5, 5])).toEqual(2);
  });
});
