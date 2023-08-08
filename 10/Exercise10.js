//soal 1
console.log('1. Create a function to swap first letter of word to the last word and add "ay" afterwards');
console.log("\ ");
// input = 'Pig latin is cool !'
// result = "igPay atinlay siay oolcay !ay"
function swapay(str){
    let words = str.trim().split(/\s+/);

    let swappedwords = words.map(word => {
        if (/^[A-Za-z0-9\s!?,.]+$/.test(word)) {
            let firstLetter = word[0];
            let otherword = word.slice(1);
            return otherword + firstLetter + "ay";
        }
        return `"${word}"`;
    });
    return `"${swappedwords.join(' ')}"`;
}
let inputStr = 'Pig latin is cool !';
const result = swapay(inputStr);
console.log(result);

console.log("\ ")

//soal 2
console.log("2. Create a function that makes an array of numbers to be phone number");
console.log("\ ");
// input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// result = "(123) 456-7890"
function makePhoneNumber(nomor) {
    const kodearea = nomor.slice(0, 3).join('');
    const tigaangkapertama = nomor.slice(3, 6).join('');
    const sisanomor = nomor.slice(6).join('');

    return `(${kodearea}) ${tigaangkapertama}-${sisanomor}`;
}
input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
phonenumber = makePhoneNumber(input);
console.log(phonenumber)
console.log("\ ")