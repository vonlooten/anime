describe("Helpers", () => {
  // how to test
  test("SelectString", () => {});

  test("Clamp", () => {
    // clamp min
    expect(anime.clamp(15, 17, 20)).toBe(17);
    // clamp max
    expect(anime.clamp(15, 12, 13)).toBe(13);
    // clamp between min max
    expect(anime.clamp(15.123, 13, 16)).toBe(15.123);
    // clamp NaN if not a number
    expect(anime.clamp("val", "min", "max")).toBeNaN();
  });

  test("Random", () => {
    // random above min
    expect(anime.random(10, 20)).toBeGreaterThanOrEqual(10);
    // random below max
    expect(anime.random(10, 20)).toBeLessThanOrEqual(20);
    // random string input => "NaN" + min
    expect(anime.random("hello", "world")).toBe("NaNhello");
  });

  // how to test
  test("FilterArray", () => {
    const arr = [15, 20, 30];
    console.log(anime);
    // expect(anime.helpers.helpersfilterArray(arr)).arrayContaining([15,20,30])
  });

  // how to test
  test("ToArray", () => {
    // expect(anime.helpers.helpersfilterArray(arr)).arrayContaining([15,20,30])
  });

  // how to test
  test("CloneObject", () => {
    // expect(anime.helpers.helpersfilterArray(arr)).arrayContaining([15,20,30])
  });

  // how to test
  test("mergeObjects", () => {
    // expect(anime.helpers.helpersfilterArray(arr)).arrayContaining([15,20,30])
  });

    // how to test
    test("isBrowser", () => {
      // expect(anime.helpers.helpersfilterArray(arr)).arrayContaining([15,20,30])
    });
});
