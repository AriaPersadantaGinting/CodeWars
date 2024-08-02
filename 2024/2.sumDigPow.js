// Q6
// The number
// 89
// 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number:

// Task
// We need a function to collect these numbers, that may receive two integers
// a
// a,
// b
// b that defines the range
// [
// a
// ,
// b
// ]
// [a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.
// let as = a.toString();
// let ax = as
//   .split("")
//   .map((m) => Math.pow(m, m[0] + 1))
//   .reduce((acc, edd) => acc + edd);
// if (a === ax) {
//   collectDigNum.push(as);
// }

// cara barbar
function sumDigPow(a, b) {
  let collectDigNum = [];
  for (a; a <= b; a++) {
    let toStringA = a.toString();
    let hasilPangkatA = 0;
    for (let i = 0; i < toStringA.length; i++) {
      hasilPangkatA += Math.pow(Number(toStringA[i]), i + 1);
    }
    if (hasilPangkatA === a) {
      collectDigNum.push(hasilPangkatA);
    }
  }
  return collectDigNum;
}

// cara lebih efektif dengan menggunakan ES6
function sumDigPow(a, b) {
  return Array.from({ length: b - a + 1 }, (_, i) => a + i).filter(
    (num) =>
      num ===
      num
        .toString()
        .split("")
        .reduce(
          (sum, digit, index) => sum + Math.pow(Number(digit), index + 1),
          0
        )
  );
}

console.info(sumDigPow(90, 100));
