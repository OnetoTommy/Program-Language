/*
fetch for weather
*/
// WEATHER APP

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "d498fc58320ff0935a20ad97ac54674a";

weatherForm.addEventListener("submit", async event => {

  event.preventDefault();
  const city = cityInput.value;

  if(city){

    try {
      const weatherData = await getWeatherData(city);
      displayWeatherInfo(weatherData);


    } catch (error) {
      console.error(error);
      displayError("Please enter a city.")
    }
  }
  else{
    displayError("Please enter a city.")
  }

});

async function getWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const response = await fetch(apiUrl);
  if(!response.ok){
    throw new Error("Could not fetch weather data.")
  }
  return await response.json()
}

function displayWeatherInfo(data){
  const {name: city, 
         main: {temp, humidity}, 
         weather:[{description, id}]} = data;
  card.textContent = "";
card.style.display = "flex";
const cityDisplay = document.createElement("h1");
const tempDisplay = document.createElement("p");
const humidityDisplay = document.createElement("p");
const descDisplay = document.createElement("p");
const weatherEmoji = document.createElement("p");

cityDisplay.textContent = city;
tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C` //shift + option + 8
humidityDisplay.textContent = `Humidity: ${humidity}`;
descDisplay.textContent = description;
weatherEmoji.textContent = getWeatherEmoji(id);

cityDisplay.classList.add("cityDisplay");
cityDisplay.classList.add("tempDisplay");
humidityDisplay.classList.add("humidityDisplay");
descDisplay.classList.add("descDisplay");
weatherEmoji.classList.add("weatherEmoji")

card.appendChild(cityDisplay);
card.appendChild(tempDisplay);
card.appendChild(humidityDisplay);
card.appendChild(descDisplay);
card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherId){
  switch (true) {
    case (weatherId >= 200 && weatherId < 300):
      return "1"
      break;
    case (weatherId >= 300 && weatherId < 400):
      return "2"
      break;
      case (weatherId >= 400 && weatherId < 500):
      return "3"
      break;
  
    default:
      return "?"
      break;
  }
}

function displayError(message){
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay")
  card.textContent = ""
  card.style.display = "flex";
  card.appendChild(errorDisplay);
}






/*
fetch = function used for making HTTP requests to fetch resources.
JSON style data, images, files
fetch(url, {options})
*/

// fetchData()
// async function fetchData() {

//   try {
    
//     const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
//     if(!response.ok){
//       return new Error("Could not fetch data.")}
//     const data = await response.json()
//     // console.log(data);
    
//     const img = data.sprites.front_default;
//     const imgShow = document.getElementById("pokemonImg");
//     imgShow.src = img;
//     imgShow.style.display = "block";
    
//   } catch (error) {
//     console.error(error);
    
//   }
  
// }


// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then(response => {
//     if(!response.ok){
//       throw new Error("Could not fetch resource")
//     }
//     return response.json();
//   })
//   .then(data => console.log(data))
//   .catch(error => console.error(error))


/*
JSON = data-interchange format
used for exchanging data between a server and a web application
JSON files: {key:val} or [val1, val2, val3]
JSON.stringify() = converts a js object to a JSON string
JSON.parse() = converts a JSON string to a JS object
*/

// fetch("person.json")
//   .then(response => response.json())
//   .then(values => values.forEach(value => console.log(value.name)))
//   .catch(error => console.log(error))


/*
async/Await =

Async makes a function return a promise
Await makes an async function wait for a promise
*/
// function walkDog() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const isTrue = true;
//       if (isTrue) {
//         resolve("You walk the dog.");
//       }
//       else{
//         reject("You didn't walk.")
//       }
//     }, 1500)
//   })
// }

// function cleanKitchen() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("You clean the Kitchen.");
//     }, 1500)
//   })
// }

// function takeOutTrash() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("You take Out Trash.");
//     }, 1500)
//   })
// }

// async function doChores() {
//   try {
//     const walkDogResult = await walkDog();
//     console.log(walkDogResult);
//   } catch (error) {
//     console.log(error);
    
//   }
// }

// doChores()

// walkDog().then(value => {console.log(value); return cleanKitchen()})
//           .then(value => {console.log(value); return takeOutTrash()})
//           .then(value => {console.log(value); console.log("You're done.")})
//           .catch(error => console.log(error));



/*
Promise = 
new Promise((resolve, reject) => {asynchronous code})
*/

// Do these chores in order
//1. Walk the dog
//2. Clean the kitchen
//3. Take out the trash

//How to write to use Promise
// function walkDog() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const isTrue = false;
//       if (isTrue) {
//         resolve("You walk the dog.");
//       }
//       else{
//         reject("You didn't walk.")
//       }
      
//     }, 1500)
//   })
// }

// function cleanKitchen() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("You clean the Kitchen.");
//     }, 1500)
//   })
// }

// function takeOutTrash() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("You take Out Trash.");
//     }, 1500)
//   })
// }

// walkDog().then(value => {console.log(value); return cleanKitchen()})
//           .then(value => {console.log(value); return takeOutTrash()})
//           .then(value => {console.log(value); console.log("You're done.")})
//           .catch(error => console.log(error));




// Callback method
// function walkDog(callback) {
//   setTimeout(() => {
//     console.log("You walk the dog.");
//     callback();
//   }, 1500);
// }

// function cleanKitchen(callback) {
//   setTimeout(() => {
//     console.log("You clean the kitchen.");
//     callback();
//   }, 2000);
// }

// function takeOutTrash(callback) {
//   setTimeout(() => {
//     console.log("You take out the trash.");
//     callback();
//   }, 500);
// }

// walkDog(() => {
//   cleanKitchen(() => {
//     takeOutTrash(() => console.log("You're done."));
//   })
// })



/*
Slider
*/
// const slides = document.querySelectorAll(".slides img")
// // console.log(slides);
// let slideIndex = 0;
// // let intervalId = null;

// document.addEventListener("DOMContentLoaded", initializeSlider)

// function initializeSlider(){
//   if(slides.length > 0){
//     slides[slideIndex].classList.add("displaySlide")
//   // intervalId = setInterval(nextSlide, 5000)
//   } 
  
// }

// function showSlide(index){
//   if(index >= slides.length){
//     slideIndex = 0;
//   }
//   else if(index < 0){
//     slideIndex = slides.length - 1;
//   }

//   slides.forEach(slide => {
//     slide.classList.remove("displaySlide");
//   })
//   slides[slideIndex].classList.add("displaySlide");
// }

// function prevSlide(){
//   slideIndex--;
//   showSlide(slideIndex);
// }

// function nextSlide(){
//   slideIndex++;
//   showSlide(slideIndex);
// }

// const slides = document.querySelectorAll(".slides img")
// let slideIndex = 0;
// let intervalId = null;

// // initializeSlider()
// document.addEventListener("DOMContentLoaded", initializeSlider)

// function initializeSlider(){
//   if(slides.length > 0){
//     slides[slideIndex].classList.add("displaySlide")
//     intervalId = setInterval(nextSlide, 5000)
//   }
// }
// function showSlide(index){

//   if (index >= slides.length) {
//     slideIndex = 0;
//   }
//   else if (index < 0){
//     slideIndex = slides.length - 1;
//   }
//   slides.forEach(slide => {
//     slide.classList.remove("displaySlide");
//   })
//   slides[slideIndex].classList.add("displaySlide");
// }

// function prevSlide(){
//   clearInterval(intervalId)
//   slideIndex--;
//   showSlide(slideIndex);
// }

// function nextSlide(){
//   slideIndex++;
//   showSlide(slideIndex);
// }



/*
Rock paper scissors
*/
// const choices = ["rock", "paper", "scissors"];
// const playerDisplay = document.getElementById("playerDisplay");
// const computerDisplay = document.getElementById("computerDisplay");
// const resultDisplay = document.getElementById("resultDisplay");
// const playerScore = document.getElementById("playScore")
// const computerScore = document.getElementById("computerScore")
// let playScore = 0;
// let computScore = 0;

// function playGame(element){

//   const choice = choices[Math.floor(Math.random() * 3)];
//   let res = "";
//   if(element === choice){
//     res = "It's a tie!"
//   }
//   else{
//     switch (element) {
//       case "rock":
//         res = (choice === "scissors") ? "You win!" : "You'lost!"
//         break;
//       case "paper":
//         res = (choice === "rock") ? "You win!" : "You'lost!"
//         break;
//       case "scissors":
//         res = (choice === "paper") ? "You win!" : "You'lost!"
//         break;
//       default:
//         break;
//     }
//   }
//   playerDisplay.textContent = `Player: ${element}`
//   computerDisplay.textContent = `Computer: ${choice}`
//   resultDisplay.textContent = `Result: ${res}`

//   resultDisplay.classList.remove("greenText", "redText")

//   switch (res) {
//   case "You win!":
//     resultDisplay.classList.add("greenText");
//     playScore++;
//     playerScore.textContent = playScore
//     break;
//   case "You'lost!":
//     resultDisplay.classList.add("redText");
//     computScore++;
//     computerScore.textContent = computScore
//     break;

//  }
// }




/*
classList

add()
remove()
toggle()
replace(old, new)
contains()
*/
// const btn = document.getElementById("btn");
// // btn.classList.add("new")

// btn.addEventListener("click", event => {
//   event.target.classList.add("new");
// })

/*
NodeList
*/
// let btns = document.querySelectorAll(".btn");

// // btns.forEach(btn => {
// //   btn.style.backgroundColor = "green";
// // })

// btns.forEach(btn => {
//   btn.addEventListener("click", event => {
//     event.target.style.backgroundColor = "red";
//   })
// })

// const newBtn = document.createElement("button");
// newBtn.textContent = "Button5";
// newBtn.classList = "btn";
// document.body.appendChild(newBtn)

/*
hide img
*/
// const btn = document.getElementById("btn");
// const img = document.getElementById("myImg");

// btn.addEventListener("click", event => {
//   if (img.style.visibility === "hidden"){
//     img.style.visibility = "visible";
//     btn.textContent = "Hide";
//   }else{
//     img.style.visibility = "hidden";
//     btn.textContent = "Show";
//   }
// })


/*
ddEventListener includes click/mouseover/mouseout

keydown/keyup
*/
// const btn = document.getElementById("myBox");
// btn.addEventListener("click", event => {
//   event.target.style.backgroundColor = "lightgreen";
//   event.target.textContent = "Hello World!"
// })
// btn.addEventListener("mouseover", event => {
//   event.target.style.backgroundColor = "red";
//   event.target.textContent = "Hello Tom"
// })
// btn.addEventListener("mouseout", event => {
//   event.target.style.backgroundColor = "yellow";
//   event.target.textContent = "Hello Chen"
// })
// function changeColor(event){
//   console.log(event);
  
// }
// btn.addEventListener("click", changeColor);

// const myBox = document.getElementById("myBox");

// // document.addEventListener("keydown", event => {
// //   myBox.textContent = "Hello";
// //   myBox.style.backgroundColor = "tomato";

// // })
// // document.addEventListener("keyup", event => {
// //   myBox.textContent = "Hi";
// //   myBox.style.backgroundColor = "blue";
// // })
// const cnt = 10;
// let x = 0;
// let y = 0;

// document.addEventListener("keydown", event => {
//   if(event.key.startsWith("Arrow")){

//     switch (event.key) {
//       case "ArrowUp":
//         y -= cnt
//         break;
//       case "ArrowDown":
//         y += cnt
//         break;
//       case "ArrowLeft":
//         x -= cnt
//         break;
//       case "ArrowRight":
//         x += cnt
//         break;
//     }
//   }

//   myBox.style.top = `${y}px`;
//   myBox.style.left = `${x}px`;
// })


/*
example 01
step 1 create the element
step 2 add attributes/properties
step 3 append element to DOM
Remove html element
*/
// const newH1 = document.createElement("h1");
// newH1.textContent = "I like Pizza!";
// newH1.id = "myH1";
// newH1.style.color = "tomato"
// // document.body.append(newH1);
// // document.body.prepend(newH1);
// document.getElementById("box1").append(newH1);
// // document.getElementById("box1").prepend(newH1);
// // const box2 = document.getElementById("box2");
// // document.body.insertBefore(newH1, box2);

// // const boxes = document.querySelectorAll(".box");
// // document.body.insertBefore(newH1, boxes[2]);

// document.getElementById("box1").removeChild(newH1);


// // step 1
// const newListItem = document.createElement("li");
// newListItem.textContent = "coconut";
// newListItem.id = "Coconut";
// newListItem.style.fontWeight = "bold";
// newListItem.style.backgroundColor = "lightgreen";
// // step 2 add element
// // document.body.append(newListItem);
// document.getElementById("fruits").append(newListItem)

/*
DOM navigation 

.firstElementChild
.lastElementChild
.nextElementChild
.previousElementChild
.parentElementChild
.children
*/

// const element = document.getElementById("fruits");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow";

// const element = document.querySelectorAll("ul");

// element.forEach(e => {
//   const firstChild = e.firstElementChild;
//   firstChild.style.backgroundColor = "yellow";
// })


/*
element selectors
document.getElementById()  
document.getElementsByClassName()  HTML COLLECTION
document.getElementsByTagName() HTML COLLECTION
document.querySelector() First element or null
document.querySelectorAll() all elements or null
*/

// const h4 = document.getElementsByTagName("h4");

// for(let h of h4){
//   h.style.backgroundColor = "yellow"
// }
// h4[1].style.backgroundColor = "lightgreen"

// Array.from(h4).forEach(h => {
//   h.style.backgroundColor = "red";
// })

// const element = document.querySelector(".fruits")
// element.style.backgroundColor = "lightgreen";


/*
calculator
*/
const display = document.getElementById("display");
function appendToDisplay(input){
  display.value  += input;
}

function clearDisplay(){
  display.value = "";
}

function calculate(){
  try {
    display.value = eval(display.value)
  } catch (error) {
    display.value = "Error"
  }
  
}

/*
error
try = cause an error
catch = throw errors
finally = always executes
*/
// try{
//   // const dividend = Number(window.prompt("Enter a dividend: "))
//   // const divisor = Number(window.prompt("Enter a divisor: "))
//   if(divisor === 0 ){
//     throw new Error("You can't divide by zero.")
//   }
//   if(isNaN(dividend) || isNaN(divisor)){
//     throw new Error("Values must be a number.")
//   }

//   const result = dividend / divisor;
//   console.log(result);

// }
// catch(error){
//   console.error(error)
// }
// finally{
//   console.log("Hello World!");
  
// }



/*
synchronous

asynchronous
*/

// function func01(callback){
//   setTimeout(() => {console.log("Task01");
//                     callback()}, 3000);
// }
// function func02(){
//   console.log("Task02");
//   console.log("Task03");
//   console.log("Task04");
// }
// func01(func02)

/*
ES6 module = an external file that contains reusable code that can be imported into other js files
*/
// import {PI, getArea, getCircumference, getVolume} from './mathUtil.js'
// console.log(PI);
// const circumference = getCircumference(10).toFixed(2);
// const area = getArea(10).toFixed(2);
// const volume = getVolume(10).toFixed(3);
// console.log(circumference);
// console.log(volume);
// console.log(area);



/*
StopWatch
*/
// const display = document.getElementById("display");
// let timer = null;
// let startTime = 0;
// let elapseTime = 0;
// let isRunning = false;

// function start(){
//   if(!isRunning){
//     startTime = Date.now() - elapseTime;
//     timer = setInterval(update, 10);
//     isRunning = true;
//   }

// }
// function stop(){
//   if(isRunning){
//     clearInterval(timer)
//     elapseTime = Date.now() - startTime;
//     isRunning = false;
//   }
// }

// function reset(){
//   clearInterval(timer)
//   startTime = 0;
//   elapseTime = 0;
//   isRunning = false;
//   display.textContent = "00:00:00:00"

// }
// function update(){
  
//   const currentTime = Date.now();
//   elapseTime = currentTime - startTime;

//   let hours = Math.floor(elapseTime / (1000 * 60 * 60));
//   let minutes = Math.floor(elapseTime / (1000 * 60) % 60);
//   let seconds = Math.floor(elapseTime / (1000) % 60);
//   let milliseconds = Math.floor(elapseTime % 1000 / 10);
//   hours = String(hours).padStart(2, "0");
//   minutes = String(minutes).padStart(2, "0");
//   seconds = String(seconds).padStart(2, "0");
//   milliseconds = String(milliseconds).padStart(2, "0");

//   display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;

// }




/*
setTimeout = allows you to schedule the execution of a function after an amount of time
*/
// function updateClock(){
//   const now = new Date();
//   let hours = now.getHours();
//   const meridiem = hours >= 12 ? "PM" : "AM";
//   hours = hours % 12 || 12;
//   hours = hours.toString().padStart(2, 0);
//   const minutes = now.getMinutes().toString().padStart(2, 0);
//   const seconds = now.getSeconds().toString().padStart(2, 0);
//   const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
//   document.getElementById("clock").textContent = timeString;
// }
// updateClock()
// setInterval(updateClock, 1000);



// const timeOut = setTimeout(() =>console.log("Hello"), 3000);
// clearTimeout(timeOut);

// let timeoutId;
// function startTimer(){
//   timeoutId = setTimeout(() => window.alert("Hello"), 3000);
//   console.log("sss");
  
// }

// function clearTimer(){
//   clearTimeout(timeoutId);
//   console.log("bbb");
// }



/*
closure = a function defined inside of another function,
the inner function has access to the variables
*/
// function game(){
//   let score = 0;

//   function increaseScore(points){
//     score += points;
//     console.log(`+${points}pts`);
//   }

//   function decreaseScore(points){
//     score -= points;
//     console.log(`-${points}pts`);
//   }

//   function getScore(){
//     return score;
//   }

//   return {increaseScore, decreaseScore, getScore}
// }

// const playGame = game();
// playGame.increaseScore(5);
// playGame.decreaseScore(-1);
// const credits = playGame.getScore();
// console.log(`${credits}pts`);




/*
date objects
Date(year, month, day, hour, minute, second, ms)
*/
// const date = new Date(2024, 11, 1, 2, 3, 4, 5);
// const date = new Date("2024-01-02T12:00:00Z");
// const date = new Date();
// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDay();
// const days = date.getDate();
// const hour = date.getHours();
// const min = date.getMinutes();
// const second = date.getSeconds();
// console.log(year);
// console.log(days);
// console.log(hour);
// console.log(second);
 
// date.setFullYear(2024);
// date.setMonth(0);
// date.setDate(12)
// console.log(date);


/*
Sort
*/
// const fruits = [{name:"apple", age:27, color:"red"},
//                 {name:"peach", age:28, color:"pink"},
//                 {name:"blueberry", age:27, color:"blue"}];
// fruits.sort((a, b) => a.age - b.age);
// console.log(fruits);


/*
Dictionary
*/
// const fruits = [{name:"apple", age:27, color:"red"},
//                 {name:"peach", age:28, color:"pink"},
//                 {name:"blueberry", age:27, color:"blue"}];

// console.log(fruits[0].name);
// fruits.push({name:"berry", age:30, color:"yellow"})

// // console.log(fruits);
// fruits.forEach(a => console.log(a.name));
// const names = fruits.map(a => a.name);
// const yellowFruits = fruits.filter(a =>  a.color === "yellow")  
// console.log(yellowFruits);
// const maxAge = fruits.reduce((accumulator, num) => num.age > accumulator.age ? num : accumulator);
// console.log(maxAge);

// console.log(names);




/*
nested objects = objects inside of other objects
*/
// const person = {
//   fullName: "Spongebob Squarepants",
//   age: 30,
//   isStudent: true,
//   hobbies: ["karate", "jellyfishing", "cooking"],
//   address: {
//     street: "124 Conch St.",
//     city: "Bikini Bottom",
//     country: "Int. Water"
//   }
// };
// // console.log(person.hobbies);
// // console.log(person.hobbies[0]);
// // console.log(person.address.street);

// // for(const property in person.address){
// //   console.log(person.address[property]);
// // }
// for(const item in person.hobbies){
//   console.log(person.hobbies[item]);
// }

// class Person{
//   constructor(name, age, ...address){
//     this.name = name;
//     this.age = age;
//     this.address = new Address(...address);
//   }
// }
// class Address{
//   constructor(street, city, country){
//     this.street = street;
//     this.city = city;
//     this.country = country;
//   }
// }
// const person1 = new Person("Tom", 20, "124 Conch st.", "Hayward", "USA");




// /*
// destructuring = extract values from arrays and objects 
// then assign them to variables in a convient way
// [] = array
// {} = object
// */

// /*
// --------example1--------------
// swap the value of two variables
// */
// // let a = 1;
// // let b = 2;
// // let c = 3;
// // [a, b, c] = [b, c, a];
// // console.log(c);
// // /*
// // --------example1--------------
// // swap the element in an array
// // */
// // const colors = ["red", "green", "blue"];
// // [colors[0], colors[2]] = [colors[2], colors[0]]
// // console.log(colors[0]);

// // /*
// // --------example2--------------
// // assign array elements to variables
// // */
// // const [firstColor, secondColor, ...extractColors] = colors;
// // console.log(firstColor);
// /*
// --------example3--------------
// extract values from objects
// */
// const person1 = {
//   firstName: "Tom",
//   lastName: "Chen",
//   age: 23,
//   job:"Fry Cook",
// }

// const person2 = {
//   firstName: "To1",
//   lastName: "Che1",
//   age: 27,
// }
// const {firstName, lastName, age, job="Unemployed"} = person2;
// console.log(firstName);
// console.log(job);
// function displayPerson({firstName, lastName, age, job}){
//   console.log(`name: ${firstName} ${lastName}`);
// }
// displayPerson(person1)


/*
getter = special method that makes a property readable
setter = special method that makes a property writeable
validate and modify
*/
// class Person{
//   constructor(firstName, lastName, age){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }
//   set firstName(new_FirstName){
//     if(typeof new_FirstName === "string" && new_FirstName.length > 0){
//       this._firstName = new_FirstName
//     }else{
//       console.error("Please enter the type of string.");
//     }
//   }
//   get firstName(){
//     return this._firstName
//   }

//   get fullName(){
//     return this._firstName + " " + this.lastName
//   }

// }
// const person = new Person("Tom", "Chen", "pizza");
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);
// console.log(person.fullName);




// class Rectangle{
//   constructor(width, height){
//     this.a = width;
//     this.b = height;
//   }

//   set a(new_a){
//     if(new_a > 0){
//       this._a = new_a
//     }else{
//       console.error("Number should be positive.");
//     }
//   }

//   get a(){
//     return this._a;
//   }
// }
// const rectangle = new Rectangle(1000, "pizza");
// console.log(rectangle.a);
// console.log(rectangle.b);



/*
super =
supper = the parent 
this = this.object
*/
// class Animal{
//   constructor(name, age){
//     this.name = name;
//     this.age = age;
//   }
//   move(speed){
//     console.log(`${this.name} moves at a speed of ${speed}mph`);
    
//   }

// }
// class Rabit extends Animal{
//   constructor(name, age, runSpeed){
//     super(name, age);
//     this.runSpeed = runSpeed;
//   }
//   run(){
//     console.log(`This is ${this.name}.`);
//     super.move(this.runSpeed)
    
//   }

// }
// class Hawk extends Animal{
//   constructor(name, age, flySpeed){
//     super(name, age);
//     this.flySpeed = flySpeed;
//   }
// }
// const rabbit = new Rabit("rabbit", 1, 25);
// const hawk = new Rabit("hawk", 3, 30);
// console.log(rabbit.name);
// // console.log(rabbit.move(25));
// rabbit.run()



/*
inheritance = allows a new class to inherit properties and methods from existing class
parent -> child
*/
// class Animal{
//   alive = true;
//   eat(){
//     console.log(`This is ${this.name}`);
//   }
// }
// class Rabbit extends Animal {
//   name = "Rabit";
// }
// const rabbit = new Rabbit();
// console.log(rabbit.alive);
// rabbit.eat();




/*
static = keyword that defines properties or methods that belong to a class itself
rather than the objects created from the class
*/
// class MathUtil{
//   static PI = 3.14159;
//   static getDiameter(r){
//     return r * 2;
//   }
//   static getCircumference(r){
//     return 2 * this.PI * r;
//   }
//   static getArea(r){
//     return this.PI * Math.pow(r, 2)
//   }
// }

// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(2));
// console.log(MathUtil.getCircumference(3).toFixed(1));
// console.log(MathUtil.getArea(10));

// class User{
//   static userCount = 0;

//   constructor(username){
//     this.user = username; //this 指的是创建对象，如users.username
//     User.userCount++;
//   }
//   static getUserCount(){
//     console.log(`There are ${User.userCount} users.`);
    
//   }
// }
// const users = new User("Tom");
// console.log(users.user);
// console.log(User.userCount);
// User.getUserCount();





/*
class = ES6 feature provides a more structured and cleaner way to
work with objects
*/
// class Product{
//   constructor(name, price){
//     this.name = name;
//     this.price = price;
//   }
//   displayInfor() {
//     console.log(`This ${this.name} is ${this.price}.`)
//   }
//   calculateTotal(salesTax){
//     return this.price + (this.price * salesTax);
//   }
// }
// const product1 = new Product("Shirt", 19.99);
// product1.displayInfor();

// console.log(product1.calculateTotal(0.1).toFixed(2));


/*
constructor = special method for defining the properties and methods of objects
*/
// function Car(make, model, year, color){
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.color = color
// }
// const car1 = new Car("Ford", "Mustang", 2024, "red");
// console.log(car1.make);
// console.log(car1.model);
// console.log(car1.year);
// console.log(car1.color);

/*
object = {
key:value,
function()
}
a collection of related properties and/or methods
*/
/*
this =
person.name = this.name
*/

// const person1 = {
//   name: "Tom Chen",
//   age: 24,
//   isStudent: true,
//   sayHello: function() {console.log(`Hello ${this.name}`)},
// }
// const person2 = {
//   name: "Tom Zhang",
//   age: 24,
//   isStudent: true,
//   sayHello: () => console.log("Hello Zhang"),
// }
// // console.log(person1.name);
// person1.sayHello();



/*
arrow functions = () => 
*/
// const hello = (name) => console.log(`Hello ${name}`);
// hello("Tom Chen");

// setTimeout(hello, 3000);
// function hello(){
//   console.log("Hell0");
// }
// const number = [1, 2, 3, 4, 5];
// const squares = number.map((element) => Math.pow(element, 2))
// console.log(squares);
// const numEven = number.filter((element) => element % 2 === 0)
// console.log(numEven);
// const numSum = number.reduce((accumulator, element) => accumulator + element);
// console.log(numSum);


/*
.reduce() = reduce the elements of an array to a single value
*/
// const number = [1, 2, 3, 4, 5];
// const total = number.reduce(sum);
// const maxNum = number.reduce(getmax);
// const minNum = number.reduce(getmin);
// console.log(`$${total.toFixed(2)}`);
// console.log(`$${maxNum.toFixed(1)}`);
// console.log(`$${minNum}`);


// function getmax(accumulator, element){
//   return Math.max(accumulator, element);
// }
// function getmin(accumulator, element){
//   return Math.min(accumulator, element);
// }
// function sum(accumulator, element){
//   return accumulator + element;
// }




/*
.filter() = creates a new array by filtering out elements
*/
// const number = [1, 2, 3, 4, 5];
// let vegatables = ["carrots", "celery", "potatoes"];
// let numEven = number.filter(isEven);
// let numOdd = number.filter(isOdd);
// let adult = number.filter(isAdult);
// let shortWord = vegatables.filter(getShortWords);
// console.log(numEven);
// console.log(numOdd);
// console.log(adult);
// console.log(shortWord);



// function getShortWords(element){
//   return element.length > 6;
// }
// function isAdult(element){
//   return element >= 2;
// }


// function isEven(element){
//   return element % 2 === 0;
// }

// function isOdd(element){
//   return element % 2 !== 0;
// }

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
// let vegatables = ["carrots", "celery", "potatoes"];
// const toUpperVeg = vegatables.map(upperCase);
// console.log(toUpperVeg);
// function upperCase(element, index, array){
//   return element.toUpperCase();
// }

// const dates = ["2024-01-10", "2024-02-10", "2024-03-10", "2024-04-10"];
// const formatDates = dates.map(formatDate)
// console.log(formatDates);

// function formatDate(element){
//   const parts = element.split("-");
//   return `${parts[1]}/${parts[2]}/${parts[0]}`
// }




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

