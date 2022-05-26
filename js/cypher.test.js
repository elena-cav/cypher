import cypher from "./cypher";
describe("Cypher", () => {
  test("should shift letters by two places", () => {
    expect(cypher(2, "hello")).toBe("jgnnq");
  });
  test("should move back to the beginning of the alphabet", () => {
    expect(cypher(3, "helloy")).toBe("khoorb");
  });
  test("should be able to operate with a negative shift", () => {
    expect(cypher(-1, "hello")).toBe("gdkkn");
  });
  test("should move to the end of the alphabet with a negative shift", () => {
    expect(cypher(-1, "aello")).toBe("zdkkn");
  });
  test("should not move punctuation", () => {
    expect(cypher(2, "hel.l,o")).toBe("jgn.n,q");
  });
});
