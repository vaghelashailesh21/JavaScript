//  Qs. For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
//  Find the average marks of the entire class.

let marks = [97,85,75,92,79,89]
let sum = 0;

for(let val of marks){
    sum += val;
}
console.log(sum);
let avg = sum/marks.length;
console.log("Average marks of the class =", avg);

//  Qs. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
//  All items have an offer of 10% OFF on them. Change the array to store final price after
//  applying offer.

let prices = [250, 645, 300, 900, 50]
let i = 0;

for(let value of prices){
   console.log(`value of index ${i} = ${value}`);
   let offer = value / 10;
   prices[i] = prices[i] - offer;
   console.log(`value after offer =  ${prices[i]}`);
   i++;
}
console.log(prices);

// Create an array to store companies -> “Bloomberg”, “Microsoft”, “Uber”, “Google”, “IBM”, “Netflix
//  a. Remove the first company from the array
//  b. Remove Uber & Add Ola in its place
//  c. Add Amazon at the end
 

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.splice(0,1)
console.log(companies);
companies.splice(1,1,"Ola");
console.log(companies);
console.log(companies.push("Amazon"));
console.log(companies);
