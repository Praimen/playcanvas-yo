/**
 * Created by Praimen on 7/17/2016.
 */
var KeyboardHandler = pc.createScript('keyboardHandler');

KeyboardHandler.prototype.update = function(dt) {
  var angle = 0;

  if(this.app.keyboard.isPressed(pc.KEY_D)){
    angle = -2;
  }

  if(this.app.keyboard.isPressed(pc.KEY_A)){
    angle = 2;
  }


  robotEnt.rotateLocal(0, angle, 0);
};









KeyboardHandler.prototype.initialize = function() {
  // Use on() to listen for events on the keyboard device
  // 1) The event name to listen for
  // 2) The callback function to call when the event fires
  // 3) (optional) The value to use for 'this' in the callback function

  this.app.keyboard.on("keydown",this.onKeyDown,this);
  this.app.keyboard.on("keyup", this.onKeyUp,this);
  robotEnt.animRun = run;
  robotEnt.animIdle = stop;
};


KeyboardHandler.prototype.onKeyDown = function (event) {
  // Check event.key to detect which key has been pressed

  if (event.key === pc.KEY_W ||
    event.key === pc.KEY_A ||
    event.key === pc.KEY_S ||
    event.key === pc.KEY_D ) {

    robotEnt.animRun();
    robotEnt.animRun = function(){};

  }

  // When the space bar is pressed this scrolls the window.
  // Calling preventDefault() on the original browser event stops this.
  event.event.preventDefault();
};

KeyboardHandler.prototype.onKeyUp = function (event) {

  // Check event.key to detect which key has been pressed
  if (event.key === pc.KEY_W ||
    event.key === pc.KEY_A ||
    event.key === pc.KEY_S ||
    event.key === pc.KEY_D ) {

    robotEnt.animIdle();
    robotEnt.animRun = run;
  }

  // When the space bar is pressed this scrolls the window.
  // Calling preventDefault() on the original browser event stops this.
  event.event.preventDefault();
};
