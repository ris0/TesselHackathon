

var tessel = require('tessel');
var servolib = require('./node_modules/servo-pca9685');
var accel = require('./node_modules/accel-mma84').use(tessel.port['B']);
var servo = servolib.use(tessel.port['A']);

//X pos servo on port 1
//Y position servo on port 2
var servo1 = 1; 
var servo2 = 2;

accel.on('ready', function() {});
servo.on('ready', function() {
  servo.configure(servo1, 0.05, 0.12, function() {

    var xPos = 0;
    var yPos = 0;
    accel.on('data', function(xyz) {
        xPos = Number(xyz[0].toFixed(2));
        yPos = Number(xyz[1].toFixed(2));
    });
    setInterval(function() {
      servo.move(servo1, (xPos+1)/2);
      servo.move(servo2, (yPos+1)/2);
      console.log('x',xPos);
      console.log('y',yPos);
      }, 100)
  });
});

//Made it way more complited than needed, did not need to step servo
//Using set interval was not needed for this project. Could use the set 
//Interval from reading accel data