/* style manipulation for every project page */
/* for "SHARE YOU IDEAS" section's external link animation */

// for mouseover elements
const toDesktopLink = document.getElementById("toDesktop");
const toMobileLink = document.getElementById("toMobile");

// elements to style: shift-right, shift-left, change-color
let desktopLink = document.getElementById("desktopLink");
let mobileLink = document.getElementById("mobileLink");
let desktopArrow = document.getElementById("shiftDesktopArrow");
let mobileArrow = document.getElementById("shiftMobileArrow");

// new class is ".shift-right"
toDesktopLink.addEventListener("mouseenter", event => {

    desktopLink.classList.add("change-color");
    desktopArrow.classList.add("shift-right", "change-color");
});

toDesktopLink.addEventListener("mouseleave", event => {

    desktopLink.classList.remove("change-color");
    desktopArrow.classList.remove("shift-right", "change-color");
});

toMobileLink.addEventListener("mouseenter", event => {

    mobileLink.classList.add("change-color");
    mobileArrow.classList.add("shift-right", "change-color");
});

toMobileLink.addEventListener("mouseleave", event => {

    mobileLink.classList.remove("change-color");
    mobileArrow.classList.remove("shift-right", "change-color");
});


/* for "PAGE NAVIGATION" section's page link animation */

// mouse listeners
const prevPage = document.getElementById("prev");
const nextPage = document.getElementById("next");

// elements to style: shift-right, shift-left, change-color
let prevLink = document.getElementById("prevLink");
let nextLink = document.getElementById("nextLink");
let prevArrow = document.getElementById("prevArrow");
let nextArrow = document.getElementById("nextArrow");

// to previous page
prevPage.addEventListener("mouseenter", event => {

    prevLink.classList.add("change-color");
    prevArrow.classList.add("shift-left", "change-color");
});

prevPage.addEventListener("mouseleave", event => {

    prevLink.classList.remove("change-color");
    prevArrow.classList.remove("shift-left", "change-color");
});

// to next page
nextPage.addEventListener("mouseenter", event => {

    nextLink.classList.add("change-color");
    nextArrow.classList.add("shift-right", "change-color");
});

nextPage.addEventListener("mouseleave", event => {

    nextLink.classList.remove("change-color");
    nextArrow.classList.remove("shift-right", "change-color");
});