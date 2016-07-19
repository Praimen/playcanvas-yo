/**
 * Created by b16552 on 7/18/2016.
 */



PlayerActor.prototype.addModelAttr = function (){
  // add model component to entity
  this.addComponent("model", {
    type: "asset",
    asset: model,
    castShadows: true
  });

};
