/**
 * Created by Praimen on 7/17/2016.
 */


PlayerActor.prototype.addAnimAttr = function() {
  // add animation component to entity
  this.addComponent("animation", {
    assets: this.assetObj.animArr,
    speed: 1
  });
};

// Start running then stop in 1s
PlayerActor.prototype.playActorAnim = function(animKey) {
  this.animation.play(this.assetObj.animObjMap[animKey], 0.2);
};

