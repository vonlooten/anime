import { stringContains, round } from "../src/helpers";

describe("Helpers", () => {
  // test needed
  test("selectString", () => {});

  test("stringContains - should validate if string contains a word or character", () => {
    expect(stringContains("the great chinese wall", "great" )).toBeTruthy();
    expect(stringContains("none", "n")).toBeTruthy();
    expect(stringContains("the great chinese wall", "none")).toBeFalsy();
    expect(stringContains("none", 't')).toBeFalsy();
  });

  test("clamp", () => {
    // clamp min
    expect(anime.clamp(15, 17, 20)).toBe(17);
    // clamp max
    expect(anime.clamp(15, 12, 13)).toBe(13);
    // clamp between min max
    expect(anime.clamp(15.123, 13, 16)).toBe(15.123);
    // clamp NaN if not a number
    expect(anime.clamp("val", "min", "max")).toBeNaN();
  });

  test("round", () => {});

  test("random", () => {
    // random above min
    expect(anime.random(10, 20)).toBeGreaterThanOrEqual(10);
    // random below max
    expect(anime.random(10, 20)).toBeLessThanOrEqual(20);
    // random string input => "NaN" + min
    expect(anime.random("hello", "world")).toBe("NaNhello");
  });

  // test needed
  test("is", () => {});

  // test needed
  test("filterArray", () => {
    const arr = [15, 20, 30];
    // expect(anime.helpers.helpersfilterArray(arr)).arrayContaining([15,20,30])
  });

  // test needed
  test("flattenArray", () => {});
  // test needed
  test("toArray", () => {});

  // test needed
  test("arrayContains", () => {});

  // test needed
  test("cloneObject", () => {});

  // test needed
  test("replaceObjectProps", () => {});

  // test needed
  test("mergeObjects", () => {});

  // test needed
  test("applyArguments", () => {});

  // test needed
  test("isBrowser", () => {});
});
