import { readFileSync, writeFileSync } from "node:fs";
import { performance } from "node:perf_hooks";

const upperc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerc = "abcdefghijklmnopqrstuvwxyz";
const cypher = (shift, str) => {
  let string = str;
  if (!str) {
    string = readFileSync("./prideAndPrejudice.txt", "utf8");
  }
  const start = Date.now();
  let cyphered = "";
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    const length = lowerc.length;
    const getIndex = (alphabet) => alphabet.indexOf(char) + shift;
    const getDiff = (index) => index - length + 1;
    const cypherChar = (alphabet) => {
      const index = getIndex(alphabet);
      if (index > length || index < 0) {
        const diff = getDiff(index);
        cyphered += alphabet[shift - diff];
      } else cyphered += alphabet[getIndex(alphabet)];
    };
    if (/[a-z]/g.test(char)) {
      cypherChar(lowerc);
    } else if (/[A-Z]/g.test(char)) {
      cypherChar(upperc);
    } else cyphered += char;
  }
  const end = Date.now();
  if (!str) {
    writeFileSync("./cyphered.txt", cyphered);
  }
  console.log("Processed in", end - start, "milliseconds");
  return cyphered;
};

export default cypher;

cypher(3);
