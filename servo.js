/*********************************************
This servo module demo turns the servo around
1/10 of its full rotation  every 500ms, then
resets it after 10 turns, reading out position
to the console at each movement.
*********************************************/

var tessel = require('tessel');
var servolib = require('./node_modules/servo-pca9685');
var accel = require('./node_modules/accel-mma84').use(tessel.port['B']); // Replace '../' with 'accel-mma84' in your own code

var servo = servolib.use(tessel.port['A']);
//var servo = servolib.use(tessel.port['C']);

var servo1 = 1; // We have a servo plugged in at position 1
var servo2 = 2;
var position = 0; //  Target position of the servo between 0 (min) and 1 (max).
var direction = 'F';
var moveAmt = 0.01;
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
            //console.log('difference', Math.abs(position - xPos));
            // if (Math.abs(position - xPos) > .3) {
            //         console.log('Move now');
            //         var diff = position - xPos;
            //         servo.move(servo1, Math.random())
            //         position = diff;
            //         //position = runServoX(Math.abs(position - xPos));
            //     }
      }, 100)
  });
});

function runServoX(moveToX) {
    console.log('moveamount', moveToX);
    
    servo.read(servo1, function(err, reading) {
            position = Number(reading.toFixed(2));
        })
    console.log('start',position)
    position = 0;
    // if(moveToX < postion) {
    //   direction = 'F';
    // }
    // else {
    //   direction = 'R';
    // }
    var localPos = 0;

      var exitMove = setInterval(function() {
          console.log('moving')
          servo.move(servo1, localPos);
          if(Math.abs(moveToX - localPos) < 0.1) {
            position = localPos
            //return;
            clearInterval(exitMove)
          }

         if (direction === 'F') {
            localPos += moveAmt;
        } else {
            localPos -= moveAmt;
        }
      }, 100)

    //return position;
}

function runServoY(moveToY) {
    console.log('moveamount', moveToX);
    
    servo.read(servo2, function(err, reading) {
            positionYY = Number(reading.toFixed(2));
        })
    console.log('start',positionY)
    if(moveToY < postionY) {
      direction = 'R';
    }
    else {
      direction = 'F';
    }
      var exitMoveY = setInterval(function() {
        
          servo.move(servo2, positionY);
          if(Math.abs(positionY - moveToY) <= 0) {
            position = localPos
            clearInterval(exitMoveY)
          }

         if (direction === 'F') {
            positionY += moveAmt;
        } else {
            positionY -= moveAmt;
        }
      }, 100)
}

accel.on('error', function(err) {
    console.log('there was an error')
    console.log('Error:', err);
});
