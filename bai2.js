let numbers = [1, 2, 3, 2, 4, 2, 5, 3, 3, 3, 2];

const counts = new Map();
for (const n of numbers) {
  counts.set(n, (counts.get(n) || 0) + 1);
}

console.log("Số lần xuất hiện (theo thứ tự xuất hiện):");
for (const [num, cnt] of counts) {
  console.log(`${num} xuất hiện ${cnt} lần`);
}
