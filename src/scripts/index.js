
console.log('Hello World!');

// a constant variable needs to be initialized,don't change his value

// let obtain an error in this console.log(x); let x =34; but var not because the value is undefined 

//let is only used in blocks, but var can be used outside of these
// if(true){var foo = 9;} console.log(foo); its ok return 9 bet let retunr error

//rest parameters allow a function to store multiple values ​​in an array, you can mix rest parameters and normals
//function sendCars(day,...allCarIds){allCarIds.forEach(id => console-log(id));} sendCars('monday',100,200,555)

// let carIds = [1,2,5]; let [(, skip one element)car1,car2(...x-> return the rest of the values)] = carIds; console.log(carIds); return 1,2

// let car { id=55 , style: 'manual'}; let { id, style} = car; console.log(id, style); return; 55 manual 
// let id, style; ({id, style}) = car ++parentheses are needed to say that it is not a block; console.log(id, style);

//spread syntax takes the array and extends it across multiple parameters
//function startCar(car1,car2,car3){console.log(car1,car2,car3);} let carCodes = 'abc'; startCar(...carCodes); return a b c

//toString(); parseInt(); parseFloat();

//break; end the loop continue; the body would have finished the execution

//++var add 1 before its use var++ after its use  ++ = 1 -- = -1  +var turn in a number -var change it to the opposite sign

// && and  || or ! turn in a boolean value and fliped if is true now is false

// var result = (foo > 5) ? true : false 

// var += 10; add 10 the same the same happens with the others, -= ,/= ,*= ,%=

//function scope as soon as the function ends the variables inside are unreachable
//but you can use a variable declared in the function in a nested function

//remenber the variables declared in a block are only available inside this outside they return an error

//let message = 'out'; if (5 == 5) { let message = 'inside'; console.log(message); return inside} console.log(message); return out

//to convert a function into an IIFE'S we add () to enclose the function and (); we send the necessary values
//let app = (function(){let carId = 123; console.log("in function"); return{};})(); console.log(app);

//any declared value persists along with any function but need return a reference to the function

//let o = {carId = 123, getId: function(){ return this.carId;}}; console.log(o.getId()); in this case (this) is an object

//apply acept an array as an argument
//let o = {carId = 123, getId: function(prefix){ return prefix + this.carId;}}; console.log(o.getId());
//apply == let newCar = {carId = 456}; console.log(o.getId.apply(newCar, ['ID: '])); return ID: 456

//bind copy a function and assign a new context

// => value to return 
//let getId = (prefix,suffix) => { return prefix + 123 + suffix;} 
//if the function has only one return function it is not necessary to add {} and return ++++ () == _

//function Car(id) {this.carId =id; this.start = function(){console.log('start '+ this.carId)};} let vehicle = new Car(123); vehicle.start();

//function Car(id) {this.carId =id;} Car.prototype.start = function(){console.log('start '+ this.carId)}; let vehicle = new Car(123); vehicle.start();

//console.log(JSON.stringify(carId)); return a large string of ty JSON let carIds = JSON.parse(jsomIn); return a normal String

//foreEach == traverse each element of the array///filter can be used to filter the array and show only related elements///validates that there is carId in each element
// find show first match

//class Car {constructor(id){this.id = id;}} let car = new Car(123); console.log(car.id);

//identify(){return `Car Id; ${this.id}`;} this is a method

//modules is the same as separating the js into different files and exporting and importing them when needed

//try {let car = newcar;} catch (error) { console.log('error: ', error)} console.log('continuing');
//finnaly always executes even when an error occurs

//let promise = new Promise(function(resolve, reject){setTimeout(resolve, 100, 'someValue')}); console.log(promise);
//promise.then( value => console.log('fulfilled: ' + value), error => console.log('rejected: ' + error) );