console.log("Welcome to JavaScript");
console.log("Hi! I am learning JS");
console.log("i am in love with learning JS");
/*
//Create a const object called "student" to store information and print all data of student.
//print age and roll number indivisually.

const student = {
    firstName : "Vikas",
    lastName : "Singh",
    rollNum : 2,
    age : 24,
};
console.log(student);
console.log(student["age"]);
console.log(student.rollNum);
*/

//conditional statment-----------------------------------------------------------------------------------


//if-----------
/*
let age = prompt("Enter Your Age:");
if (age>=18)
    {
    console.log("You can vote now, Wish you all the best.");
    }
if (age<18)
    {
    console.log("You can not vote.");
    } 
*/

//odd even code.------------------
/*
let num = 10;
if (num%2 === 0)
    {
    console.log(num, "is even");
    }
else
    {
    console.log(num, "is odd");
    }*/

//if-else----------
/*let age = 16;
if (age>=18)
    {
    console.log("You can vote now, Wish you all the best.");
    }
else
    {
    console.log("You can not vote.");
    } */

//else-if-------------
/*
let age = 19;
if (age<18)
    {
    console.log("Junior");
    }
else if(age>60)
    {
    console.log("Senior Citizen");
    }
else
    {
    console.log("Young Generation");
    } */


//else-if multiple check(more than 3 conditions can be checked useing else-if statment)---------
/*
let mode = "green";
let color;

if (mode === "dark"){
    color = "Black";
}
else if(mode === "blue"){
    color = "blue";
}
else if(mode === "red"){
    color = "red";
}
else{
    color = "white";
}
console.log(color);
*/

//Set grades according to marks...---------------------------------------
/*
let score = prompt("Enter Your Marks to Know Your Grade:");
let grade;
if (score >= 80 && score <= 100){
    grade = "A";
}
else if (score >= 70 && score <= 79){
    grade = "B";
}
else if (score >= 60 && score <= 69){
    grade = "C";
}
else if (score >= 50 && score <= 59){
    grade = "D";
}
else if(score >= 0 && score <= 49){
    grade = "F";
}
else{
    alert ("Wrong Marks Entered.");
    score = prompt("Enter Your Correct Marks To Know Your Grade:");
    if (score >= 80 && score <= 100){
        grade = "A";
    }
    else if (score >= 70 && score <= 79){
        grade = "B";
    }
    else if (score >= 60 && score <= 69){
        grade = "C";
    }
    else if (score >= 50 && score <= 59){
        grade = "D";
    }
    else if(score >= 0 && score <= 49){
        grade = "F";
    }
    else {
        grade = "Refresh the Page, And Enter Correct Marks.";
    }
}
console.log("According To Your Marks Your Grade Is: ", grade);
*/

//for loop example.-------------------------------------
/*
for (i=1; i<=5; i++){
    console.log("For Loop Example...");
}
console.log("loop has ended.");
*/

//Star * pattern using for loop.--------------
/*
let j = prompt("How many stars you want to print");
for (let i=1; i<=j; i++){
    let s = '';
    for (let k=1; k<=i; k++){
        s = s + "*";
    }
    
    console.log(s);
}
*/

//to calculate sum of first n numbers entered by user-------------
/*
let n = 0; 
let j = prompt("Enter a number to sum all:");
for (let i = 1; i<=j; i++){
    console.log(n); 
    n = n+i;
}
console.log("sum =", n);
console.log("loop has ended.");
*/

//to print from 1 to 5.------------------------
/*
let n=0;
for(let i=1; i<=5; i++){
    console.log("i =", i);
    n=i;
}
console.log("last value of i =", n);
*/

//to print all even numbers from 0 to 100 using loops.------------------
/*
for(let i=0; i <= 100; i++){
    if(i%2 === 0){
        console.log("Even number:", i);
    }
}
*/

/*
//how to create an Array---------------------------------------------
const heros = ["Shahrukh", "salman", "Amir", "Rajnikant"];
    for (i=0; i<heros.length; i++){
    }
    console.log("Number of Actors:", i);
    for (let hero of heros){
        console.log(hero);
    }
*/


//------------------------------------------------------functions-------------------------------------------
/*
//To add two strings using function.----------------------------

function myFunction(msg, nmsg) { //msg and num two parameters are passed into this.
    console.log(msg + nmsg);
}
myFunction("I Love JS", " It's cool by myFunction()"); //And here it's called arguments inside the brackets().
*/

/*
//To add two number using function------------------------------
function sum(x, y){ //here we have passed two arguments.
    console.log(x+y);
}
sum(5,4); //This is parameter.
*/

/*
//adding two number using function in a different way.
function sum(x, y) {
    //local variable -> scope (means x and y only alive within the block)
    s = x + y;
    return s;
}
let val = sum(3,4);
console.log(val);
*/

//below and above one is almost same.

/*
function add(a, b) {
    return a + b;
}
const val = add(5, 8);
console.log("After addition:", val);
*/

