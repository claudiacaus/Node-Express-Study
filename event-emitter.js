const EventEmitter = require('events');

const customEmitter = new EventEmitter();

//the strings have to match 'response'
//the order matters, first listen to the event then emit it

customEmitter.on('response', (name, id) => {
  console.log(`data received ${name} with id: ${id}`);
});

customEmitter.on('response', () => {
  console.log(`some other logic`);
});

customEmitter.emit('response', 'john', 34);
