const isValidAnagram = require("./anagram");

describe("test if string B is anagram of string A", () => {
  test("check if strings are anagrams", () => {
    expect(isValidAnagram("iceman", "cinema")).toBe(true);
    expect(isValidAnagram("", "")).toBe(true);
    expect(isValidAnagram("aaz", "zaa")).toBe(true);
    expect(isValidAnagram("race", "cear")).toBe(true);
    expect(isValidAnagram("awesome", "awesom")).toBe(false);
    expect(isValidAnagram("texttwisttime", "timetwisttext")).toBe(true);
  });
});
