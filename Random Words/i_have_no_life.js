function changeWords() {
	var names = ["Jeff", "Bob", "Sam", "Fred", "Tim", "Bartholemew"];
	var descriptors = ["sane. Maybe.", "out of prison. Hide yourself!", "out for revenge, and he knows where you live.", "terrified of your abhorrent face.", "filled with a thirst for conflaguratory retribution only quenchable through your demise.", "basking in the adoration of your nemeses."];
	var descriptor = descriptors[Math.floor(Math.random() * descriptors.length)];
	var name = names[Math.floor(Math.random() * names.length)];
	var sentence_1 = name + " is " + descriptor;
	var sentence_2 = "";

	switch(descriptor) {
		case "sane. Maybe.":
			sentence_2 = "Last time you said that he burned my house to the ground. In Antarctica.";
			break;
		case "out of prison. Hide yourself!":
			sentence_2 = "Too late. The fruit punch is great in Heaven, though.";
			break;
		case "out for revenge, and he knows where you live.":
			sentence_2 = "Revenge? He punched me in the face because he said it was too ugly! He's out for revenge on my face? Gah!";
			break;
		case "terrified of your abhorrent face.":
			sentence_2 = "......       :'(       I cri evry tm";
			break;
		case "filled with a thirst for conflaguratory retribution only quenchable through your demise.":
			sentence_2 = "My humor is too dry to quench his thirst.";
		case "basking in the adoration of your nemeses.":
			sentence_2 = "What? all 583729 of them?";
		default:
			break;

	}
	document.getElementById("sentence-1").innerHTML = sentence_1;
	document.getElementById("sentence-2").innerHTML = sentence_2;
}
