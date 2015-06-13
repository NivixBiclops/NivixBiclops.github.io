function playsound() {
  var sounds=["ding1.mp3", "ding2.mp3"];
  var ding = new Audio();
  ding.src = sounds[Math.round(Math.random()*2)];
  ding.play();
}