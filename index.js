//Image Slider

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;

document.addEventListener("DOMContentLoaded", intializeSlider);

function intializeSlider() {
    if(slides.length > 0)
        slides[slideIndex].classList.add("displaySlide");
}

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    }
    else if(index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}
function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

// Fortnite Quiz
function checkAnswerEvent(event) {
    var answers = ["ark", "black knight", "cuddle team leader", "fallen love ranger", "fish thicc"]
    const container = document.querySelectorAll(".vgame");
    var count = 0;

    container.forEach((userItem) => {
        //console.log(userItem.value);
        if (userItem.value.trim().toLowerCase() == answers[count]) {
            userItem.style.backgroundColor = "green";
            userItem.value += " ✔️ ";
        }
        else {
            userItem.style.backgroundColor = "red";
            userItem.style.color = "white";
            var correctAns = answers[count];
            userItem.value += " ❌ " + correctAns;
        }
        count++;
    });
}
