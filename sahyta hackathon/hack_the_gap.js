let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls (dots are hidden in CSS, but the function still works if you wanted them)
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  if (dots[slideIndex - 1]) dots[slideIndex - 1].className += " active";
}


// All event listeners and button functionality are consolidated here
document.addEventListener('DOMContentLoaded', () => {

    // Help Text Overlay Button
    var helpTextButton = document.getElementById("help-text-overlay");
    if (helpTextButton) {
        helpTextButton.addEventListener("click", () => {
            window.open('help.html', "_blank");
        });
    }

    // Top Bar Donate Button
    var donateBtnTopBar = document.getElementById("donateBtnTopBar");
    if (donateBtnTopBar) {
        donateBtnTopBar.addEventListener("click", () => {
            window.open('donate.html', "_blank");
        });
    }

    // Volunteer Button
    var volunteerBtn = document.getElementById("volunteer-btn");
    if (volunteerBtn) {
        volunteerBtn.addEventListener("click", () => {
            window.open('index2.html', "_blank");
        });
    }

    // Home Button
    var homeLink = document.getElementById("home");
    if (homeLink) {
        homeLink.addEventListener("click", () => {
            window.open('hack_the_gap', "_blank");
        });
    }

    // Modal logic
    const donateBtnForm = document.getElementById('donateBtnForm');
    const modal = document.getElementById('modalOverlay');
    const closeModalBtn = document.getElementById('closeModal');

    if (donateBtnForm) {
        donateBtnForm.addEventListener('click', () => {
            modal.style.display = 'flex';
        });
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});