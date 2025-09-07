/* for fixed "scroll up" button */
/* const scrollUpBtn = document.getElementById("scrollUp");

function scrollToTop() {
    
} */


/* style manipulation for HOME page */
// for mouseenter elements
const getInTouchLink = document.getElementById("getInTouchLink");

// elements to style
let getInTouchArrow = document.getElementById("getInTouchArrow");
let getInTouchButton = document.getElementById("getInTouchButton");

// new classname: .shift-right | .change-color
getInTouchLink.addEventListener("mouseenter", event => {

    getInTouchButton.classList.add("change-color");
    getInTouchArrow.classList.add("shift-right", "change-color");
});

getInTouchLink.addEventListener("mouseleave", event => {

    getInTouchButton.classList.remove("change-color");
    getInTouchArrow.classList.remove("shift-right", "change-color");
});