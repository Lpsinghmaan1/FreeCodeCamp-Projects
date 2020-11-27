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

// object oonstructor 

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

console.log(crow.eat);
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



