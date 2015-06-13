function playSound() {
  var sounds=["ding1.mp3", "ding2.mp3"];
  var bleep = new Audio();
  bleep.src = sounds[Math.floor(Math.random()*sounds.length)];
  bleep.play();
}


}
function addRow() {
  var row = document.createElement("TR");
  for (i = 0; i < 6; i++) {
    var square = document.createElement("TD");
    square.className = "item" + Math.floor(Math.random() * 6);
    square.setAttribute("onclick", "playSound()");
    row.appendChild(square);
  }
  document.getElementById("mytablebody").appendChild(row);
}
