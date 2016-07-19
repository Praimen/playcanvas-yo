/**
 * Created by Praimen on 7/17/2016.
 */
// Load model and animation assets


var playerEntAttrObj = {
  model: {},
  animArr: [],
  animState: null,
  assetPath: "../assets/Playbot/",
  assetModelFile: "Playbot.json",
  animObjMap: {
    /*TODO: populate this dynamically this should be attached to the entity actually*/
    run: "Playbot_run.json",
    idle: "Playbot_idle.json"

  }
};




function loadPlayerModel(){
  //TODO: combine this with other load function loadPlayerAnims() maybe
  var assetPath = playerActorEntity.playerAttrObj.assetPath;
  var playerModel = playerActorEntity.playerAttrObj.assetModelFile;
  var stringPath = assetPath + playerModel;
  app.assets.loadFromUrl(stringPath, "model", function (err, asset) {
    if(!err){
      playerActorEntity.playerAttrObj.model = asset;
      app.fire("model-loaded");
    }
  });
}


function loadPlayerAnims(){
  //TODO: combine this with other load function loadPlayerModel() maybe
  var assetPath = playerActorEntity.playerAttrObj.assetPath;
  var animSegment = playerActorEntity.playerAttrObj.animObjMap
  for (key in animSegment) {
    var stringPath = assetPath + animSegment[key];
    app.assets.loadFromUrl(stringPath, "animation", function (err, asset) {
      if(!err){
        playerActorEntity.playerAttrObj.animArr.push(asset);
      }
    });
  }


}


function initPlayerAssets(attrObj){
  playerActorEntity.playerAttrObj = Object.create(attrObj);


  app.on("model-loaded", function(){
    playerActorEntity.addModelAttr();

    //TODO: this need serious work sequencing issues
    console.log('model load');
    app.fire('anim-loaded');
    app.fire("load-app");
  });

  app.on("anim-loaded", function(){
    playerActorEntity.addAnimAttr();

    console.log('anim load');
  });
  loadPlayerAnims();
  loadPlayerModel();


}

initPlayerAssets(playerEntAttrObj);
