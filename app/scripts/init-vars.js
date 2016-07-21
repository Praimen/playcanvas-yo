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

//var PlayerActor = new PlayerActor();

//var playerActorEntity = Object.create(PlayerActor);
var playerActorEntity = new PlayerActor(app);
//playerActorEntity.prototype = Object.create(PlayerActor.prototype);

initPlayerAssets(playerAssetObj);



function createMaterial(colors) {
  var material = new pc.PhongMaterial();
  for (var param in colors) {
    material[param] = colors[param];
  }
  material.update();
  return material;
}
