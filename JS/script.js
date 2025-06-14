/*
.map() = accepts a callback and applies that function to each 
element of an array, then return a new array
*/
// const number = [1, 2, 3, 4, 5];
// const squares = number.map(square);
// const cubes = number.map(cube);
// console.log(squares);
// console.log(cubes);
// function square(element){
//   return Math.pow(element, 2)
// }
// function cube(element){
//   return Math.pow(element, 3)
// }
let vegatables = ["carrots", "celery", "potatoes"];
const toUpperVeg = vegatables.map(upperCase);
console.log(toUpperVeg);
function upperCase(element, index, array){
  return element.toUpperCase();
}

const dates = ["2024-01-10", "2024-02-10", "2024-03-10", "2024-04-10"];
const formatDates = dates.map(formatDate)
console.log(formatDates);

function formatDate(element){
  const parts = element.split("-");
  return `${parts[1]}/${parts[2]}/${parts[0]}`
}




/*
forEach() =
array.forEach(callback)  element, index, array
*/
// let vegatables = ["carrots", "celery", "potatoes"];
// vegatables.forEach(capitalize);
// vegatables.forEach(display)

// function upperCase(element, index, array){
//   array[index] = element.toUpperCase();
// }

// function display(element){
//   console.log(element);
// }

// function capitalize(element, index, array){
//   array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }

// let nums = [1, 2, 3, 4, 5];

// function display(element){
//   console.log(element);
// }
// function double(element, index, array){
//   array[index] = element * 2;
// }
// nums.forEach(double)
// nums.forEach(display);

/*
callback = a function that is passed as an argument to another function
1. reading a file
2. network requests
3. interacting with databases
*/

// function sum(callback, x, y){
//   let result = x + y;
//   callback(result);
// }

// function log(result){
//   console.log(result);
// }

// sum(log, 2, 3);


// function hello(callback){
//   console.log("Hello");
//   callback();
// }
// function wait(){
//   console.log("Wait");
// }
// hello(wait)


/*
Random password generator
*/
//  function generatePassword(length, lower, upper, number, symbols){
//   const lowerchars = "abcdefg";
//   const upperchars = "ABCDEFG";
//   const numberchars = "0123456789";
//   const symbolchars = "!@#$%%^&*()";
//   let allowChars = "";
//   allowChars += lower ? lowerchars : "";
//   allowChars += upper ? upperchars : "";
//   allowChars += number ? numberchars : "";
//   allowChars += symbols ? symbolchars : "";

//   let password = "";

//   if (length <= 0){
//     return `(Please password length must be at least 1)`;
//   }
//   if(allowChars.length === 0){
//     return `(At least 1 set of character needs to be selected.)`
//   }
//   for(let i = 0; i < length; i++){
//     let index = Math.floor(Math.random() * allowChars.length);
//     password += allowChars[index];
//   }
//   return password
// }

// const passwordLength = 12;
// const lower = true;
// const upper = true;
// const number = true;
// const symbols = true;

// const password = generatePassword(passwordLength,
//                                   lower,
//                                   upper,
//                                   number,
//                                   symbols);

// console.log(`Password information: ${password}`);


/*
Dice roller
*/
// function rollDice(){
//   const numOfDice = document.getElementById("numOfDice").value;
//   const diceResult = document.getElementById("diceResult");
//   const diceImage = document.getElementById("diceImage");
//   const values = [];
//   const images = [];

//   for(let i = 0; i < numOfDice; i++){
//     const value = Math.floor(Math.random() * 6) + 1;
//     values.push(value);
//     images.push(`<img src = "dice_images/${value}.png">`)
//   }
//   // console.log(values);
//   diceResult.textContent = `Dice: ${values.join(', ')}`;
//   diceImage.innerHTML = images.join('');

// }


/*
spread operator = ...
allows an iterable such as an array 
or string to be expanded into sperate elements
unpacks the elements

rest parameters = (...rest) allow a function work with a variable 
number of arguments by bundling them into an array

rest and spread do the opposite 
spread = expands an array into seperate elements
rest = bundles seperate elements into array
*/
// let numbers = [1, 2, 3, 4, 5];
// console.log(...numbers); //1 2 3 4 5

