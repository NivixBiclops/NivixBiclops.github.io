var jazzVotes = 0;
var bluesVotes = 0;
var classicalVotes = 0;
var funkVotes = 0;
var popVotes = 0;
var edmVotes = 0;
var rockVotes = 0;
var maxVotes = 0;
var totalVotes = 0;
var submitted = false;
var aud = new Audio();
var randNum = 0;
var mostVotes = 0;
var topVoted = [];
var selected = "";

function intro() {
	var ping = prompt("Welcome to uMusic! To begin, please enter the amount of votes at which you want the music to start playing.", 10);
	if (ping != null) {
		maxVotes = parseInt(ping);
		submitted = true;
    }
}

function voteJazz() {
	if (submitted == true) {
		jazzVotes++;
		totalVotes++;
		aud = new Audio('ding.mp3');
		aud.play();
		document.getElementById("jazzV").innerHTML=jazzVotes;
		if (totalVotes == maxVotes) {
			playMusic();
		}
	}
	else {
		alert("Please submit a vote cap to vote.");
	}
}

function voteBlues() {
	if (submitted == true) {
		bluesVotes++;
		totalVotes++;
		aud = new Audio('ding.mp3');
		aud.play();
		document.getElementById("bluesV").innerHTML=bluesVotes;
		if (totalVotes == maxVotes) {
			playMusic();
		}
	}
	else {
		alert("Please submit a vote cap to vote.");
	}
}

function voteClassical() {
	if (submitted == true) {
		classicalVotes++;
		totalVotes++;
		aud = new Audio('ding.mp3');
		aud.play();
		document.getElementById("classicalV").innerHTML=classicalVotes;
		if (totalVotes == maxVotes) {
			playMusic();
		}
	}
	else {
		alert("Please submit a vote cap to vote.");
	}
}

function voteFunk() {
	if (submitted == true) {
		funkVotes++;
		totalVotes++;
		aud = new Audio('ding.mp3');
		aud.play();
		document.getElementById("funkV").innerHTML=funkVotes;
		if (totalVotes == maxVotes) {
			playMusic();
		}
	}
	else {
		alert("Please submit a vote cap to vote.");
	}
}

function votePop() {
	if (submitted == true) {
		popVotes++;
		totalVotes++;
		aud = new Audio('ding.mp3');
		aud.play();
		document.getElementById("popV").innerHTML=popVotes;
		if (totalVotes == maxVotes) {
			playMusic();
		}
	}
	else {
		alert("Please submit a vote cap to vote.");
	}
}

function voteEDM() {
	if (submitted == true) {
		edmVotes++;
		totalVotes++;
		aud = new Audio('ding.mp3');
		aud.play();
		document.getElementById("edmV").innerHTML=edmVotes;
		if (totalVotes == maxVotes) {
			playMusic();
		}
	}
	else {
		alert("Please submit a vote cap to vote.");
	}
}

function voteRock() {
	if (submitted == true) {
		rockVotes++;
		totalVotes++;
		aud = new Audio('ding.mp3');
		aud.play();
		document.getElementById("rockV").innerHTML=rockVotes;
		if (totalVotes == maxVotes) {
			playMusic();
		}
	}
	else {
		alert("Please submit a vote cap to vote.");
	}
}

function setMaxVotes() {
	maxVotes = parseInt(document.getElementById("input").value);
	submitted = true;
}

function playMusic() {
	mostVotes = Math.max(jazzVotes, bluesVotes, classicalVotes, funkVotes, popVotes, edmVotes, rockVotes);
	switch (mostVotes) {
		case jazzVotes:
			topVoted.push("jazz");
			break;
		default:
			break;
	}
	switch (mostVotes) {
		case bluesVotes:
			topVoted.push("blues");
			break;
		default:
			break;
	}
	switch (mostVotes) {
		case classicalVotes:
			topVoted.push("classical");
			break;
		default:
			break;
	}
	switch (mostVotes) {
		case funkVotes:
			topVoted.push("funk");
			break;
		default:
			break;
	}
	switch (mostVotes) {
		case popVotes:
			topVoted.push("pop");
			break;
		default:
			break;
	}
	switch (mostVotes) {
		case edmVotes:
			topVoted.push("edm");
			break;
		default:
			break;
	}
	switch (mostVotes) {
		case rockVotes:
			topVoted.push("rock");
			break;
		default:
			break;
	}
	if (topVoted.length > 1) {
		randNum = Math.floor(Math.random() * topVoted.length);
		selected = topVoted[randNum];
		switch (selected) {
			case "jazz":
				playJazz();
				break;
			case "blues":
				playBlues();
				break;
			case "classical":
				playClassical();
				break;
			case "funk":
				playFunk();
				break;
			case "pop":
				playPop();
				break;
			case "edm":
				playEDM();
				break;
			default:
				playRock();
				break;
		}
	}
	else {
		switch (topVoted[0]) {
			case "jazz":
				playJazz();
				break;
			case "blues":
				playBlues();
				break;
			case "classical":
				playClassical();
				break;
			case "funk":
				playFunk();
				break;
			case "pop":
				playPop();
				break;
			case "edm":
				playEDM();
				break;
			default:
				playRock();
				break;
		}
	}
}	

