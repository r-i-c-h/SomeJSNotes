// I want to be a Superhero & I find out from talking to a guy that there is this Make-A-Superhero Machine.

function makeSuper(heroName){
	alert("BEHOLD, with the wave of a magic dust and the bite of a radioactive animal, you are now a Superhero to be known throughout the galaxy as...." +heroName.toUpperCase()+"!");
	
// BUT this machine doesn't teach you how to fly or fight or anything. 
// All it _really_ does is teach you how to be reassuring to people... :-|
	function helpSave(personInTrouble){
		alert( "Don't worry " + personInTrouble + "! I will save you!\nFor it is I, " + heroName + "!!!") );
	}
	return helpSave;
} // end of makeSuper


// So.....
// I become a Superhero!

/*>>*/var rich = makeSuper("Super-Duper-Rich");

//From now on, anyone I hug in my ( ) will be saved!
rich("Mr. Mayor");
rich("Mrs. President");
rich("Random Passerby");
