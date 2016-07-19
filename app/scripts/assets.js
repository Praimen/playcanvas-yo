/**
 * Created by Praimen on 7/17/2016.
 */
// Load model and animation assets

var assetObj = {
  model:{},
  animArr: [ ],
  animObjMap:{/*TODO: populate this dynamically this should be attached to the entity actually*/
    run   : "Playbot_run.json",
    idle  : "Playbot_idle.json"
  }

};


//TODO: find a way to do this in a promis interface
app.assets.loadFromUrl("../assets/Playbot/Playbot.json", "model", function (err, asset) {

  assetObj.model = asset;
  app.assets.loadFromUrl("../assets/Playbot/Playbot_run.json", "animation", function (err, asset) {
    assetObj.animArr.push(asset);

    app.assets.loadFromUrl("../assets/Playbot/Playbot_idle.json", "animation", function (err, asset) {
      assetObj.animArr.push(asset);

      playerActorEntity.assetObj = Object.create(assetObj);
     playerActorEntity.addModelAttr();
     playerActorEntity.addAnimAttr();
    app.fire("load-app");

      //TODO: this needs to fire an event upon load completetion

    });
  });
});


