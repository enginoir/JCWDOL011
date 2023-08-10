//Create a function to calculate array of student data
console.log('1. Create a function to calculate array of student data')
console.log("\ ")
function calculateStudentData(students) {
    if (!Array.isArray(students) || students.length === 0) {
        throw new Error("Invalid input. Expected non-empty array of student objects.");
    }

    // Scores
    const scores = students.map(student => student.Score);
    const highestScore = Math.max(...scores);
    const lowestScore = Math.min(...scores);

    const averageScore = scores.reduce((total, score) => total + score, 0) / scores.length;

    // Ages
    const ages = students.map(student => {
        const birthYear = new Date(student.Age).getFullYear();
        const currentYear = new Date().getFullYear();
        return currentYear - birthYear;
    });
    const highestAge = Math.max(...ages);
    const lowestAge = Math.min(...ages);
    const averageAge = ages.reduce((total, age) => total + age, 0) / ages.length;

    return {
    Score: {
        Highest: highestScore,
        Lowest: lowestScore,
        Average: averageScore,
    },
        Age: {
        Highest: highestAge + " Years",
        Lowest: lowestAge + " Years",
        Average: Math.round(averageAge) + " Years",
        },
    };
}

// Students Data:
const students = [
    {
    Name: "Samuel L. Jackson",
    Email: "samuel.jackson@example.co.id",
    Age: new Date("1995-05-15"),
    Score: 90,
    },
    {
    Name: "Robert Downey Jr.",
    Email: "robert.djr@example.co.id",
    Age: new Date("1998-08-30"),
    Score: 85,
    },
    {
    Name: "BobCat",
    Email: "bobthecat@example.co.id",
    Age: new Date("1997-03-20"),
    Score: 78,
    },
];

const studentData = calculateStudentData(students);
console.log(studentData);
console.log("\ ")

//Create a program to create transaction
console.log('2. Create a program to create transaction')
console.log("\ ")

class Product {
    //static productlist = [];

    constructor(name, price) {
        this.Name = name;
        this.Price = price;
    }
/*    set setProduct(name) {
        this.name = name
    }
    get getProductname() {
        return this.Name
    }
*/
    toString() {
        return `Product { Name: '${this.Name}', Price: ${this.Price} }`;
    }
}

    class Transaction {
    constructor() {
        this.Total = 0;
        this.products = [];
    }

    addToCart(product, quantity) {
        if (!(product instanceof Product)) {
            console.log("Invalid product");
        }
        if (quantity <= 0) {
            console.log("Invalid quantity");
        }
        this.products.push({ product, quantity });
        this.Total += product.Price * quantity;
        }

    totalTransaction() {
        console.log("Current Total Transaction: Rp " + this.Total);
    }

    convertProductsToString(products) {
        return products.map(item => ({
        product: item.product.toString(),
        quantity: item.quantity
        }));
    }

    checkout() {
        const transactionData = {
            Products: this.convertProductsToString(this.products),
            Qty: this.products.reduce((totalQty, item) => totalQty + item.quantity, 0),
            Total: 'Rp ' + this.Total,
        };
        console.log("Your Transaction Details:");
        console.log(transactionData);
        return transactionData;
    }
}

const product1 = new Product("AC Portable", 4000000);
const product2 = new Product("Kipas Angin Jumbo", 500000);

const transaction = new Transaction();
transaction.addToCart(product1, 2); // <= Input Qty Here
transaction.addToCart(product2, 3); // <= Input Qty Here
transaction.totalTransaction();
const transactionData = transaction.checkout();