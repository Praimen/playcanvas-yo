var model = null;
var runAnim = null;
var idleAnim = null;

var canvas = document.getElementById("application-canvas");
var app = new pc.Application(canvas);
var cameraEntity = new pc.Entity(app);
var robotEnt = new pc.Entity();
var KeyboardHandler = pc.createScript('keyboardHandler');
app.keyboard = new pc.Keyboard(window);

KeyboardHandler.prototype.update = function(dt) {

};



// Create the application and start the update loop
app.start();
// Set the canvas to fill the window and automatically change resolution to be the same as the canvas size
app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
app.setCanvasResolution(pc.RESOLUTION_AUTO);
app.scene.ambientLight = new pc.Color(0.8, 0.8, 0.8);


cameraEntity.addComponent("camera", {
  clearColor: new pc.Color(0, 0, 0)
});
cameraEntity.rotateLocal(0, 0, 0);
cameraEntity.translateLocal(0, 0.6, 2.4);


KeyboardHandler.prototype.initialize = function() {
  // Use on() to listen for events on the keyboard device
  // 1) The event name to listen for
  // 2) The callback function to call when the event fires
  // 3) (optional) The value to use for 'this' in the callback function

  this.app.keyboard.on("keydown",this.onKeyDown,this);
  this.app.keyboard.on("keyup", this.onKeyUp,this);
};


KeyboardHandler.prototype.onKeyDown = function (event) {
  // Check event.key to detect which key has been pressed
console.log('key press');
  if (event.key === pc.KEY_W ) {
    console.log('the w is pressed');
    run();
  }

  // When the space bar is pressed this scrolls the window.
  // Calling preventDefault() on the original browser event stops this.
  event.event.preventDefault();
};

KeyboardHandler.prototype.onKeyUp = function (event) {
  // Check event.key to detect which key has been pressed
  if (event.key === pc.KEY_W ) {
    stop();
  }

  // When the space bar is pressed this scrolls the window.
  // Calling preventDefault() on the original browser event stops this.
  event.event.preventDefault();
};


// Load model and animation assets
app.assets.loadFromUrl("../assets/Playbot/Playbot.json", "model", function (err, asset) {
  model = asset;
  app.assets.loadFromUrl("../assets/Playbot/Playbot_run.json", "animation", function (err, asset) {
      runAnim = asset;
    app.assets.loadFromUrl("../assets/Playbot/Playbot_idle.json", "animation", function (err, asset) {
      idleAnim = asset;

      addModelAttr ();
      addAnimAttr();
      addEntsToApp();

    });
  });
});

function addModelAttr (){
  // add model component to entity
  robotEnt.addComponent("model", {
    type: "asset",
    asset: model,
    castShadows: true
  });

}

function addAnimAttr(){
  // add animation component to entity
  robotEnt.addComponent("animation", {
    assets: [idleAnim, runAnim],
    speed: 1
  });

}

function addEntsToApp(){

  app.root.addChild(cameraEntity);
  app.root.addChild(robotEnt);
  robotEnt.addComponent("script");
  robotEnt.script.create("keyboardHandler");


}



// Start running then stop in 1s
function run() {
  robotEnt.animation.play("Playbot_run.json", 0.2);
};

// Stop running then start running in 1s
function stop() {
  robotEnt.animation.play("Playbot_idle.json", 0.2);

}


function createMaterial(colors) {
  var material = new pc.PhongMaterial();
  for (var param in colors) {
    material[param] = colors[param];
  }
  material.update();
  return material;
}



