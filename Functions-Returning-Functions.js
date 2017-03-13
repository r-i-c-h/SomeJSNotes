/***** CLOSURES: Functions returning functions with STORED values *****/
//===================================================================================================
                    /** Example 1: Superhero Machine **/
// I want to be a Superhero & I find out from talking to a guy that there is this Make-A-Superhero Machine.
function makeSuper(heroName){
	alert("BEHOLD, with the wave of a magic dust and the bite of a radioactive animal....")
	alert("You are now a Superhero to be known throughout the galaxy as...." +heroName.toUpperCase()+"!");

// BUT this machine doesn't teach you how to fly or fight or anything really special.
// All it _really_ does is teach you how to be reassuring to people... :-|
	function helpSave(personInTrouble){
		alert( "Don't worry " + personInTrouble + "! I will save you!\nFor it is I, " + heroName + "!!!") );
	}
	return helpSave;
}

// So..... I become a Superhero!
/*>>*/var rich = makeSuper("Super-Duper-Rich");

//From now on, anyone I hug in my ( ) will be saved!
rich("Mr. Mayor");
rich("Mrs. President");
rich("Random Passerby");

//===================================================================================================
                            /** Example 2 **/
var globalScopeVariable = "Seashells"

function whoDoesWhat(name){
  alert("OK, now you'll just have to tell me what "+ name + " is going to do...");

  function doAThing(someAction) {
    // this inner function has access to the outer function's variables and global vars
    alert( name +" "+ someAction +" "+ globalScopeVariable +" by the seashore.");
  }

   return doAThing;
}

var nurseryRhymer = whoDoesWhat("Sally");

/*>*/alert( nurseryRhymer("Sells") );
/*>*/alert( nurseryRhymer("Smells") );
/*>*/globalScopeVariable = "Seels"
/*>*/alert( nurseryRhymer("Sees") );


//===================================================================================================
                            /** Example 3 **/
var x = 10;  var y = 1;
function aFuncToReturnAnotherFunc(y) {// notice we're using 'y'??? What'll happen.....
  return function innerFuncAddsXtoY() {
    console.log("running inner func:" + (x + y) ); // <<== console(x+y);
  };
}
var funcFive = aFuncToReturnAnotherFunc(5);
var funcNiners = aFuncToReturnAnotherFunc(49);
  /*>*/ funcFive()
  /*>*/ funcNine()
	  /*>*/ console.log(y);// <~~~~
// x can change and cause changes, but the 'y' is locked in when you make the 'new' outter functions;

  /*>*/ x = 25; y = 1000;
  /*>*/ funcFive()
  /*>*/ funcNine()
  /*>*/ console.log(y);// <~~~~
