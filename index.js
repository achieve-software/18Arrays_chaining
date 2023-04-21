// Maasi 9000'den az olanlara %10 zam yaparak bu degerleri
// yeni diziye saklayalim.
const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000];
const lessThan9000Inc = salaries
  .filter((s) => s < 9000)
  .map((s) => Math.trunc(s * 1.1));

console.log(lessThan9000Inc);

salaries
  .filter((x) => x < 9000)
  .map((x) => Math.trunc(x * 1.1))
  .forEach((x) => console.log(x));
