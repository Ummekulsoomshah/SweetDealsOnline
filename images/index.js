const slides = document.getElementsByClassName("crousel-item")
let slidposition = 0
const totalslides = slides.length

function hidallslides(){
    for(let slide of slides){
        slide.classList.remove('crousel-item-visible')
        // slide.classList.add('crousel-item-hidden')


    }
}
document.getElementById("crousel-button-next").addEventListener("click", movetonextslide)
function movetonextslide() {
    hidallslides()
    if (slidposition === totalslides - 1) {
        slidposition = 0
    } else {
        slidposition++;
    } slides[slidposition].classList.add("crousel-item-visible")
}
document.getElementById("crousel-button-pre").addEventListener("click", movetoprevslide)
function movetoprevslide() {
    hidallslides()
    if(slidposition!=0){
        slidposition--;
    }else{
        slidposition=totalslides-1
    }slides[slidposition].classList.add("crousel-item-visible")
}