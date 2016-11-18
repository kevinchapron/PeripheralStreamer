var util = require('util');
var bleno = require('bleno');
var PeripheralJS = require('./PeripheralJS');

var FloatToBuffer   = require('./Utils').FloatToBuffer;
var Frequency       = require('./Utils').Frequency;

function AccelXAxisCharacteristic(PeripheralJS) {
    bleno.Characteristic.call(this, {
        uuid: '2001',
        properties: ['read','notify'],
        descriptors: [
            new bleno.Descriptor({
                uuid: '2901',
                value: 'Get Accelerometer X-Axis'
            })
        ]
    });

    this.PeripheralJS = PeripheralJS;
}

function AccelYAxisCharacteristic(PeripheralJS) {
    bleno.Characteristic.call(this, {
        uuid: '2002',
        properties: ['read','notify'],
        descriptors: [
            new bleno.Descriptor({
                uuid: '2901',
                value: 'Get Accelerometer Y-Axis'
            })
        ]
    });

    this.PeripheralJS = PeripheralJS;
}

function AccelZAxisCharacteristic(PeripheralJS) {
    bleno.Characteristic.call(this, {
        uuid: '2003',
        properties: ['read','notify'],
        descriptors: [
            new bleno.Descriptor({
                uuid: '2901',
                value: 'Get Accelerometer Z-Axis'
            })
        ]
    });

    this.PeripheralJS = PeripheralJS;
}


function GyroXAxisCharacteristic(PeripheralJS) {
    bleno.Characteristic.call(this, {
        uuid: '2004',
        properties: ['read','notify'],
        descriptors: [
            new bleno.Descriptor({
                uuid: '2901',
                value: 'Get Gyroscope X-Axis'
            })
        ]
    });

    this.PeripheralJS = PeripheralJS;
}

function GyroYAxisCharacteristic(PeripheralJS) {
    bleno.Characteristic.call(this, {
        uuid: '2005',
        properties: ['read','notify'],
        descriptors: [
            new bleno.Descriptor({
                uuid: '2901',
                value: 'Get Gyroscope Y-Axis'
            })
        ]
    });

    this.PeripheralJS = PeripheralJS;
}

function GyroZAxisCharacteristic(PeripheralJS) {
    bleno.Characteristic.call(this, {
        uuid: '2006',
        properties: ['read','notify'],
        descriptors: [
            new bleno.Descriptor({
                uuid: '2901',
                value: 'Get Gyroscope Z-Axis'
            })
        ]
    });

    this.PeripheralJS = PeripheralJS;
}


function MagXAxisCharacteristic(PeripheralJS) {
    bleno.Characteristic.call(this, {
        uuid: '2007',
        properties: ['read','notify'],
        descriptors: [
            new bleno.Descriptor({
                uuid: '2901',
                value: 'Get Gyroscope X-Axis'
            })
        ]
    });

    this.PeripheralJS = PeripheralJS;
}

function MagYAxisCharacteristic(PeripheralJS) {
    bleno.Characteristic.call(this, {
        uuid: '2008',
        properties: ['read','notify'],
        descriptors: [
            new bleno.Descriptor({
                uuid: '2901',
                value: 'Get Gyroscope Y-Axis'
            })
        ]
    });

    this.PeripheralJS = PeripheralJS;
}

function MagZAxisCharacteristic(PeripheralJS) {
    bleno.Characteristic.call(this, {
        uuid: '2009',
        properties: ['read','notify'],
        descriptors: [
            new bleno.Descriptor({
                uuid: '2901',
                value: 'Get Gyroscope Z-Axis'
            })
        ]
    });

    this.PeripheralJS = PeripheralJS;
}


util.inherits(AccelXAxisCharacteristic, bleno.Characteristic);
util.inherits(AccelYAxisCharacteristic, bleno.Characteristic);
util.inherits(AccelZAxisCharacteristic, bleno.Characteristic);

util.inherits(GyroXAxisCharacteristic, bleno.Characteristic);
util.inherits(GyroYAxisCharacteristic, bleno.Characteristic);
util.inherits(GyroZAxisCharacteristic, bleno.Characteristic);

util.inherits(MagXAxisCharacteristic, bleno.Characteristic);
util.inherits(MagYAxisCharacteristic, bleno.Characteristic);
util.inherits(MagZAxisCharacteristic, bleno.Characteristic);


