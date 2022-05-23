const alphabet = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
const length = alphabet.length;
export default (s, string) => {
  const start = Date.now();
  let cyphered = "";
  const shift = s * 2;
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    const index = alphabet.indexOf(char) + shift;
    if (/[a-zA-Z]/g.test(char)) {
      cyphered += alphabet[index % length];
    } else cyphered += char;
  }
  const end = Date.now();
  console.log("Processed in", end - start, "milliseconds");
  return cyphered;
};
