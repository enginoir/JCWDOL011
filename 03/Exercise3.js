/* 1. code to generate a multiplication table
up to a range */
console.log("1. code to generate a multiplication table");
console.log("Input number and range for the multiplication in the code");
const number = 5 //<== Input number to be multipled by the range

const range = 10 //<== Input the range for the multiplication

//creating a multiplication table
for(let i = 1; i <= range; i++) {
    const result = i * number;
    console.log(`${number} * ${i} = ${result}`);
}
console.log(1*"abc")
/* 2. code to check whether a string is a palindrome or not. */
// program to check if the string is palindrome or not
console.log("2. code to check whether a string is a palindrome or not");
console.log("Input word/sentence which will be treated as string in the code");
const string1 = "kucing"; //<== input string:word/numbers
const cekpalindrome = string1
    // find the length of a string
    const len = string1.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {
        
        // check if first and last string are same
        if (string1[i] !== string1[len - 1 - i]) {
            console.log(`${string1} is not a palindrome`);
        } else if (cekpalindrome) 
        console.log(`${string1} is a palindrome`);
        break
    }

/* 3. code to convert centimeter to Kilometer. */
console.log("3. code to convert centimeter to Kilometer");
console.log("Input number which will be treated as number converted into Kilometer from centimeter in the code");
const constInCm = 10000000;
const constInKm = constInCm / 100000;

console.log(`Contanta of ${constInCm} cm is ${constInKm} in Km`);

/* 4. code to format number as currency (IDR) */
console.log("4. code to format number as currency (IDR)");
console.log("Input number which will be treated as currency in (IDR)");
const amount = "2100000"; // <== input number here as amount to be format to currency
const splitAmount = amount.split("").reverse();
let result1 = "";
console.log(`Number Inputted: ${amount}`);
for (let i = 0; i < splitAmount.length; i++) {
    if (i % 3 === 0 && i !== 0) {
        result1 += `.${splitAmount[i]}`;
    } else result1 += `${splitAmount[i]}`;
}
console.log(`Result in Rate = Rp. ${result1.split("").reverse().join("")},00`);

/* 5. code to remove the first occurrence of a given “search string” from a string */
console.log("5. code to remove the first occurrence of a given “search string” from a string");
console.log("Input word which some of the letter(s) will be removed from the word/sentence");
const completeString = "Saya Makan"; // <== input word here as some of the letter(s) will be removed
const removingString = "a Ma"; // <== input letter/word here as some of it will be taken out of the full-word
const splitString = completeString.split(removingString).join("")
console.log(`Complete Word: ${completeString}`)
console.log(`Removing Letter(s): ${removingString}`)
console.log(`The Result is: ${splitString}`);

/* 6. code to capitalize the first letter of each word in a string */
console.log("6. code to capitalize the first letter of each word in a string");
console.log("Input word which the first letter will be capitalized from the word/sentence you input");
const Sentence = "saya sedang makan nasi goreng" // <== input letter/word 
const splitSentence = Sentence.split(" ")
let resultText = ''
for (let i = 0; i < splitSentence.length; i++) {
    splitWord = splitSentence[i].split("")
    let removedLetters = ""
    for (let j = 0; j < splitWord.length; j++) {
        if (j !== 0)
            removedLetters += splitWord[j]
        else
            removedLetters += splitWord[j].toUpperCase()
    }
    resultText += `${removedLetters} `
}
console.log(`Input Word: ${Sentence}`)
console.log(`Capitalized Word: ${resultText}`)

/* 7. code to Reverse a string*/
console.log("7. code to Reverse a word/s in form of string");
console.log("Input word which the word/s will be Reversed from the word/sentence you input");
const unReversedString = "Saya Makan Nasi Goreng" // <== input letter/word - Case Sensitive
const RevertTheString = unReversedString.split("").reverse().join("")

console.log(`The Unreversed String you input : ${unReversedString}`)
console.log(`The Reversed String is: ${RevertTheString}`)

/* 8. code to find the largest of two given integers*/
console.log("8. code to find the largest of two given integers");
console.log("Input word which the word/s will Swapped in capitalization-states from the word/sentence you input");
const Sentence1 = "SaYa MaKan NaSi GoReNg"; // <== input letter/word - Case Sensitive

const letters = Sentence1.split("");
let dumpedLetters = "";
for (i = 0; i < letters.length; i++) {
    if (letters[i] === letters[i].toUpperCase()) {
        dumpedLetters += letters[i].toLowerCase();
    } else {
        dumpedLetters += letters[i].toUpperCase();
    }
}
console.log(`The Word(s) or Sentence you've input : ${Sentence1}`);
console.log(`Output Word(s) or Sentence: ${dumpedLetters}`);

/* 9. code to find the largest of two given integers*/
console.log("9. code to find the largest of two given integers");
console.log("Input 2 integers(numbers) which will be found the largest amount amongst the integers");
const number1 = 50; // <== input first nunmber
const number2 = 48; // <== input second nunmber
const result2 = Math.max(number1, number2);

console.log(`The largest number amongst ${number1} and ${number2} is ${result2}
which means ${number1} is larger than ${number2}`);

/* 10. code a conditional statement to sort three numbers*/
console.log("10. code a conditional statement to sort three numbers");
console.log("Input 3 integers(numbers) which will be sorted by ascending values amongst the integers");

const number3 = 3;// <== input first nunmber
const number4 = 1;// <== input second nunmber
const number5 = 2;// <== input third nunmber
console.log(`The 3 Numbers you've input : ${number3},${number4},${number5}`);

if (number3 < number4 && number3 < number5 && number4 < number5) {
        console.log(`Sort by Acending: ${number3}, ${number4}, ${number5}`)
    } else if (number3 < number4 && number3 < number5 && number4 > number5) {
        console.log(`Sort by Acending: ${number3}, ${number5}, ${number4}`)
    } else if (number3 > number4 && number3 > number5 && number4 > number5) {
        console.log(`Sort by Acending: ${number5}, ${number4}, ${number3}`)
    } else if (number3 > number4 && number3 > number5 && number4 < number5) {
        console.log(`Sort by Acending: ${number4}, ${number5}, ${number3}`)
    } else if (number3 > number4 && number3 < number5 && number4 < number5) {
        console.log(`Sort by Acending: ${number4}, ${number3}, ${number5}`)
    } else if (number3 < number4 && number3 > number5 && number4 > number5) {
        console.log(`Sort by Acending: ${number5}, ${number3}, ${number4}`)
    }

/* 11. code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data
type.*/
console.log("11. code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type.");
console.log("Input Variables which will be identified by data type");

const text3 = "test" // <== numbers, string (""/''), and other data type only, it wont run if the input is undefined
let text3a = text3
text3a = typeof text3
console.log(`You've input = ${text3}`);
   
    if (typeof text3 != "number" && typeof text3!="string" || typeof text3 == "undefined") {
        console.log("other data type")}
        else if (typeof text3 != "number") {
            console.log("Your Input variable is String Type of Data")
        } else
        console.log("Your Input variable is Number Type of Data")

/* 12. code to change every letter a into '*' from a string of input*/
console.log("12. code to change every letter 'a' into '*' from a string of input");
console.log("Input word/sentences that every letter 'a' into '*'");

const text2 = `Saya Suka Makan Nasi Padang dengan kakak Saya`; // <== input letter/word - Case Sensitive
const output2 = text2.replace(/a/gi, "*");

console.log(`String you've input: "${text2}" becomes : "${output2}"`);