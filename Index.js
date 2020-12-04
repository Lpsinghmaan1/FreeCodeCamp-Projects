/*
console.log ('hello world');
// this is my first comment


// Block scope
let x = 1;
{
  let x = 2;
}
console.log(x);

// function scope
var z = 1;
{
   var z = 2;
}
console.log(z);

// const declatation 

const y = 3;
{
  const y = 2;
}
console.log(y);

//--------------------------------------------


// Simple function
function Add(C,D){
return C + D;
}

// Calling the single function 
console.log(Add(1,2));

// Normal object
let person = {
    name : "jay"
};
console.log(person.name);

person.age = 33;

console.log(person);

person.age = 33;

console.log(person.age);

// object Constructor 

function Animal (){};
function Birds (){};

// prototype -  a blue print to create a new object properties

Animal.prototype = {
    livesIn: "jungle",
    eat: function (){
        return "i eat everything"
    }
}

Birds.prototype = {
    legs: 2,
    alive: true
}

Birds.prototype.fly = function() {
    console.log("I'm flying!");
  };

// new bird 
let bat = new Birds;
console.log(bat);

// inhertance 
Birds.prototype = Object.create(Animal.prototype);

let lion = new Animal;
let crow = new Birds;

console.log(crow.eat());
console.log(crow.livesIn);
console.log(lion.eat);


// Mixin - to create a module 

let flyMixin = function(obj) {
    obj.glide = function() {
      console.log("gliding, wooosh!");
    }
  };

  // self invoking function 
let SIfunction = (function(){
    console.log("i am a self invoking function ");
})();
    

// example of a self invoking function by creating a module 

let motionModule = (function () {
    return {
      glideMixin: function(obj) {
        obj.glide = function() {
            return canGlide = true;
        };
      },
      swimMixin: function(obj) {
        obj.swim = function() {
          console.log("Swiming, wooosh!");
        };
      }
    }
  })();

//assigning from the module
motionModule.glideMixin(crow);


console.log(crow.glide());

let crow2 = new Birds;

//console.log(crow2.glide());
*/

let array = [1,2,3,4,5,6,7]
console.log(array);

let test = [1,2,[3,4],[5,6]]
console.log(test);

console.log(test[3][1]);

//push - modifies the array directly
array.push(8);
console.log(array);

//pop - modifies the array directly
array.pop(8);
console.log(array);

//spead
let newArray = [...array];
console.log(newArray);

let animalArray= [ {
  live:"pageYOffset",
  jungle: true
},
{
  live:"pageYOffset",
  jungle: true
}
]

let newAnimal = [...animalArray];
console.log(newAnimal);

animalArray[0].jungle = false;
console.log(newAnimal);

//spread join
let secondArray = [...array,...newArray];
console.log(secondArray);

//indexOf
console.log(secondArray.indexOf("a"));
console.log(secondArray.indexOf(1));

//slice - returns a new array
var carParts = ["lights","tyer","engine","windows","body"];
console.log(carParts.slice(1,3));

//toString - returns a new array
let listOfCarParts = carParts.toString();
console.log(listOfCarParts);

//Filter - returns a new array
let listOfCarParts2 = carParts.filter(function(hasThis){
  return hasThis === "hat";
})
console.log(listOfCarParts2);

//Join
console.log(array.join(''));

//Splice
console.log(array.splice(1,2,"5"));
console.log(array);

//concat
var allParts = listOfCarParts.concat(listOfCarParts2);
console.log(allParts);

//Shift - modifies the original array directly
let shifterAllparts = array.shift();
console.log(shifterAllparts);
console.log(array);

//map - returns a new array
let a = carParts.map(function(part){
  return part.toUpperCase();
})

console.log(a);

//sort - original arrary
console.log(secondArray.sort());

//every
function one(value){
  return value > 25;
}
console.log(secondArray.every(one));








