import { readFileSync, writeFileSync } from "node:fs";
import cypher from "./cypher.js";

const processor = (s, str) => {
  let string = str;
  if (!str) {
    string = readFileSync("./prideAndPrejudice.txt", "utf8");
  }
  const cyphered = cypher(s, string);

  if (!str) {
    writeFileSync("./cyphered.txt", cyphered);
  }
  return cyphered;
};
processor(3);
