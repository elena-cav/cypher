import { performance } from "perf_hooks";

const alphabet = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
export default (s, string) => {
  const startPerformance = performance.now();
  const shift = s > 0 ? s * 2 : 52 + s * 2;
  let cyphered = "";
  for (let i = 0; i < string.length; i++) {
    const index = alphabet.indexOf(string[i]) + shift;
    if (/[a-zA-Z]/g.test(string[i])) {
      cyphered += alphabet[index % alphabet.length];
    } else cyphered += string[i];
  }
  const endPerformance = performance.now();

  console.log(
    "Performance: ",
    endPerformance - startPerformance,
    "milliseconds"
  );

  return cyphered;
};
