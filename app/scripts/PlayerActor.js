/**
 * Created by b16552 on 7/18/2016.
 */



PlayerActor.prototype.addModelAttr = function (){
  // add model component to entity
  console.log( this.assetObj.model);
  this.addComponent("model", {
    type: "asset",
    asset: this.assetObj.model,
    castShadows: true
  });

};
