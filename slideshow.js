document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    showSlides();
  
    function showSlides() {
      const slides = document.getElementsByClassName("slide");
      const slideNavButtons = document.getElementsByClassName("slide-nav-button");
     
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
  
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
  
      for (let i = 0; i < slideNavButtons.length; i++) {
        slideNavButtons[i].classList.remove("active");
      }
  
      slides[slideIndex - 1].style.display = "block";
      slideNavButtons[slideIndex - 1].classList.add("active");
  
      setTimeout(showSlides, 3000); // Change slide every 3 seconds
    }
  })