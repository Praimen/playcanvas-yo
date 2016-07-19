

app.keyboard = new pc.Keyboard(window);
// Set the canvas to fill the window and automatically change resolution to be the same as the canvas size
app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
app.setCanvasResolution(pc.RESOLUTION_AUTO);
app.scene.ambientLight = new pc.Color(0.8, 0.8, 0.8);



app.once("load-app",function (){
  // Create the application and start the update loop
console.log("app loaded");
  app.start();
  playerActorEntity.addComponent("script");
  playerActorEntity.script.create("keyboardHandler");
  app.root.addChild(light);
  app.root.addChild(ground);
  app.root.addChild(cameraEntity);
  app.root.addChild(playerActorEntity);
  light.setLocalPosition(2, 2, 0);
  //light.lookAt(robotEnt.getPosition());// seems problematic

} );







