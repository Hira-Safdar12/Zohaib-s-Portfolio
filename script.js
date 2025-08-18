document.querySelector(".menu-toggle").addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("active");
});

 document.getElementById("gmailLink").addEventListener("click", function(event) {
    event.preventDefault();
    window.open(
      "mailto:zohaib.safdar19@gmail.com",
      "gmailWindow",
      "width=800,height=600"
    );
  });

  // LinkedIn
  document.getElementById("linkedinLink").addEventListener("click", function(event) {
    event.preventDefault();
    window.open(
      "https://www.linkedin.com/in/zohaibsafdar/",
      "linkedinWindow",
      "width=1000,height=700"
    );
  });







document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    const offset = 80; // height of your navbar
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = target.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  });
});

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

// 1. Select the button by its ID
const resumeButton = document.getElementById("resumeBtn");

resumeButton.addEventListener("click", function () {
  window.open("assets/Zohaib's-Resume.pdf", "_blank");
});


function animateSkills() {
  let skills = document.querySelectorAll(".progress");

  skills.forEach(skill => {
    let rect = skill.getBoundingClientRect();
    let windowHeight = window.innerHeight;

    if (rect.top < windowHeight - 50 && rect.bottom > 50) {
      // inside viewport → animate to target
      let percent = skill.getAttribute("data-percent");
      skill.style.width = percent + "%";
    } else {
      // outside viewport → reset for re-animation
      skill.style.width = "0%";
    }
  });
}

// Run on scroll and on load
window.addEventListener("scroll", animateSkills);
window.addEventListener("load", animateSkills);



