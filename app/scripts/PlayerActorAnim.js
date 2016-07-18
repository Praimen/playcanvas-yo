/**
 * Created by Praimen on 7/17/2016.
 */


// Start running then stop in 1s
function run() {
  console.log('execute run');
  robotEnt.animation.play("Playbot_run.json", 0.2);
};

// Stop running then start running in 1s
function stop() {
  robotEnt.animation.play("Playbot_idle.json", 0.2);

}
