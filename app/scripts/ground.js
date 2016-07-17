/**
 * Created by Praimen on 7/15/2016.
 */

var ground = new pc.Entity();
ground.addComponent("model", {
  type: "box"
});
ground.setLocalScale(50, 1, 50);
ground.setLocalPosition(0, -0.5, 0);

var groundMaterial = createMaterial({
  ambient: new pc.Color(0.1, 0.4, 0.1),
  diffuse: new pc.Color(0.1, 0.4, 0.1)
});
ground.model.model.meshInstances[0].material = groundMaterial;
