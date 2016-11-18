var util = require('util');
var events = require('events');

function PeripheralJS() {
    events.EventEmitter.call(this);
    this.accel  = {"x": 0,"y":0,"z":0};
    this.gyro   = {"x": 0,"y":0,"z":0};
    this.mag    = {"x": 0,"y":0,"z":0};
    this.__interval = null;
}

util.inherits(PeripheralJS, events.EventEmitter);

module.exports = PeripheralJS;
