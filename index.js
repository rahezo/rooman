const slides = document.querySelectorAll(".slide")
var counter = 0;

slides.forEach(

    (slid, index) => {
        slides.style.left = '${index * 100}%'
    }
)


const goNext = () => {
counter--
slideImage()
}
const goPrev = () => {
    counter++
    slideImage()
    }


const slideImage = () =>{
    slides.forEach(
        (slide) => {
            slides.style.transform = 'translateX(-${counter * 100}%)'
        }
    )
}