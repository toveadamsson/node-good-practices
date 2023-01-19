const EventEmitter = require('events')

// Create class
class MyEmitter extends EventEmitter {}

// Init object
const myEmittter = new MyEmitter()

// Event listener
myEmittter.on('event', () => console.log('Event Fired!'))

// Init event
myEmittter.emit("event")

