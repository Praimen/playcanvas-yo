/**
 * Created by Praimen on 7/17/2016.
 */
// Load model and animation assets


var playerAssetObj = {
  model: {},
  animArr: [],
  animSegMap: {},
  animState: null,
  assetPath: "../assets/Playbot/",
  assetModelFileArr:[ "Playbot.json" ],
  animSegMapArr: [
    {run: "Playbot_run.json"},
    {idle: "Playbot_idle.json"}
  ]
};




function loadPlayerModel(){

  var assetPath = playerActorEntity.playerAttrObj.assetPath;
  var playerModelArr = playerActorEntity.playerAttrObj.assetModelFileArr;
  var assetModelCount = 0;

  for (var i = 0; i < playerModelArr.length; i++) {
    var playerModel = playerModelArr[i];
    var stringPath = assetPath + playerModel;

    app.assets.loadFromUrl(stringPath, "model", function (err, asset) {

      if (!err) {
        assetModelCount++;
        playerActorEntity.playerAttrObj.model = asset;
        if (assetModelCount == playerModelArr.length) {
          app.fire("model-loaded");
        }

      }

    });
  }


}


function loadPlayerAnims(){

  var assetPath = playerActorEntity.playerAttrObj.assetPath;
  var animSegment = playerActorEntity.playerAttrObj.animSegMapArr;
  for (var i = 0; i < animSegment.length; i++) {
    var obj = animSegment[i];
    var assetAnimCount = 0;

    for (key in obj) {
      playerActorEntity.playerAttrObj.animSegMap[key] = obj[key];

      var stringPath = assetPath + obj[key];
      app.assets.loadFromUrl(stringPath, "animation", function (err, asset) {
        if(!err){
          assetAnimCount++;

          playerActorEntity.playerAttrObj.animArr.push(asset);
          if (assetAnimCount == animSegment.length) {
            app.fire('anim-loaded');
          }
        }
      });
    }
  }


}





function initPlayerAssets(attrObj){
  playerActorEntity.playerAttrObj = Object.create(attrObj);
  var modelsLoaded = false, animsLoaded = false;
  var isAssetLoaded = (modelsLoaded && animsLoaded);

  app.on("model-loaded", function(){
    playerActorEntity.addModelAttr();
    modelsLoaded = true;
    console.log('model load ' + isAssetLoaded);
    if(modelsLoaded && animsLoaded){
      initApp();
    }


  });

  app.on("anim-loaded", function(){
    playerActorEntity.addAnimAttr();
    animsLoaded = true;
    console.log('anim load '+ isAssetLoaded);
    if(modelsLoaded && animsLoaded){
      initApp();
    }
  });


  loadPlayerAnims();
  loadPlayerModel();


}

initPlayerAssets(playerAssetObj);