AccelXAxisCharacteristic.prototype.onReadRequest = function(offset, callback) {
    if (offset) {
        callback(this.RESULT_ATTR_NOT_LONG, null);
    }
    else {

        callback(this.RESULT_SUCCESS, FloatToBuffer(this.PeripheralJS.accel.x));
    }
};
AccelYAxisCharacteristic.prototype.onReadRequest = function(offset, callback) {
    if (offset) {
        callback(this.RESULT_ATTR_NOT_LONG, null);
    }
    else {

        callback(this.RESULT_SUCCESS, FloatToBuffer(this.PeripheralJS.accel.y));
    }
};
AccelZAxisCharacteristic.prototype.onReadRequest = function(offset, callback) {
    if (offset) {
        callback(this.RESULT_ATTR_NOT_LONG, null);
    }
    else {

        callback(this.RESULT_SUCCESS, FloatToBuffer(this.PeripheralJS.accel.z));
    }
};
/*
AccelXAxisCharacteristic.prototype.onSubscribe = function(maxValueSize,updateValueCallback){
    console.log("Notified Suscribing !");
    var self = this;
    this.PeripheralJS.__interval = setInterval(function(){
        updateValueCallback(FloatToBuffer(self.PeripheralJS.accel.x));
    },1000/Frequency);
};
AccelXAxisCharacteristic.prototype.onUnsubscribe = function(){
    console.log("Notified Unsuscribing !");
    clearInterval(this.PeripheralJS.__interval);
};
*/

GyroXAxisCharacteristic.prototype.onReadRequest = function(offset, callback) {
    if (offset) {
        callback(this.RESULT_ATTR_NOT_LONG, null);
    }
    else {

        callback(this.RESULT_SUCCESS, FloatToBuffer(this.PeripheralJS.gyro.x));
    }
};
GyroYAxisCharacteristic.prototype.onReadRequest = function(offset, callback) {
    if (offset) {
        callback(this.RESULT_ATTR_NOT_LONG, null);
    }
    else {

        callback(this.RESULT_SUCCESS, FloatToBuffer(this.PeripheralJS.gyro.y));
    }
};
GyroZAxisCharacteristic.prototype.onReadRequest = function(offset, callback) {
    if (offset) {
        callback(this.RESULT_ATTR_NOT_LONG, null);
    }
    else {

        callback(this.RESULT_SUCCESS, FloatToBuffer(this.PeripheralJS.gyro.z));
    }
};

MagXAxisCharacteristic.prototype.onReadRequest = function(offset, callback) {
    if (offset) {
        callback(this.RESULT_ATTR_NOT_LONG, null);
    }
    else {

        callback(this.RESULT_SUCCESS, FloatToBuffer(this.PeripheralJS.mag.x));
    }
};
MagYAxisCharacteristic.prototype.onReadRequest = function(offset, callback) {
    if (offset) {
        callback(this.RESULT_ATTR_NOT_LONG, null);
    }
    else {

        callback(this.RESULT_SUCCESS, FloatToBuffer(this.PeripheralJS.mag.y));
    }
};
MagZAxisCharacteristic.prototype.onReadRequest = function(offset, callback) {
    if (offset) {
        callback(this.RESULT_ATTR_NOT_LONG, null);
    }
    else {

        callback(this.RESULT_SUCCESS, FloatToBuffer(this.PeripheralJS.mag.z));
    }
};


module.exports.AccelXAxisCharacteristic = AccelXAxisCharacteristic;
module.exports.AccelYAxisCharacteristic = AccelYAxisCharacteristic;
module.exports.AccelZAxisCharacteristic = AccelZAxisCharacteristic;

module.exports.GyroXAxisCharacteristic = GyroXAxisCharacteristic;
module.exports.GyroYAxisCharacteristic = GyroYAxisCharacteristic;
module.exports.GyroZAxisCharacteristic = GyroZAxisCharacteristic;

module.exports.MagXAxisCharacteristic = MagXAxisCharacteristic;
module.exports.MagYAxisCharacteristic = MagYAxisCharacteristic;
module.exports.MagZAxisCharacteristic = MagZAxisCharacteristic;