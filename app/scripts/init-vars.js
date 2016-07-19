/**
 * Created by b16552 on 7/16/2016.
 */
var model = null;
var runAnim = null;
var idleAnim = null;

var canvas = document.getElementById("application-canvas");
var app = new pc.Application(canvas);
var cameraEntity = new pc.Entity(app);
var KeyboardHandler = pc.createScript('keyboardHandler');
var PlayerActor = new pc.Entity(app);
PlayerActor.prototype = Object.create(PlayerActor);
var playerActorEntity = Object.create(PlayerActor);
playerActorEntity.prototype = PlayerActor.prototype;





function createMaterial(colors) {
  var material = new pc.PhongMaterial();
  for (var param in colors) {
    material[param] = colors[param];
  }
  material.update();
  return material;
}
