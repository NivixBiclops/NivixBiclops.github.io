var randNum = function() {
    return Math.floor(Math.random() * 256);
}

var randColor = function() {
  var randomColor = "rgb(" + randNum() + "," + randNum() + "," + randNum() + ")";
  event.target.style.backgroundColor = randomColor;
}