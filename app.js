var util = require('util');


const NAME = 'PeripheralJS - Edison';
const TIME_FOR_COUNT = 30000; // Millisecondes
const FREQUENCY = require('./Utils').Frequency;

var CONNEXION_ACCEPTED = false;


//
// Require bleno peripheral library.
// https://github.com/sandeepmistry/bleno
//
var bleno = require('bleno');

//
// Pizza
// * has crust
// * has toppings
// * can be baked
//
var PeripheralJS = require('./PeripheralJS');
var peripheralObj = new PeripheralJS();

//
// The BLE Pizza Service!
//
var PeripheralService = require('./PeripheralService');

var peripheralService = new PeripheralService(peripheralObj);

//
// Wait until the BLE radio powers on before attempting to advertise.
// If you don't have a BLE radio, then it will never power on!
//

bleno.on('stateChange', function(state) {
  console.log("State changed to "+state);
  if (state === 'poweredOn') {
    //
    // We will also advertise the service ID in the advertising packet,
    // so it's easier to find.
    //
    bleno.startAdvertising(NAME, [peripheralService.uuid], function(err) {
      if (err) {
        console.log(err);
      }
    });
  }
  else {
    bleno.stopAdvertising();
  }
});

bleno.on('advertisingStart', function(err) {
  if (!err) {
    console.log('advertising...');
    //
    // Once we are advertising, it's time to set up our services,
    // along with our characteristics.
    //
    bleno.setServices([
      peripheralService
    ]);
  }else{
    console.log("advertisingStart Error: "+err);
  }
});

bleno.on('accept',function(clientAddress){
  console.log("Accepting connection from \""+clientAddress+"\"");
  CONNEXION_ACCEPTED = true;
});
bleno.on('disconnect',function(clientAddress){
  console.log("Deleting connection from \""+clientAddress+"\"");
  CONNEXION_ACCEPTED = false;
  clearInterval(peripheralObj.__interval);
});

const readline = require('readline');
const rl = readline.createInterface({
  input:process.stdin,
  ouput:process.stdout
});

var start_time = null;
var cpt_timer = 0;

rl.on('line', function(input){
  if(!CONNEXION_ACCEPTED){
    return;
  }
  if(start_time==null){
    start_time = Math.floor(new Date());
  }
  if(Math.floor(new Date())-start_time>TIME_FOR_COUNT){
    console.log("Received "+cpt_timer+" data in "+TIME_FOR_COUNT+"ms ====== Average Of "+(cpt_timer/(TIME_FOR_COUNT/1000))+"Hz !");
    cpt_timer = 0;
    start_time = Math.floor(new Date());
  }

  var json = input.split(",");
  peripheralObj.accel.x = parseFloat(json[0]);
  peripheralObj.accel.y = parseFloat(json[1]);
  peripheralObj.accel.z = parseFloat(json[2]);

  peripheralObj.gyro.x = parseFloat(json[3]);
  peripheralObj.gyro.y = parseFloat(json[4]);
  peripheralObj.gyro.z = parseFloat(json[5]);

  peripheralObj.mag.x = parseFloat(json[6]);
  peripheralObj.mag.y = parseFloat(json[7]);
  peripheralObj.mag.z = parseFloat(json[8]);

  cpt_timer++;
});
/*
console.log("Entering main ...");
setInterval(function(){
    if(!CONNEXION_ACCEPTED){
      return;
    }
    peripheralObj.accel.x = Math.random();
    peripheralObj.accel.y = Math.random();
    peripheralObj.accel.z = Math.random();

    peripheralObj.gyro.x = Math.random();
    peripheralObj.gyro.y = Math.random();
    peripheralObj.gyro.z = Math.random();

    peripheralObj.mag.x = Math.random();
    peripheralObj.mag.y = Math.random();
    peripheralObj.mag.z = Math.random();
},1000/FREQUENCY);
 */
