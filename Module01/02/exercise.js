/*
    1. Write a code to convert celsius to fahrenheit.
*/
console.log("1. Write a code to convert celsius to fahrenheit.")
let c = 28;
let f = 0;

f = (c * (9 / 5)) + 32;

console.log(`The value of the celsius temperature of ${c}C in Fahrenheit is ${f}F`);

/*
    2. Write a code to check whether the number is odd or even
*/
console.log("2. Write a code to check whether the number is odd or even.")
const number = 2;

const result = (number % 2 == 0) ? "genap" : "ganjil";

console.log(`Angka ${number} merupakan bilangan ${result}.`)

/*
    3. Write a code to check whether the number is prime number or not.
*/
console.log("3. Write a code to check whether the number is prime number or not.")
console.log("a) Solusi 1")
const num = 49; {

  if (num <= 1) {
    console.log(`Angka ${num} merupakan bilangan prima.`);
  } else if (num <= 3) {
    console.log(`Angka ${num} merupakan bilangan prima.`);
  } else if (num % 2 === 0 || num % 3 === 0) {
    console.log(`Angka ${num} bukan merupakan bilangan prima.`);
  }
  /*
      atau bisa pake rumus dengan checking apakah angkanya bisa dibagi 3 
      sampai dengan lebih besar dari akar kuadrat dari nomor tsb
  */
  console.log("b) Solusi 2")
  let i = 1
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) {
      console.log(`Angka ${num} bukan merupakan bilangan prima.`);
    }
    i += 6
  }
  console.log(`Angka ${num} merupakan bilangan prima.`)
}

/*
    4. Write a code to find the sum of the numbers 1 to N.
*/
console.log("4. Write a code to find the sum of the numbers 1 to N.")
const n = 5
var nres = (n * (n + 1)) / 2;
console.log(`The sum of numbers 1 to ${n} is ${nres}`)

/*
    5. Write a code to find factorial of a number.
*/
console.log("5. Write a code to find factorial of a number.")
const number1 = 5
// checking if number is negative
if (number1 < 0) {
  console.log('Error! Factorial for negative number does not exist.');
}
// if number is 0
else if (number1 === 0) {
  console.log(`The factorial of ${number1} is 1.`);
}
// if number is positive
else {
  let fact = 1;
  for (i = 1; i <= number1; i++) {
    fact *= i;
  }
  console.log(`The factorial of ${number1} is ${fact}.`);
}

/*
    6. Write a code to print the first N fibonacci numbers.
*/
console.log("6. Write a code to print the first N fibonacci numbers.")
let n3 = 5
var fibonacci_series = function(n3) {
  if (n3 === 1) {
    return [0, 1];
  }
  else {
    var s = fibonacci_series(n3 - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s
  }
}
console.log(`The fibonacci series of ${n3} is ${[fibonacci_series(n3)]}`)