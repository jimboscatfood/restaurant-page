//This is the entry point
import { content, homepage, menu } from "./scripts.js";
//test
//console.log("Hello world!");
homepage();

//Tab switching logic
const navButtons = document.querySelectorAll("nav>button");
navButtons.forEach((button) => 
    button.addEventListener("click",btnEventHandler)
)

function btnEventHandler(e) {
    const btnName = e.target.name;
       //wipe out current content
       content.textContent = "";
       if (btnName === "Home") {
            homepage();
       }
       else if (btnName === "Menu") {
            menu();
       }
       else if (btnName === "About") {
            //about();
       }
}