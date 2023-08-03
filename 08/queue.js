const people = [];

people.push('aku');
people.push('saya');
people.push('dia');

console.log(people);

people.shift();
console.log(people);
people.shift();
people.shift();
people.shift();
console.log(people);


class Queue {
    #container = [];

    enqueue(element) {
        this.#container.push(element);
    }
    dequeue() {
        return this.#container.shift();
    }
}
