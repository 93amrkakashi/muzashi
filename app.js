const section = document.querySelector(".skills");
const spans = document.querySelectorAll(".progress span");
let switchs = document.querySelector(".menu");
let link = document.querySelector(".links");
let navBar = document.getElementById("nav");


console.log(switchs)
function switching(){
    link.classList.toggle("mobile");
    // link.classList.toggle("glass");

}
switchs.addEventListener("click",switching);



window.onscroll = function () {
    if (window.scrollY >= section.offsetTop - 300) {
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    } else {
        spans.forEach((span) => {
            span.style.width = 0;
        })
    }
};





