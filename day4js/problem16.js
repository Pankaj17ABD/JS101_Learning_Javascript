//Problem 3: Print the sum of all the multiples of 3 from 0 to the given limit
let sum = 0;
let i = 0;
while (i <= 10) {
  if (i % 2 == 0) {
    sum += i
  }
  i++
}
console.log(sum);