var http = require('http');
var server = http.createServer();
var tessel = require('tessel');
var servolib = require('servo-pca9685');

var servo = servolib.use(tessel.port['A']);
var servo1 = 1; // We have a servo plugged in at position 1
var servo2 = 2;



servo.on('ready', function () {
  var position1 = accelX;  //  Target position of the servo between 0 (min) and 1 (max).
  var position2 = accelY;

  servo.configure(servo1, 0.05, 0.12, function () {

  });

  servo.configure(servo2, 0.05, 0.12, function () {

  });


});



