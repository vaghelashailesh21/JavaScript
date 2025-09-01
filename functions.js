function myFunction() {
    // This function does something
    console.log("Welcome to myFunction!");
    console.log("I am a simple function that prints a message.");
}       

myFunction();

//sum function
function addNumbers(a, b) {
    return a + b;
}

console.log("The sum of 5 and 10 is: " + addNumbers(5, 10));

//subtract function
function minusNumbers(a, b) {
    return a - b;
}

console.log("a-b = " + minusNumbers(200, 10));

//Arrow function

const multiplyNumbers = (a, b) => {
    return a * b;
}

console.log("The multiplication of 5 and 10 is: " + multiplyNumbers(5, 10));

const divideNumbers = (a, b) => {
    return a / b;
}
console.log("The division of 10 and 5 is: " + divideNumbers(10, 5));


//  Qs. Create a function using the “function” keyword that takes a String as an argument &
//  returns the number of vowels in the string.

function countVowels(str) {
  const vowels = "aeiouAEIOU"; // covers both uppercase and lowercase
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
console.log("Number of vowels in 'Hello World': " + countVowels("Hello World"));

//  Qs. Create an arrow function to perform the same task.
 
 const CountVowels = (str) => {
 const vowels = "aeiouAEIOU"; // covers both uppercase and lowercase
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
 }

//  forEach Loop in Arrays

let arr = [1, 2, 3, 4, 5];
arr.forEach(function printVal(value){
  console.log(value);
});

let Array = ["shayu" , "vikram" , "parag" , "shubham" , "amit" , "harshad" , "tejas" , "jaydip" , "jd"]
Array.forEach( ( name , idx ) => {
     console.log(name.toUpperCase() , idx );
 });

//  Qs. For a given array of numbers, print the square of each value using the forEach loop.

let numbers = [10, 20, 30, 40, 50];
numbers.forEach((num) => {
    console.log("Square of " + num + " is: " + (num * num));
});

// Map Array Method

let nums = [1, 2, 3, 4, 5];
let squares = nums.map(function square(num) {
    return num * num;
});
console.log("Squares of the array: " + squares);

// Filter Array Method
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let EvenNumbers = numbersArray.filter( ( val ) => {
 return val % 2 === 0;
 })

console.log("Even numbers array: " , EvenNumbers);

// Reduce Array Method
let arr1 = [1, 2, 3, 4, 5];
let sum = arr1.reduce((prev , curr) => {
    return prev + curr;
})

console.log("Sum  array: " , sum);

// Reduce with initial value
let arr3 = [10, 22, 3, 4, 5];
let sum1 = arr3.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
})

console.log("Maximum value in the array: " + sum1);

// Find Array Method
let arr2 = [1, 2, 3, 4, 5];
let found = arr2.find((num) => {
    return num > 3;
});
console.log("First number greater than 3 = " + found);

// Qs. We are given array of marks of students. Filter our of the marks of students that scored 90+.
let marks = [85, 92, 78, 95, 88, 90, 100];
let highScorers = marks.filter((mark) => {
    return mark >= 90;
});
console.log("Students who scored 90 or above: " + highScorers);

// Qs. Take a number n as input from user. Create an array of numbers from 1 to n.
//  Use the reduce method to calculate sum of all numbers in the array.
//  Use the reduce method to calculate product of all numbers in the array.

let n = prompt("Enter a number n:");

let numbersArray1 = [];
for (let i = 1; i <= n; i++) {
    numbersArray1[i - 1] = i;
}
console.log(numbersArray1);

let sumofnumbersArray1 = numbersArray1.reduce((prev , curr) => {
    return prev + curr;
})
console.log(sumofnumbersArray1);

let FactorialofnumbersArray1 = numbersArray1.reduce((prev , curr) => {
    return prev * curr;
})
console.log(FactorialofnumbersArray1);



