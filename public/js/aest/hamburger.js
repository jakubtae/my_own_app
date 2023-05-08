const hamButton = document.querySelector(".hamburger");
const nav = document.querySelector(".navigation__main");

hamButton.addEventListener("click", ()=>{
    const ariaExp = hamButton.getAttribute("aria-expanded");
    if (ariaExp === "false"){
        hamButton.setAttribute("aria-expanded", "true");
        nav.classList.toggle("shown");
    }
    else{
        hamButton.setAttribute("aria-expanded", "false");
        nav.classList.toggle("shown");
    }
} )