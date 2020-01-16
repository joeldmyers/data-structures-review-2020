const checkSquare = require("./checkSquare");

describe("Test if the second array's items are the square of the first array's items", () => {
  test("simple array check", () => {
    expect(checkSquare([1, 2, 3], [1, 4, 9])).toBe(true);
  });
});
