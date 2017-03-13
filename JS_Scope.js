/** SCOPE In a Nutshell: **/
var x = 1;
alert("In the global window, x is " + x);

function funcLvlOne(someArg) {
  var x = 100;  // not the same as the global\outer x!
    alert("now running funcLvlOne with the argument(s) "+someArg);
    alert("x in funcLvlOne: "+ x);

  function funcLvlTWO(){
    var x = 99999;  // neither of the other x values!
      alert("x in funcLvlTWO: "+ x);
      alert("someArg in funcLvlTWO: "+ someArg);

    someArg = "Unicorn";
      alert("We can change someArg to something else like: "+ someArg);
  }

  alert("Now calling funcLvlTWO!");
  funcLvlTWO();

    alert("Now calling funcLvlTwo - AGAIN!");
  funcLvlTWO();

  alert("Now back in funcLvlOne after running funcLvlTWO twice....\n someArg is: "+someArg+ ", x is: "+x+ "!!!![Unchanged]");

}

/*>>*/ funcLvlOne("Hey There Mister Man");
/*>>*/ alert("And yes, in the global/window, x is " + x);
