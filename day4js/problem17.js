let sum = 0;
let count = 0

let i = 1;
while (i <= 20) {
  if (i % 2 == 0) {
    sum += i
    count++;
  }
  i++
}
let ave = sum / count
console.log(ave);
