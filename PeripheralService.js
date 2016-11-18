var util = require('util');
var bleno = require('bleno');

var Characteristics = require('./PeripheralCharacteristics');


function PeripheralService(PeripheralJS) {
    bleno.PrimaryService.call(this, {
        uuid: "100F",
        characteristics: [
            new Characteristics.AccelXAxisCharacteristic(PeripheralJS),
            new Characteristics.AccelYAxisCharacteristic(PeripheralJS),
            new Characteristics.AccelZAxisCharacteristic(PeripheralJS),

            new Characteristics.GyroXAxisCharacteristic(PeripheralJS),
            new Characteristics.GyroYAxisCharacteristic(PeripheralJS),
            new Characteristics.GyroZAxisCharacteristic(PeripheralJS),

            new Characteristics.MagXAxisCharacteristic(PeripheralJS),
            new Characteristics.MagYAxisCharacteristic(PeripheralJS),
            new Characteristics.MagZAxisCharacteristic(PeripheralJS)
        ]
    });
}

util.inherits(PeripheralService, bleno.PrimaryService);

module.exports = PeripheralService;
