var http = require('http');
var server = http.createServer();
var tessel = require('tessel');
var servolib = require('servo-pca9685');

var servo = servolib.use(tessel.port['A']);
var servo1 = 1; // We have a servo plugged in at position 1
var servo2 = 2;

// x [x, y]
// y 

var x = (xyz[0]/2 + 1)
var y = (xyz[1]/2 + 1)

servo.on('ready', function (x,y) {
  var position1 = accelX;  //  Target position of the servo between 0 (min) and 1 (max).
  var position2 = accelY;

  servo.configure(servo1, 0.05, 0.12, function () {

    setInterval(function () {
      console.log('Position (in range 0-1):', position);
      servo.move(servo1, position);

      position += x;
      if (position > 1) {
        position = 0; // Reset servo position
      }
    }, 500);
  });

  servo.configure(servo2, 0.05, 0.12, function () {
    setInterval(function () {
      console.log('Position (in range 0-1):', position);
      servo.move(servo2, position);

      position += y;
      if (position > 1) {
        position = 0; // Reset servo position
      }
    }, 500);

  });


});



