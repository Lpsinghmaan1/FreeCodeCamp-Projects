// /*
// console.log ('hello world');
// // this is my first comment


// // Block scope
// let x = 1;
// {
//   let x = 2;
// }
// console.log(x);

// // function scope
// var z = 1;
// {
//    var z = 2;
// }
// console.log(z);

// // const declatation 

// const y = 3;
// {
//   const y = 2;
// }
// console.log(y);

// //--------------------------------------------


// // Simple function
// function Add(C,D){
// return C + D;
// }

// // Calling the single function 
// console.log(Add(1,2));

// // Normal object
// let person = {
//     name : "jay"
// };
// console.log(person.name);

// person.age = 33;

// console.log(person);

// person.age = 33;

// console.log(person.age);

// // object Constructor 

// function Animal (){};
// function Birds (){};

// // prototype -  a blue print to create a new object properties

// Animal.prototype = {
//     livesIn: "jungle",
//     eat: function (){
//         return "i eat everything"
//     }
// }

// Birds.prototype = {
//     legs: 2,
//     alive: true
// }

// Birds.prototype.fly = function() {
//     console.log("I'm flying!");
//   };

// // new bird 
// let bat = new Birds;
// console.log(bat);

// // inhertance 
// Birds.prototype = Object.create(Animal.prototype);

// let lion = new Animal;
// let crow = new Birds;

// console.log(crow.eat());
// console.log(crow.livesIn);
// console.log(lion.eat);


// // Mixin - to create a module 

// let flyMixin = function(obj) {
//     obj.glide = function() {
//       console.log("gliding, wooosh!");
//     }
//   };

//   // self invoking function 
// let SIfunction = (function(){
//     console.log("i am a self invoking function ");
// })();
    

// // example of a self invoking function by creating a module 

// let motionModule = (function () {
//     return {
//       glideMixin: function(obj) {
//         obj.glide = function() {
//             return canGlide = true;
//         };
//       },
//       swimMixin: function(obj) {
//         obj.swim = function() {
//           console.log("Swiming, wooosh!");
//         };
//       }
//     }
//   })();

// //assigning from the module
// motionModule.glideMixin(crow);


// console.log(crow.glide());

// let crow2 = new Birds;

// //console.log(crow2.glide());
// */

// let array = [1,2,3,4,5,6,7]
// console.log(array);

// let test = [1,2,[3,4],[5,6]]
// console.log(test);

// console.log(test[3][1]);

// //push - modifies the array directly
// array.push(8);
// console.log(array);

// //pop - modifies the array directly
// array.pop(8);
// console.log(array);

// //spead
// let newArray = [...array];
// console.log(newArray);

// let animalArray= [ {
//   live:"pageYOffset",
//   jungle: true
// },
// {
//   live:"pageYOffset",
//   jungle: true
// }
// ]

// let newAnimal = [...animalArray];
// console.log(newAnimal);

// animalArray[0].jungle = false;
// console.log(newAnimal);

// //spread join
// let secondArray = [...array,...newArray];
// console.log(secondArray);

// //indexOf
// console.log(secondArray.indexOf("a"));
// console.log(secondArray.indexOf(1));

// //slice - returns a new array
// var carParts = ["lights","tyer","engine","windows","body"];
// console.log(carParts.slice(1,3));

// //toString - returns a new array
// let listOfCarParts = carParts.toString();
// console.log(listOfCarParts);

// //Filter - returns a new array
// let listOfCarParts2 = carParts.filter(function(hasThis){
//   return hasThis === "hat";
// })
// console.log(listOfCarParts2);

// //Join
// console.log(array.join(''));

// //Splice
// console.log(array.splice(1,2,"5"));
// console.log(array);

// //concat
// var allParts = listOfCarParts.concat(listOfCarParts2);
// console.log(allParts);

// //Shift - modifies the original array directly
// let shifterAllparts = array.shift();
// console.log(shifterAllparts);
// console.log(array);

// //map - returns a new array
// let a = carParts.map(function(part){
//   return part.toUpperCase();
// })

// console.log(a);

// //sort - original arrary
// console.log(secondArray.sort());

// //every
// function one(value){
//   return value > 25;
// }
// console.log(secondArray.every(one));

// 12/12/2020 - Basic Algorithm

// 1 - Factorialize a Number Passed

function factorialize(num) {
  for (var i = 1; num > 0; num--){
    i *= num
  }
  
  return i;
}

// 5 * 4 * 3 * 2 * 1
// 5 20 60 120 120

console.log(factorialize(5));

// 2 - Longest Word in a StringPassed

function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map(word => word.length))
  
}
console.log(findLongestWordLength("hi i am a boy with from brisbane"))

// 3 - Return Largest Numbers in a muti dimesion Array into an array
//[[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]

