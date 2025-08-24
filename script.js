const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".nav-list ul");
const menuItem = document.querySelectorAll(".nav-list ul li a");
const header = document.querySelector(".header.container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

// The classList property allows you to interact with the classes of an HTML element.
menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });
});

// after hero
document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = "#29323c";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

//Resume redirect
const resumeButton = document.getElementById("resumeBtn");

resumeButton.addEventListener("click", function () {
  window.open("assets/Zohaib’s-Resume.pdf", "_blank");
});



const skillBars = document.querySelectorAll('.skill-bar span');

function fillBars() {
  skillBars.forEach(bar => {
    const value = bar.getAttribute('data-skill');
    bar.classList.remove('resetting'); // use normal fill speed
    requestAnimationFrame(() => {
      bar.style.width = value + '%';
    });
  });
}

function resetBars() {
  skillBars.forEach(bar => {
    bar.classList.add('resetting'); // switch to faster transition
    bar.style.width = '0%';
  });
}

function checkScroll() {
  const skillsSection = document.querySelector('#skills');
  const rect = skillsSection.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight && rect.bottom > 0) {
    fillBars();
  } else {
    resetBars();
  }
}

window.addEventListener('scroll', checkScroll);

const form = document.querySelector(".Contact-Form");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

// Hide popup on page load
popup.style.display = "none";

// Handle form submission
form.addEventListener("submit", function(event) {
  event.preventDefault(); // stop default form submit

  // Send form using fetch (Formspree)
  fetch(form.action, {
    method: form.method,
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if (response.ok) {
      popup.style.display = "flex";  // Show popup
      popup.style.animation = "popIn 0.3s ease"; // Add animation
      form.reset(); // Reset form fields
    } else {
      alert("Something went wrong. Please try again.");
    }
  }).catch(error => {
    alert("Error: " + error.message);
  });
});

// Close popup on button click
closePopup.addEventListener("click", function() {
  popup.style.display = "none";
});