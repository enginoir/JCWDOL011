console.log('2. Create a function that can find the different single number among other duplicated numbers')
console.log("\ ")

function findSingleNumber(nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        result = result ^ num;
    }
    return result;
}

// Example usage
const nums1 = [2, 2, 1];
console.log('input :', nums1);
console.log('output :', findSingleNumber(nums1)); // Output: 1

const nums2 = [4, 1, 2, 1, 2];
console.log('input :', nums2);
console.log('output :', findSingleNumber(nums2)); // Output: 4

const nums3 = [1];
console.log('input :', nums3);
console.log('output :', findSingleNumber(nums3)); // Output: 1

console.log("\ ")

console.log('3. Create a function that can define given two strings s and t, return true if t is an anagram of s, and false otherwise.')
console.log("\ ")

function AnagramsCheck(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const charCount = {};
    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (const char of t) {
        if (!charCount[char]) {
            return false;
        }
        charCount[char]--;
    }
    return true;
}

// Test Anagram and Check
console.log('=> Test Anagram and Check');
const s = "anagram"; // Input first word as integer
const t = "nagaram"; // Input 2nd word as integer

console.log('You have input :',
`\n${s}`, '\nand', `\n${t}`,
'\nwhich is',AnagramsCheck(s, t),
'that those are Anagrams'); // Output: true
console.log("\ ")

console.log('4. Create a function that can calculate steps that required for stairways => fibonacci')
console.log("\ ")

function fibonacci(strs) {
    if (strs <= 0) {
        return [];
    } else if (strs === 1) {
        return [0];
    } else if (strs === 2) {
        return [0, 1];
    }

    let fibonacci = [0, 1];
    for (let j = 2; j < strs; j++) {
        fibonacci.push(fibonacci[j - 1] + fibonacci[j - 2]);
    }
    return fibonacci;
}

const strs = 10;
const fibSequence = fibonacci(strs);
console.log("The total steps for", strs, "stairs:", fibSequence[strs - 1]);
console.log("Same as the results of Fibonacci sequence up to", strs, "is:", fibSequence);
