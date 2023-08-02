//Create a function to check if two objects are equal
console.log('1. Create a function to check if two objects are equal')
console.log("\ ")




console.log("\ ")

//Create a function to get the intersection of two objects
console.log('2. Create a function to get the intersection of two objects')
console.log("\ ")



console.log("\ ")

//Create a function to get the intersection of two objects
console.log('3. Create a function to merge two array of student data and remove duplicate data')
console.log("\ ")



console.log("\ ")

//Create a function that can accept input as an array of objects and switch all values into property and property into value
console.log('4. Create a function that can accept input as an array of objects and switch all values into property and property into value')
console.log("\ ")
function swapKeyValue(objArr) {
    return objArr.map((obj) => {
        const key = Object.keys(obj);
        const value = Object.values(obj);
        return key.map((k, i) => {
            return {
            [value[i]]: k,
            };
        });
    });
}

const input = [
    { name: "MasBro", address: "Malang" },
    { name: "Joko", address: "Pati" },
];

const result = swapKeyValue(input);
console.log("Your Input: ", input)
console.log(result);
console.log("\ ")

//Create a function to find a factorial number using recursion
console.log('5. Create a function to find a factorial number using recursion')
console.log("\ ")
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(4));
console.log("\ ")