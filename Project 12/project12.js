var clicks = 0;
var num = 0;
function addShadow() {
	clicks+=0.5;
	num+=1
	document.getElementById("number").innerHTML = num;
	document.getElementById("demon").style.boxShadow = clicks + "px " + clicks + "px " + clicks + "px " + clicks + "px red";
	debugger
	document.getElementById("victimQuote").style.textShadow = clicks + "px " + clicks + "px " + 6 + "px red";
}