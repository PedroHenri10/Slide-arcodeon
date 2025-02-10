const img = document.querySelectorAll(".slide");
const backArrow = document.getElementById("back-arrow");
const forwardArrow = document.getElementById("forward-arrow");

let currentImg = 0;

forwardArrow.addEventListener("click", function(){
    if(currentImg === img.length -1){
        return;
    }

    currentImg++;

    hideCurrentImg();
    showImg();
    arrowOpacity();
});

backArrow.addEventListener("click", function(){
    if(currentImg === 0){
        return;
    }

    currentImg--;

    hideCurrentImg();
    showImg();
    arrowOpacity();
});

function showImg(){
    img[currentImg].classList.add("show");
}

function hideCurrentImg(){
    const OpenImg = document.querySelector(".show");
    if (OpenImg) {
        OpenImg.classList.remove("show");
    }
}

function arrowOpacity() {
    backArrow.classList.toggle("opacity", currentImg === 0);
    forwardArrow.classList.toggle("opacity", currentImg === img.length -1 );
  }