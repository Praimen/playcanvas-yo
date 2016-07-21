/**
 * Created by b16552 on 7/18/2016.
 */
function PlayerActor(app){

  var PlayerActor = new pc.Entity();

  this.prototype = pc.Entity.prototype;



  this.prototype.initialize = function () {

    app.on("update", function(dt) {
     // console.log('hey is this working');
    });

  };


  this.prototype.addAnimAttr = function() {
    // add animation component to entity
    this.addComponent("animation", {
      assets: this.playerAttrObj.animArr,
      speed: 1
    });
  };

// Start running then stop in 1s
  this.prototype.playActorAnim = function(animKey) {
    if(this.playerAttrObj.animSegMap[animKey] != undefined){
      this.animation.play(this.playerAttrObj.animSegMap[animKey], 0.2);
      this.setAnimState(animKey);
    }

  };

  this.prototype.addModelAttr = function (){
    // add model component to entity
    this.addComponent("model", {
      type: "asset",
      asset: this.playerAttrObj.model,
      castShadows: true
    });

  };

  this.prototype.setAnimState = function (anim){
    this.playerAttrObj.animState = anim;
  };


  this.prototype.getAnimState = function (){
    return this.playerAttrObj.animState;
  };


  this.prototype.initialize();


  return PlayerActor;
}
