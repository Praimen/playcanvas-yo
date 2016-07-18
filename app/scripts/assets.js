/**
 * Created by Praimen on 7/17/2016.
 */
// Load model and animation assets
//TODO: find a way to do this in a promis interface
app.assets.loadFromUrl("../assets/Playbot/Playbot.json", "model", function (err, asset) {
  model = asset;
  app.assets.loadFromUrl("../assets/Playbot/Playbot_run.json", "animation", function (err, asset) {
    runAnim = asset;
    app.assets.loadFromUrl("../assets/Playbot/Playbot_idle.json", "animation", function (err, asset) {
      idleAnim = asset;

      addModelAttr ();
      addAnimAttr();
      //addEntsToApp();
      //TODO: this needs to fire an event upon load completetion

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

function addAnimAttr() {
  // add animation component to entity
  robotEnt.addComponent("animation", {
    assets: [idleAnim, runAnim],
    speed: 1
  });
}
