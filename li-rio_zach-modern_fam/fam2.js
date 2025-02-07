const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");

  if (offScreenMenu.classList.contains("active")) {
    offScreenMenu.style.display = "block";
  } else {
    offScreenMenu.style.display = "none";
  }
});


document.getElementById("background-audio").play();


function toggleTOC() { // Hide and Show Table of Contents
  const toc = document.querySelector('.toc');
  const toggleBtn = document.querySelector('.toggle-btn');
      
  if (toc.style.display === 'none' || toc.style.display === '') {
    toc.style.display = 'block';
    toggleBtn.innerHTML = '&#9650;'; 
  } else {
    toc.style.display = 'none';
    toggleBtn.innerHTML = '&#9662;'; 
  }
}

let index = 0;

function moveSlide(step) {
  const slides = document.querySelectorAll('.slide');
  const sliderContainer = document.querySelector('.slider-container');
  const totalSlides = slides.length;

  index += step;

  if (index >= totalSlides) index = 0;
  if (index < 0) index = totalSlides - 1;

  sliderContainer.style.transform = `translateX(${-index * 100}%)`;
}

// Auto slide every 3 seconds
setInterval(() => moveSlide(1), 3000);