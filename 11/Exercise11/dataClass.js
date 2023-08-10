class Queue {
    constructor() {
        this.queue = [];
    }

    addOrder(order) {
        this.queue.push(order);
        console.log(`Order ${order} is added to the queue.`);
    }

    printQueue() {
        if (this.queue.length === 0) {
        console.log('The queue is empty.');
        } else {
            console.log('Current queue:', this.queue);
        }
    }
    async processQueue() {
        let queueNumber = 1;
        while (this.queue.length > 0) {
            const order = this.queue.shift();
            const interval = Math.floor(Math.random() * 10) + 1;
        await new Promise(resolve => setTimeout(resolve, interval * 1000));
        console.log(`[Log] Order ${order} is done in ${interval} seconds.`);
        queueNumber++;
        }
        console.log('All orders are processed.');
    }
}
module.exports = Queue;
