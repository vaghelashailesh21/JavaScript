//Loops in JavaScript

// print one message 5 times

for(let i=1; i<=5; i++){
    console.log("i=",i);
}

//sum of 1 to 10 numbers

let sum = 0;
for(let i=1; i<=10; i++){
    sum = sum + i;
}
console.log(sum);
console.log("loop of sum is ended")

//multipication tables in javascript

let n = 5;
for(let i=1; i<=10; i++){
    console.log(n,"*",i,"=",n*i);
}

let  z = 25;
for(let i=1; i<=10; i++){
    console.log(`${z} * ${i} = ${z*i}`);
}


//while loop

let s = 1;
while(s<=5){
    console.log("my name is shayu");
    s++;
}

//do while loop

let v = 1;
do{
    console.log("i am the one");
    v++;
}while(v<=5);

//for of loop used for arrays and strings

let subject = "JavaScript";

for(let i of subject){
    console.log("i =",i);
}

// for in loop used for objects

let student = {
    name: "Vaghela Shailesh",
    Age: 21,
    branch: "Mca-sem-3",
    cgpa: 7.5,
    isPass: true ,
};
for(let key in student){
    console.log("key =" , key , "Value =" , student[key]);
}

// Qs1. Print all even numbers from 0 to 100.

for(i=0; i<=100; i++){
    if(i%2!==0){
        console.log("Even number =", i);
    }
}

//Create a game where you start with any random game number. Ask the user to keep
//  guessing the game number until the user enters correct value.
//  Apna Colleget

// let gameNum = 21;
// let userNum = prompt("Guess the correct number:");

// while(gameNum != userNum){
//     let userNum = prompt("You entered a wrong number , Guess Again:");
// }

// console.log(prompt("Congratulations,you have entered correct number"));

// string in javascript

let str = "Indus University";
console.log(str[9]);

//  Prompt the user to enter their full name. Generate a username for them based on the input.
//  Start username with @, followed by their full name and ending with the fullname length.

// // Prompt the user to enter their full name
// let fullName = prompt("Enter your full name:");

// // Remove spaces to get a clean username
// let cleanName = fullName.replace(/\s+/g, '');

// // Calculate the total length (excluding spaces)
// let nameLength = cleanName.length;

// // Create the username
// let username = `@${cleanName}${nameLength}`;

// // Display the generated username
// alert("Your generated username is: " + username);

let fullname = prompt("Enter your full name:");
let username = '@' + fullname + fullname.length;
 alert("Your generated username is: " + username);

 