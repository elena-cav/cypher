import { readFileSync, writeFileSync } from "node:fs";
import cypher from "./cypher.js";

const processor = (shift) => {
  const string = readFileSync("../prideAndPrejudice.txt", "utf8");
  const cyphered = cypher(shift, string);
  writeFileSync("../cypheredJS.txt", cyphered);
  return cyphered;
};

export default processor;

processor(2);
