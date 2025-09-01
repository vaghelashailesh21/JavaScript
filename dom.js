// Qs. Create a H2 heading element with text - “Hello JavaScript”. Append “from Apna College
//  students” to this text using JS.

let h1 = document.querySelector("h1");

console.dir(h1.innerText);

h1.innerText = h1.innerText + " From Vaghela Shailesh";

//  Qs. Create 3 divs with common class name - “box”. Access them & add some unique text to each
//  of them.

let boxes = document.querySelectorAll(".box");  
boxes[0].innerText = "box1";
boxes[1].innerText = "box2";
boxes[2].innerText = "box3";
//  Qs. Change the background color of the first div to red, second to green and third to blue.
boxes[0].style.backgroundColor = "orange";
boxes[1].style.backgroundColor = "white";
boxes[2].style.backgroundColor = "green";

// Qs. Create a new button element. Give it a text “click me”, background color of red & text color
//   of white.
//   Insert the button as the first element inside the body tag. 

let btn = document.createElement("button");
btn.innerText = "click me";
btn.style.backgroundColor = "red";  
btn.style.color = "white";

document.body.prepend(btn);  // to insert the button as the first element inside the body tag.

//  Qs. Create a <p> tag in html, give it a class & some styling. 
// Now create a new class in CSS and try to append this class to the <p> element.
//  Did you notice, how you overwrite the class name when you add a new one?
//  Solve this problem using classList.

let para = document.querySelector("p");
para.classList.add("newContent");  // to append the new class to the <p> element without overwriting the existing class name.

