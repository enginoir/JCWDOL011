console.log('1. Write a code to check whether the date is a weekend.')
console.log("\ ")



console.log("\ ")

console.log('2. Write a code to find GCD of two numbers → use while.')
console.log("\ ")



console.log("\ ")

console.log('3. Write a code to find LCM of two numbers → use do ... while.')
console.log("\ ")



console.log("\ ")

console.log('4. Write a code to find most common character from a string')
console.log("\ ")



console.log("\ ")
function commonCharacter (str) {
    let char = null
    let charMax = 0
        for(let i = 0; i < str.length; i++) {
            let charCount = 0
            for(let j = 0; j < str.length; j++) {
                if(str[i] === str[j]) {
                    charCount += 1
                }
        }

        if(charCount > charMax) {
            charMax = charCount
            char = str[i]
        }
    }
    return char
}

console.log(commonCharacter("YUDHISTIRA"))
console.log(commonCharacter("PURWADHIKA BOOTCAMP SCHOOL ZOOM"))