function counterMaker() {
  let sum = 0;
  function counter(value) {
    if (value != undefined) sum += value;
    return sum;
  }
  return counter;
}
const counter = counterMaker();
console.log(counter()); // 0
console.log(counter()); // 0
console.log(counter(1)); // 1
console.log(counter()); // 1
console.log(counter(3)); // 4
console.log(counter(7)); // 11
console.log(counter(-5)); // 6
