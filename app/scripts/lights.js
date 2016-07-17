/**
 * Created by Praimen on 7/15/2016.
 */
var light = new pc.Entity();
 light.addComponent("light", {
 type: "spot",
 color: new pc.Color(1, 1, 1),
 outerConeAngle: 60,
 innerConeAngle: 40,
 range: 1000,
 intensity: 1,
 castShadows: true,
 shadowBias: 0.005,
 normalOffsetBias: 0.01,
 shadowResolution: 2048
 });

 var cone = new pc.Entity();
 cone.addComponent("model", {
 type: "cone"
 });
 cone.model.model.meshInstances[0].material = createMaterial({emissive: new pc.Color(1,1,1)});
 light.addChild(cone);
