function change() {
  var element = document.getElementById("btn-1");
  element.style.top = Math.round(Math.random() * 500) + "px";
  element.style.left = Math.round(Math.random() * 1000) + "px";
  element.style.backgroundColor = "rgb(" + randomNum() + "," + randomNum() + "," + randomNum() + ")";
  element.style.height = Math.round(Math.random() * 50) + 30 + "px";
  element.style.width = Math.round(Math.random() * 100) + 120 + "px";
  element.style.borderRadius = Math.round(Math.random() * 100) + "%";
  element.style.border = Math.round(Math.random() * 10) + "px";
  element.style.borderColor = "rgb(" + randomNum() + "," + randomNum() + "," + randomNum() + ")";
  var borderStyles = ["dotted", "dashed", "groove", "solid"];
  element.style.borderStyle = borderStyles[Math.floor(Math.random() * borderStyles.length)];
  element.style.color = "rgb(" + randomNum() + "," + randomNum() + "," + randomNum() + ")";
  var fontStyles = ["Helvetica", "impact", "Palatino Linotype", "Book Antiqua", "Comic Sans MS", "Courier New", "Courier", "Verdana"];
  element.style.fontFamily = fontStyles[Math.floor(Math.random() * borderStyles.length)];
  element.style.fontSize = Math.round(Math.random() * 20) + 10 + "px";
}

var clicks = 0;

function add() {
  clicks=clicks+1;
  document.getElementById("clicks").innerHTML = "Clicks: "+clicks;
  alert("Stop trying to click the button!");
}

var randomNum = function() {
 return Math.floor(Math.random() * 256);
}