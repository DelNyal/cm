// JavaScript code for auto image slider

let slideIndex = 0;

const slides = document.getElementsByClassName("slide");

function showSlide() {

  for (let i = 0; i < slides.length; i++) {

    slides[i].style.opacity = "0";

  }

  slideIndex++;

  if (slideIndex > slides.length) {

    slideIndex = 1;

  }

  slides[slideIndex - 1].style.opacity = "1";

}

setInterval(showSlide, 3000); // Change slide every 3 seconds

