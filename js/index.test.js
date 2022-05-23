import processor from ".";
import { readFile } from "node:fs";
describe("Name of the group", () => {
  test.only("should ", () => {
    expect(processor(3, "helloy")).toBe("khoorb");
  });
  // test.skip("should ", () => {
  //   let cyphered;
  //   readFile("./cyphered.txt", (err, data) => {
  //     if (err) throw err;
  //     cyphered = data;
  //   });
  //   console.log(cyphered);
  //   expect(processor(3)).toBe(cyphered);
  // });
  test("should ", () => {
    expect(processor(-1, "hello")).toBe("gdkkn");
  });
  test("should ", () => {
    expect(processor(-1, "aello")).toBe("zdkkn");
  });
});
