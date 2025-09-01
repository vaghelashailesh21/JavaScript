// create a toggle button that changes the screen to dark mode when clicked and light mode when clicked again.

let btn = document.querySelector("#myBtn");
let currentmode = "Light";

btn.addEventListener("click", () => {
    if (currentmode === "Light"){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        currentmode = "Dark";
    }
    else{
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        currentmode = "Light";
    }
})