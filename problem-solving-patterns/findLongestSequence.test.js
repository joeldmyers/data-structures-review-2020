const {
  findLongestSequence,
  maxSubarraySum
} = require("./findLongestSequence");

describe("checking if it will find longest sequence", () => {
  test("see if this works", () => {
    expect(findLongestSequence("brethren")).toEqual("brethr");
    expect(findLongestSequence("hellothere")).toEqual("lother");
  });
});