// let max = Math.max(...numbers)
// let min = Math.min(...numbers)
// let username = "Bro Code";
// let letters = [...username].join("-");
// let fruits = ["apple", "banana"];
// let vegatables = ["carrots", "celery", "potatoes"]
// // console.log(max);
// // console.log(min);
// // console.log(letters);
// let foods = [...fruits, ...vegatables, "eggs"]; //6) ['apple', 'banana', 'carrots', 'celery', 'potatoes', 'eggs']
// console.log(foods);
// console.log(...fruits);

// // rest part
// const food1 = "pizza0";
// const food2 = "pizza1";
// const food3 = "pizza2";
// const food4 = "pizza3";
// const food5 = "pizza4";

// function getFood(...foods){
//   return foods;
// }
// const food = getFood(food1, food2, food3);
// console.log(food);
// console.log(...food1);


// function sum(...numbers){
//   let result = 0;
//   for(let number of numbers){
//     result += number;
//   }
//   return result;
// }

// const total = sum(1, 2, 3);
// console.log(`Your total is $${total}`);


// // combine string

// function combineStrings(...strings){
//   return strings.join(" ");
// }

// const fullName = combineStrings("Tom", "Chen");
// console.log(fullName);

/*
array = a variable like structure that can hold more than 1 value
*/
// let fruits = ["apple", "banana"];
// // fruits.push("coconut"); //add
// // fruits.pop(); // delete the last element
// // fruits.unshift("mango"); // add the element on the first position
// // fruits.shift(); //delete the first element 
// // console.log(fruits[0]);
// // let numOfFruits = fruits.length;
// // console.log(numOfFruits);
// // let index = fruits.indexOf("apple");
// // console.log(index);

// let number = [1, 2, 4, 3, 7, 5]
// fruits.sort();
// number.sort()
// number.reverse();
// // number.sort().reverse();

// for(let i = 0; i < fruits.length; i++){
//   console.log(fruits[i]);
// }

// for(let i = number.length - 1; i >= 0; i--){
//   console.log(number[i]);
  
// }




/*
Temperature conversion program
*/
// const temperature = document.getElementById("temperature");
// const option1 = document.getElementById("option1");
// const option2 = document.getElementById("option2");
// const submit = document.getElementById("submit");
// const result = document.getElementById("result");
// let temp
// submit.onclick = () => {
//   if(option1.checked){
//     result.textContent = Number(temperature.value).toFixed(2);
//   }else if (option2.checked){
//     result.textContent = Number(temperature.value) * 2 + "F";
//   }else{
//     result.textContent = "Select a unit."
//   }
// }


/*
variable scope = where a variable is recognized and accessible
local and global
*/


/*
function = 
a section of resuable code 
declare the function to execute that code
*/
// function add(x, y){
//   let result = x + y;
//   console.log(result);
// }
// function isEven(number){
//   return number % 2 === 0 ? true : false
// }
// function isValidEmail(email){
//   if(email.includes("@")){
//     return true;
//   }else{
//     return false;
//   }
// }
// add(2, 3);
// console.log(isEven(12));
// console.log(isValidEmail('xinggmail.com'));




/*
Guess Number Game
*/
// const minNum = 50;
// const maxNum = 100;
// const answer = Math.floor(Math.random() *(maxNum - minNum + 1) + minNum);
// console.log(answer);
// let attempts = 0;
// let guess;
// let running = true;
// while(running){
//   guess = window.prompt(`Please enter the number from 50 - 100.`);
//   guess = Number(guess);
//   if(isNaN(guess)){
//     window.alert(`Please enter the valid number.`);
//   }else if (guess > 100 || guess < 50){
//     window.alert(`Please enter number between ${minNum} and ${maxNum}.`);
//   }else{
//     attempts++;
//     if(guess < answer){
//       window.alert("Too Low.")
//     }else if (guess > answer){
//       window.alert("Too high!")
//     }else{
//       window.alert("Congratualtion!")
//       running = false;
//     }
//   }
  

