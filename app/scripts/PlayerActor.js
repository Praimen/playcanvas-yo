/**
 * Created by b16552 on 7/18/2016.
 */



PlayerActor.prototype.addAnimAttr = function() {
  // add animation component to entity
  this.addComponent("animation", {
    assets: this.playerAttrObj.animArr,
    speed: 1
  });
};

// Start running then stop in 1s
PlayerActor.prototype.playActorAnim = function(animKey) {
  if(this.playerAttrObj.animSegMap[animKey] != undefined){
    this.animation.play(this.playerAttrObj.animSegMap[animKey], 0.2);
    this.setAnimState(animKey);
  }

};

PlayerActor.prototype.addModelAttr = function (){
  // add model component to entity
  this.addComponent("model", {
    type: "asset",
    asset: this.playerAttrObj.model,
    castShadows: true
  });

};

PlayerActor.prototype.setAnimState = function (anim){
  this.playerAttrObj.animState = anim;
};


PlayerActor.prototype.getAnimState = function (){
  return this.playerAttrObj.animState;
};
