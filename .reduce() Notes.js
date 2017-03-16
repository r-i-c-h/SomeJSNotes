/* The thing about array.reduce is that it is a great swiss-army-knife function -
 You give it an Array (or array-like) input and you can get it to spit out ANY format - String, Array, Obj, Number, ____...
(I'm not gonna use the underbar format here, I'm just using the 'normal' format of reduce:

>> arrayToGoThru.reduce( function( answerToBeReturnedAtTheEnd, thisElementWeAreCurrentlyLookingAt, theIndexOfThatElement, theEntireArray){
>>      // some code that does something...
>>      return answerToBeReturnedAtTheEnd;
>>    }, optionalStartingValueForAnswer );

Often, the 2 vars at the end - theIndexOfThatElement and theEntireArray are left off because we might not have a use for them so there's no point in writing those in.
*/

// Ex1: Classic Example is using .reduce to 'sum' up a bunch of numbers
var w = [1,2,3,4].reduce(function(answer,thisnumber){
    answer = answer + thisnumber;
    return answer;
}, 0 ); // I could start with zero as my 'answer' and get 1+2+3+4

//Ex2: Ex1 with a twist! I forced in a starting value
var x = [1,2,3,4].reduce(function(answer,thisnumber){
    answer = answer + thisnumber;
    return answer;
}, 20 ); // I could start with twenty as my 'answer' and get 20+1+2+3+4


//Ex 3: reduce can use logic like an if statement (here it is really behaving as .filter )
var y = [1,2,3,4].reduce(function(answer,thisnumber){
    if (thisnumber >= 3 ){ answer.push(thisnumber); }
    return answer;
}, [] ); // I could start with a blank array as my 'answer' and get [3,4]

//Ex 4: Let's get an object from an array....
var z = ["a","b","c"].reduce(function(answer,thisElement){
    answer[thisElement] = "someValue";
    return answer;
}, {} ); // I could start with an empty object {} and get  {a:"someValue" ,b:"someValue" ,c:"someValue" }

var zzz = //Ex 5: Let's get a string from an array....
["a","b","c"].reduce(function(answer,thisElement){
    answer = answer.concat(thisElement);
    answer = answer.concat(" AND ");
      return answer;
}, "Here: " ); // I could start with a string and get "Here: a AND b AND c AND " (yeah, that last one would end weird ;)

// Big Note!!!
// You do not _have_to_ put a starting value in for that last little variable before reduce's closing parenthesis,
// but it is ALWAYS a good idea to do so, if only so you can force your answer to be a certain data-type....