// }






/*
while loop and for loop
while(condition){}
for(let i = 0; i <= 2; i++){}
*/

/*
= assignment operator
== comparsion operator(compare only value)
=== strict equality operator(compare value and datatype)
!= inequality operator
!== strict inequality operator
*/
// const PI = 3.14;
// if(PI == "3.14"){
//   console.log("This is pi");
// }else{
//   console.log("This is not pi");
// }




// logical operators = used to combine or manipulate boolean values(True or false)
/*
AND = &&
OR = ||
NOT = !
*/

/*
method chaining = calling one method after another in one continuous line of code
*/

// // no method chaining
// let username = window.prompt("Please enter the name");
// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// //method chaining
// username = username.trim().charAt(0).toUpperCase() + username.trim().charAt(1).toLowerCase(); 
// console.log(username);




// string slicing = creating a substring form a portion of another string
// string.slice(start, end)
// const fullName = "Bro Code";
// let fistName = fullName.slice(0, 2)
// console.log(fistName);
// let lastChar = fullName.slice(-1);
// let first = fullName.slice(0, fullName.indexOf(" "))
// console.log(first);
// let last = fullName.slice(fullName.indexOf(" ") + 1) 
// console.log(last);

// const email = "Bro@gmail.com";
// let userName = email.slice(0, email.indexOf("@"));
// console.log(userName);




/*
string method = allow you to manipulate and work with text
*/
// let userName = "BroCode";
// console.log(userName.charAt(3)); //indentify the character
// console.log(userName.indexOf('o')); //first index value
// console.log(userName.lastIndexOf('o')); //last index
// console.log(userName.length);

// let user = "Bro     "
// console.log(user.trim());
// console.log(userName.toLowerCase());
// console.log(userName.toUpperCase());
// console.log(userName.repeat(2));
// let result = userName.startsWith('B'); //true or false
// let result1 = userName.endsWith('B');
// let result2 = userName.includes("B") // true or false
// if(result){
//   console.log("Hello");
  
// }

// let phoneNumber = "123-456-7890";
// phoneNumber = phoneNumber.replaceAll("-", "/")
// console.log(phoneNumber);
// p1 = phoneNumber.padStart(15, "0");
// console.log(p1);
// p2 = phoneNumber.padEnd(15, "0");
// console.log(p2);



/*
ternary operator = a shortcut to if{} and else{} statements helps to assign a variable 
based on a condition 
condition ? True : False
*/
// let age = 10
// let message = age >= 18 ? "You are an adult" : "You are a minor";
// console.log(message);



// .checked = property that determines the checked state of an 
// HTML checkbox or radio button element
// const checkbox = document.getElementById("checkbox");
// const visa = document.getElementById("visa");
// const mastercard = document.getElementById("mastercard");
// const paypal = document.getElementById("paypal");
// const submit = document.getElementById("submit");
// const result = document.getElementById("result");
// const payresult = document.getElementById("payresult");

// submit.onclick = () => {
//   if(checkbox.checked){
//     result.textContent = "You are subscribe.";
//   }else{
//     result.textContent = "You are not subscribe.";
//   }

//   if(visa.checked){
//     payresult.textContent = "You are paying with visa.";
//   }else if (paypal.checked){
//     payresult.textContent = "You are paying with paypal.";
//   }else{
//     payresult.textContent = "You are paying with mastercard.";
//   }
// }



// if statements = if a condition is true, execute some code
// if not, do sth else

// Random number generator
// const min = 50;
// const max = 100;
// let randomNum = Math.floor(Math.random() *( max - min)) + min; // 0 to 1
// console.log(randomNum);

// const myButton = document.getElementById("roll");
// const myLabel = document.getElementById("label");
// const min = 1;
// const max = 6;
// let randomNum;
// myButton.onclick = () => {
//   randomNum = Math.floor(Math.random() * max) + min;
//   myLabel.textContent = randomNum;
// }






