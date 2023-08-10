/* 1. Create a function that can create a triangle pattern according to the height we provide like the
following :
01
02 03
04 05 06
07 08 09 10

● Parameters : height → triangle height
*/
console.log("1. Create a function that can create a triangle pattern")
console.log("\ ")
function generateNumberPattern(n) {
let string = "";
let count = 1;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        string += '0'+count +" ";
        count++;}
    string += "\n";
    }
    return string;
}
let pattern = generateNumberPattern(4);
console.log(pattern);

/* 2. Create a function that can loop the number of times according to the input we provide, and will
replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with
"FizzBuzz".
● Parameters : n → total looping
*/
console.log(`2. Create a function that can loop the number of times according to the input we provide, and will
replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with
"FizzBuzz".`)
console.log("\ ")
function generateFizzBuzz3515 (n) {
    for (let n = 0; n < 100;)
    console.log((++n % 3 ? '' : 'Fizz') + (n % 5 ? '' : 'Buzz') || n)
}
generateFizzBuzz3515 ()
console.log("\ ")

/* 3. Create a function to calculate Body Mass Index (BMI)
● Formula : BMI = weight (kg) / (height (meter))^2
● Parameters : weight & height
● Return values :
    ○ < 18.5 return "less weight"
    ○ 18.5 - 24.9 return "ideal"
    ○ 25.0 - 29.9 return"overweight"
    ○ 30.0 - 39.9 return "very overweight"
    ○ > 39.9 return "obesity"
*/
console.log(`3. Create a function to calculate Body Mass Index (BMI)`)
console.log("\ ")
function calculateBMI(WeightsKg, HeightMeter) {
if (WeightsKg <= 0 || HeightMeter <= 0) {
    console.log("Weight and height must be positive values.")
    } else if (WeightsKg > 500 || HeightMeter > 3) {
        console.log("Weight and height must be REALISTIC values.")
    }
    const bmi = WeightsKg / (HeightMeter * HeightMeter);
if (bmi < 18.5) {
    console.log("You are in BMI 'Less weight' Range");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        console.log("You are in BMI 'Ideal' Range");
        } else if (bmi >= 25.0 && bmi <= 29.9) {
        console.log("You are in BMI 'Overweight' Range");
            } else if (bmi >= 30.0 && bmi <= 39.9) {
                console.log("You are in BMI 'Very Overweight' Range");
                } else {
                console.log("You are in BMI 'Obesity' Range");
                }
}
const WeightsKg = 65.45; // <== Input number as Weight in kilograms
console.log(`You have input Weights in Kg : ${WeightsKg}`)
const HeightMeter = 1.68; // <== Input number as Height in meters
console.log(`You have input Weights in Kg : ${HeightMeter}`)
calculateBMI(WeightsKg, HeightMeter)
console.log("\ ")

/* 4. Write a function to remove all odd numbers in an array and return a new array that contains
even numbers only
*/
console.log(`4. Write a function to remove all odd numbers in an array and return a new array that contains even numbers only`)
console.log("\ ")
function filterEvNumbers(inputArray) {
    return evenNumbersArray = inputArray.filter((number) => number % 2 === 0);
    /*return evenNumbersArray;*/
}
const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`You've input the Array as : [${inputArray}]`);
const outputArray = filterEvNumbers(inputArray);
console.log(`The output of the filtered are : [${outputArray}]`);
console.log("\ ")

/* 5. Write a function to split a string and convert it into an array of words
    ○ Example : "Hello World" → ["Hello", "World"]
*/
console.log(`5. Write a function to split a string and convert it into an array of words`)
console.log("\ ")
function splitString(inputString) {
    return  wordsArray = inputString.split(" ");
    /*return wordsArray;*/
}
const inputString = "Hello, what is your name?";
const words = splitString(inputString);
console.log(words)