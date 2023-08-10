const Queue = require('./dataClass');

const queueManager = new Queue();

console.log('● Add orders to queue');
queueManager.addOrder(1);
queueManager.addOrder(2);
queueManager.addOrder(3);
queueManager.addOrder(4);
queueManager.addOrder(5);

console.log('● [Log] Print all data in queue');
queueManager.printQueue();

console.log('● Run process -> process queue based on random interval');
queueManager.processQueue();