// math = built-in object that provides a collection of properties and methods

// let x = 10;
// let y = 3.78;
// let z;
// z = Math.round(x); //四舍五入
// let i = Math.floor(x); //round down
// let j = Math.ceil(y); //round up
// let m = Math.trunc(y); //round down
// let a = Math.pow(x, 2); //square
// let b = Math.sqrt(x); //square root
// let l = Math.log(x); 
// let s = Math.sin(x);
// let c = Math.cos(x);
// let t = Math.tan(x);
// let abs = Math.abs(x);
// let sign = Math.sign(x); //negative is -1; positive is 1; 0 is 0
// let max = Math.max(x, y);
// let min = Math.min(x, y);
// let pi = Math.PI;
// let e = Math.E;
// console.log(z);
// console.log(i);
// console.log(j);
// console.log(m);
// console.log(a);
// console.log(b);
// console.log(l);













// counter program
// const decreaseBtn = document.getElementById("decreaseBtn")
// const resetBtn = document.getElementById("resetBtn")
// const increaseBtn = document.getElementById("increaseBtn")
// const countLable = document.getElementById("countLable")
// let count = 0;
// document.getElementById("resetBtn").onclick = () => {
//   count = 0
//   document.getElementById("countLable").textContent = count;
// }
// increaseBtn.onclick = () => {
//   count++;
//   countLable.textContent = count;
// }
// decreaseBtn.onclick = () => {
//   count--;
//   countLable.textContent = count;
// }



// const = variable that can't be changed.
// let pi = 3.14159;
// let radius;
// let circumference;
// const PI = 3.14;

// // radius = window.prompt('Enter the radius of a circle:');
// // radius = Number(radius);
// // circumference = 2 * pi * radius;
// // console.log(circumference);
// document.getElementById("submit").onclick = () => {
//   let radius = document.getElementById("radius").value;
//   radius = Number(radius)
//   circumference = 2 * PI * radius;
//   document.getElementById("result").textContent = circumference + "cm";
// }



// type conversion = change the datatype of a value to another(string, number, booleans)
// let age = window.prompt("How old are you?")
// age = Number(age);
// age += 1
// console.log(age, typeof age);
// let x = "pizza";
// let y = "pizza";
// let z = "pizza";

// x = Number(x);
// y = String(y);
// z = Boolean(z);
// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);


// how to accept user input
// 1. easy way = window prompt
// 2. professional way = html textbox
// let username = window.prompt("What is your username?");
// console.log(username);
// let username;
// document.getElementById("submit").onclick = function(){
//   username = document.getElementById("username").value;
// }
// let username = window.prompt();
// let username;
// function Hello(){
//   username = document.getElementById("username").value;
//   document.getElementById("myH1").textContent =  `Hello ${username}`;
// }

// document.getElementById("submit").onclick = () => {
//   username = document.getElementById("username").value;
//   document.getElementById("myH1").innerHTML = `Hello ${username}`
// }









// operators = + / * -
// let student = 31;
// // student = student + 2;
// // student += 3
// // student /= 2
// // student = student % 7;
// // // student = student ** 2 //square or power
// // student **= 2;

// student++;
// student--;


// console.log(student);






// Variable
// let fullName = "Bro Code";
// let age = 25;
// let student = false;
// document.getElementById("p1").textContent = `Your name is ${fullName}`;
// document.getElementById("p2").textContent = age;
// document.getElementById("p3").textContent = student;

// let x = 20;
// let y = "Hello";
// let m = 'A';
// const z = 30;
// x = 70
// console.log(x);
// console.log(typeof y)
// console.log(typeof m);

// console.log(`You are ${z} years old.`);

// let online = true;
// let offline = false;
// console.log(`Bro is online: ${online}`);


// console.log(`Hello`);
// console.log(`I like pizza!`);

// window.alert(`This is alert`)

//This is a comment
/*
  This 
  is
*/
// document.getElementById("myH1").textContent = "Hello Name";
// document.getElementById("myP").textContent = "I like pizza!"

