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

function arrowOpacity(){
    const notFirstImg = currentImg !==0 ;
    if(notFirstImg){
        backArrow.classList.remove("opacity");
    }else{
        backArrow.classList.add("opacity");
    }

    const lastImg = currentImg !== 0 && currentImg === img.length - 1;
    if(lastImg){
        forwardArrow.classList.add("opacity");
    }else{
        forwardArrow.classList.remove("opacity");
    }
}