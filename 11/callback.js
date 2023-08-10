//sequential
let result

function greet (str) {
    result = str;
}

function hello () {
    greet('hello');
}

function arigatou () {
    greet('arigatou');
}

arigatou();
hello();
console.log(result);

function calculator (a, b, callback) { //callback or cb
    callback(a + b)
}

function displayer(something) {
    console.log(something);
}

calculator(5, 5, displayer);

let arr = [1, 4, 2, 7]

function cb(a, b) {
    return a -b;
};

arr.sort(cb);
console.log(arr);