function playJazz() {
	randNum = Math.floor(Math.random() * 4);
	switch (randNum) {
		case 0:
			aud = new Audio('jazz/jazz1.mp3');
			break;
		case 1:
			aud = new Audio('jazz/jazz2.mp3');
			break;
		case 2:
			aud = new Audio('jazz/jazz3.mp3');
			break;
		case 3:
			aud = new Audio('jazz/jazz4.mp3');
			break;
		default:
			aud = new Audio('jazz/jazz5.mp3');
			break;
	}
	aud.play();
	resetVotes();
}

function playBlues() {
	randNum = Math.floor(Math.random() * 2);
	switch (randNum) {
		case 0:
			aud = new Audio('blues/blues1.mp3');
			break;
		case 1:
			aud = new Audio('blues/blues2.mp3');
			break;
		default:
			aud = new Audio('blues/blues3.mp3');
			break;
	}
	aud.play();
	resetVotes();
}

function playClassical() {
	randNum = Math.floor(Math.random() * 2);
	switch (randNum) {
		case 0:
			aud = new Audio('classical/classical1.mp3');
			break;
		case 1:
			aud = new Audio('classical/classical2.mp3');
			break;
		default:
			aud = new Audio('classical/classical3.mp3');
			break;
	}
	aud.play();
	resetVotes();
}

function playFunk() {
	randNum = Math.floor(Math.random() * 3);
	switch (randNum) {
		case 0:
			aud = new Audio('funk/funk1.mp3');
			break;
		case 1:
			aud = new Audio('funk/funk2.mp3');
			break;
		case 2:
			aud = new Audio('funk/funk3.mp3');
			break;
		default:
			aud = new Audio('funk/funk4.mp3');
			break;
	}
	aud.play();
	resetVotes();
}

function playPop() {
	randNum = Math.floor(Math.random() * 1);
	switch (randNum) {
		case 0:
			aud = new Audio('pop/pop1.mp3');
			break;
		default:
			aud = new Audio('pop/pop2.mp3');
			break;
	}
	aud.play();
	resetVotes();
}

function playEDM() {
	randNum = Math.floor(Math.random() * 3);
	switch (randNum) {
		case 0:
			aud = new Audio('edm/edm1.mp3');
			break;
		case 1:
			aud = new Audio('edm/edm2.mp3');
			break;
		case 2:
			aud = new Audio('edm/edm3.mp3');
			break;
		default:
			aud = new Audio('edm/edm4.mp3');
			break;
	}
	aud.play();
	resetVotes();
}

function playRock() {
	randNum = Math.floor(Math.random() * 4);
	switch (randNum) {
		case 0:
			aud = new Audio('rock/rock1.mp3');
			break;
		case 1:
			aud = new Audio('rock/rock2.mp3');
			break;
		case 2:
			aud = new Audio('rock/rock3.mp3');
			break;
		case 3:
			aud = new Audio('rock/rock4.mp3');
			break;
		default:
			aud = new Audio('rock/rock5.mp3');
			break;
	}
	aud.play();
	resetVotes();
}		

function resetVotes() {
	jazzVotes = 0;
	document.getElementById("jazzV").innerHTML=jazzVotes;
	bluesVotes = 0;
	document.getElementById("bluesV").innerHTML=bluesVotes;
	classicalVotes = 0;
	document.getElementById("classicalV").innerHTML=classicalVotes;
	funkVotes = 0;
	document.getElementById("funkV").innerHTML=funkVotes;
	popVotes = 0;
	document.getElementById("popV").innerHTML=popVotes;
	edmVotes = 0;
	document.getElementById("edmV").innerHTML=edmVotes;
	rockVotes = 0;
	document.getElementById("rockV").innerHTML=rockVotes;

}