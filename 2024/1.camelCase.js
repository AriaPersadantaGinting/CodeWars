// kata 6
String.prototype.camelCase = function () {
  return this.length !== 0
    ? this.toLowerCase()
        .split(" ")
        .map((m) => m.replace(m[0], m[0].toUpperCase()))
        .join("")
    : "";
};
let str = "camel case";
console.info(str.camelCase());
