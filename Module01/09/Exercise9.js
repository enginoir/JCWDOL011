console.log('1. Create a program to calculate total salary based on employee type');
console.log('');
class Employee {
    constructor(type) {
        this.type = type;
        this.workingHours = 0;
    }

    addWorkingHours(hours) {
        this.workingHours += hours;
    }

    calculateSalary() {
        console.log(`Calculating salary for ${this.type} employee =`);
        if (this.type === "full-time") {
            if (this.workingHours > 6) {
                return this.workingHours * 75000;
            } else {
                return this.workingHours * 100000;
            }
        } else if (this.type === "part-time") {
            if (this.workingHours > 6) {
                return this.workingHours * 30000;
            } else {
                return this.workingHours * 50000;
            }
        } else {
            return 0; // Invalid employee type
        }
    }
}
class FulltimeEmployee extends Employee {
    constructor() {
        super("full-time");
    }
}
class ParttimeEmployee extends Employee {
    constructor() {
        super("part-time");
    }
}

// Usage: Input working hours beneath for calculate employee's salary based from the working hrs
const fullTimeEmp = new FulltimeEmployee();
const fullTimeHours = 8; // Input working hours here => 8 hrs
fullTimeEmp.addWorkingHours(fullTimeHours);
console.log(`Full-time employee salary for ${fullTimeHours} Hrs: IDR ${fullTimeEmp.calculateSalary()}`);

const partTimeEmp = new ParttimeEmployee();
const partTimeHours = 5; // Input working hours here => 5 hrs
partTimeEmp.addWorkingHours(partTimeHours);
console.log(`Part-time employee salary for ${partTimeHours} Hrs: IDR ${partTimeEmp.calculateSalary()}`);
console.log('');


console.log('2. Create a shooting game between two players');
console.log('');
class Player {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.power = 10;
    }
    hit(opponentPower) {
        this.health -= opponentPower;
    }
    useItem(item) {
        this.health += item.health;
        this.power += item.power;
    }
    showStatus() {
        console.log(`${this.name} Status : \
        Health : ${this.health}\
        Power : ${this.power}`);
    }
}
class ShootingGame {
    constructor (player1Name, player2Name) {
        this.player1 = new Player(player1Name)
        this.player2 = new Player(player2Name)
    }

    getRandomItem() {
        const randomHealth = Math.random();
        const randomPower = Math.random();

        let health = 0;
        let power = 0;

        if (randomHealth < 0.5) {
            health = 0;
        } else {
            health = 10;
        }

        if (randomPower < 0.5) {
            power = 0;
        } else {
            power = 10;
        }

        return { health: health, power: power };
    }

    start() {
        console.log("The Shooting Game will start!\n");

        while (this.player1.health > 0 && this.player2.health > 0) {
            console.log("==== The Phase Initiate ====");

            this.player1.showStatus();
            this.player2.showStatus();

            const item1 = this.getRandomItem();
            const item2 = this.getRandomItem();

            this.player1.useItem(item1);
            this.player2.useItem(item2);

            console.log("\nStats After Getting Random Items");
            this.player1.showStatus();
            this.player2.showStatus();

            this.player2.hit(this.player1.power);
            console.log(`${this.player1.name} shoots ${this.player2.name} for ${this.player1.power} damage.`);
            if (this.player2.health <= 0) {
                console.log(`${this.player2.name} is defeated!`);
                break;
            }

            this.player1.hit(this.player2.power);
            console.log(`${this.player2.name} shoots ${this.player1.name} for ${this.player2.power} damage.`);
            if (this.player1.health <= 0) {
                console.log(`${this.player1.name} is defeated!`);
                break;
            }
            console.log("==== Phase Ends  ====\n");
        }
        console.log("==== The Game is Over ====");
    }
}

// Let's Start the game by the method function here ...!
const game = new ShootingGame("Player A", "Player B");
game.start();