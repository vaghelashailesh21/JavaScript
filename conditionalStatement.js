//Conditional Statements

let Age = 21;
if(Age > 18) {
   console.log( "You Can Vote");
}
if(Age < 18){
    console.log( "You Can not Vote");
}

// example 2

let mode = "light";
let color;
if(mode === "dark"){
    color = "white";
}
else{
    color = "black";
}
console.log(color);

// example 3 Odd Even

let number = 20;
if(number%2===0){
    console.log(number,"is even");
}
else{
    console.log(number,"is odd");
}

// // Qs1. Get user to input a number using prompt(“Enter a number:”). Check if the number is
//  a multiple of 5 or not.

let num = prompt("Enter a number:");
if(num%5===0){
    console.log(num,"is multiple of 5");
}
else{
    console.log(num,"is not multiple of 5");
}

// Qs2. Write a code which can give grades to students according to their scores:

let score = 96;
let grade;
if(score>90 && score<100){
    console.log("You have A grade according to your score");
}else if(score>70 && score<89){
    console.log("You have B grade according to your score");
}else if(score>60 && score<69){
    console.log("You have C grade according to your score");
}else if(score>50 && score<59){
    console.log("You have D grade according to your score");
}else if(score>33 && score<49){
    console.log("You have E grade according to your score ");
}else if(score>0 && score<32){
    console.log("You have F grade according to your score that means you are fail in exam");
}else {
    console.log("Absent in the Exam");
}

for(let i=1; i<=5; i++){
    console.log("i=",i);
}