function largestOfFour(arr) 
{
    var result = [];
    for (var first = 0; first < arr.length; first++ )
    {
      var Largestnumber = arr[first][0];

      for ( var second = 0; second < arr[first].length; second++)
      {
        if (arr[first][second] > Largestnumber)
        {
          Largestnumber = arr[first][second];
        };
      };
      result[first] = Largestnumber;
    };
    return result;
}
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));


// 4 - Confirm the Ending

function confirmEnding(str, target) 
{
  return str.slice(str.length - target.length) === target;
}

console.log(confirmEnding("Bastian", "n"));

// 5 - Repeat a String num times

function repeatStringNumTimes(str, num) 
{
  var accumulatedStr = "";

  while (num > 0) {
    accumulatedStr += str;
    num--;
  }

  return accumulatedStr;
}

// 6 - Truncate a String
function truncateString(str, num)
 {
   if (str.length > num) 
   {
    return str.slice(0, num) + "...";
   } 
   else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

// 7 - 


console.log("Reg Ex is here");
// RegEx - Regular expressions are used in programming languages to match parts of strings. You create patterns to help you do that matching

// .test will return a True or False 

let testStr = "freeCodeCamp";
let testRegex = /Code/;
console.log(testRegex.test(testStr));

//Match Literal Strings

let wrongRegex = /coDe/;
console.log(wrongRegex.test(testStr));

//Match a Literal String with Different Possibilities - | acts as or
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; 
let result = petRegex.test(petString);

//Ignore Case While Matching - i is used to ignore cases
let myString = "freeCodeCamp";
let fccRegex = /FREEC/i; 
let result2 = fccRegex.test(myString);

//Extract Matches - .match() is used for it and return the matched item - else return null
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/i; 
let result3 = extractStr.match(codingRegex); 

//Find More Than the First Match - g flag (global)
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig; 
let result4 = twinkleStar.match(starRegex);

//Match Anything with Wildcard - /example./
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; 
let result5 = unRegex.test(exampleStr);
console.log(result5);

//Match Single Character with Multiple PossibilitiesPassed - character classes - []
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; 
let result6 = quoteSample.match(vowelRegex);
console.log(result6);

//Match a range of Alphabet - -is used to define a range for ex [a-z]
let quoteSample2 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; 
let result7 = quoteSample2.match(alphabetRegex);

//Match Numbers and Letters of the Alphabet - [a-z0-9]
let quoteSample3 = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; 
let result8 = quoteSample3.match(myRegex); 

//you could also create a set of characters that you do not want to match. These types of character sets are called negated character sets

let quoteSample4 = "3 blind mice.";
let myRegex2 = /[^aeiou^0-9]/gi;
let result9 = quoteSample4.match(myRegex2)

//Match Characters that Occur One or More Times - + to check if that is the case - pattern has to be present consecutively
let difficultSpelling = "Mississippi";
let myRegex3 = /s+/gi; 
let result10 = difficultSpelling.match(myRegex3);
console.log(result10);

//Match Characters that Occur Zero or More Times - * - 
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!"
let chewieRegex = /Aa*/; 
let result11 = chewieQuote.match(chewieRegex);
console.log(result11);

//a greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match
//a lazy match, is which finds the smallest possible part of the string that satisfies the regex pattern. ?
//Regular expressions are by default greedy

//Match Beginning String Patterns - ^ outside []
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; 
let result12 = calRegex.test(rickyAndCal);
console.log(result12);

//Match Ending String PatternsPassed - $ - /example$/
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; 
let result13 = lastRegex.test(caboose);

//Match All Letters and Numbers - \w equal to [A-Za-z0-9_] 
let quoteSample5 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; 
let result14 = quoteSample5.match(alphabetRegexV2);
console.log(result14);

//Match Everything But Letters and NumbersPassed - \W equals to [^A-Za-z0-9_]
let quoteSample6 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; 
let result15 = quoteSample6.match(nonAlphabetRegex);
console.log(result15);

//Match All Numbers - \d equals to [0-9]
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; 
let result16 = movieName.match(numRegex).length;

//Match All Non-Numbers - \D quals to [^0-9]
let movieName1 = "2001: A Space Odyssey";
let noNumRegex = /\D/g;
let result17 = movieName.match(noNumRegex);
console.log(result17);

//Match Whitespace - \s - whitespace,carriage return, tab, form feed, and new line characters.
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; 
let result18 = sample.match(countWhiteSpace);
console.log(result18);

//Match Non-Whitespace Characters - \S
let sample1 = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; 
let result19 = sample.match(countNonWhiteSpace);
console.log(result19);

//Specify Upper and Lower Number of Matches - {3,6}
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/;
let result20 = ohRegex.test(ohStr);

//pecify Only the Lower Number of Matches - {3,}
let haStr = "Hazzzzzzzzzzzzzzzzzzzzzzzzzzah";
let haRegex = /Haz{4,}ah/;
let result21 = haRegex.test(haStr);
console.log(result21);