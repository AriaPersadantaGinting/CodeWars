function convertFrac(lst) {
  // Fungsi untuk menghitung FPB (GCD) dari dua bilangan
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  // Fungsi untuk menghitung KPK dari dua bilangan
  const lcm = (a, b) => (a * b) / gcd(a, b);

  // Menghitung KPK dari semua penyebut dalam satu langkah menggunakan reduce
  const penyebutBersama = lst.reduce((acc, [_, denom]) => lcm(acc, denom), 1);

  // Mengonversi setiap pecahan ke penyebut bersama dan menyusun string hasilnya
  return lst
    .map(
      ([num, denom]) =>
        `(${(penyebutBersama / denom) * num},${penyebutBersama})`
    )
    .join("");
}

console.info(
  convertFrac([
    [1, 2],
    [1, 3],
    [1, 4],
  ])
);
