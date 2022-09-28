function tailAndHead(arr) {
  let sum = [];
  for (let i = 0; i < arr.length - 1; i++) {
    let a = Number(arr[i].toString().slice(-1));
    let b = Number(arr[i + 1].toString().slice(0, 1));
    sum.push(a + b);
  }
  return sum.reduce((a, b) => a * b);
}
