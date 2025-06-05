// counter program
const decreaseBtn = document.getElementById("decreaseBtn")
const resetBtn = document.getElementById("resetBtn")
const increaseBtn = document.getElementById("increaseBtn")
const countLable = document.getElementById("countLable")
let count = 0;
document.getElementById("resetBtn").onclick = () => {
  count = 0
  document.getElementById("countLable").textContent = count;
}
increaseBtn.onclick = () => {
  count++;
  countLable.textContent = count;
}
decreaseBtn.onclick = () => {
  count--;
  countLable.textContent = count;
}







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

