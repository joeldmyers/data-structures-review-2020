const sumZero = require("./sumZero");

describe("checking if this properly finds two items in an array that sum to zero", () => {
  test("see if this works", () => {
    expect(sumZero([-3, -2, -1, 0, 1, 2, 3])).toEqual([-3, 3]);
    expect(sumZero([-4, -2, -1, 0, 1, 2, 3])).toEqual([-2, 2]);
    expect(sumZero([-1, 5])).toEqual(undefined);
  });
});
