// Arithmetic Operators

let a = 21;
let b = 2;
let c = a+b;

console.log("a + b = " , c);

let A = 50;
let B = 5;

console.log("A = ", A , "B = ", B );
console.log("A + B = " , A+B );
console.log("A - B = " , A-B );
console.log("A * B = " , A*B );
console.log("A / B = " , A/B );
console.log("A % B = " , A%B );
console.log("A ** B = " , A**B );

// Unary Operators

let x = 10;
let y = 5;

console.log("x = ", x , "B = ", y );
 
console.log("++x = ", ++x);       // increment x+1
console.log("--x = ", --x);       // decrement x-1

console.log("y-- = ", y--);
console.log("y-- = ", y);

console.log("y++ = ", y++);
console.log("y++ = ", y);

// Assignment Operator
// let x = 10;
// let y = 5;

console.log("x = ", x , "B = ", y );

x += 5; // x = x + 5 // X=10
console.log("x+5 = ", x); // ans = 15

y -= 2; // y = y - 2 // Y=5
console.log("y-2 = ", y); // ans = 3

x *= 5; // x = x * 5 // x=15
console.log("x*5 = ", x); // ans = 75

x %= 4; // x = x % 4  // x=75
console.log("x%4 = ", x); // ans = 3

y /= 2; // y = y / 2  // y=3
console.log("y/2 = ", y); // ans = 1.5

x **= 5; // x = x ** 5  // x=3
console.log("x**5 = ", x); // ans = 243

// Comparison Operators

let s = 20;
let v = 18;

console.log("s == v", s==v);    // Equal to 
console.log("s != v", s!=v);    // Not Equal to 
console.log("s === v", s===v);  // Equal to & type
console.log("s !== v", s!==v);  // Not Equal to & type

console.log("s > v", s > v);    // Greater than
console.log("s >= v", s >= v);  // Greater than Equal to
console.log("s < v", s < v);    // Less than
console.log("s <= v", s <= v);  // Less than Equal to
console.log("v < s", v < s);    // v is less than s 
console.log("v <= s", v <= s);  // v is less than Equal to s

//Logical Operators

let condition1 = s > v;
let condition2 = v < s;

// logical and(&) operator // if both condition are true than output will be true
console.log("condition1 && condition2" , condition1 && condition2);  

// logical or(||) operator // if one condition is true than output will be true 
console.log("condition1 || condition2" , s < v ||  s > v);  

// logical Not(!) operator // if one condition is true than output will be Fales , viceversa 
console.log("s > v" , (!s > v)); 

//ternary operator

let age = 15;

let result = age>18 ? "you are adult" : "you are not adult";
console.log(result);