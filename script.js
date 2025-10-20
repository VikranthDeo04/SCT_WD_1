// Sticky Navbar: Change style on scroll
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Section Reveal on Scroll (fade-in animation)
function revealSections() {
  document.querySelectorAll('section').forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealSections);
window.addEventListener('DOMContentLoaded', () => {
  revealSections();

  // Hamburger menu toggle
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navCTA = document.querySelector(".nav-cta");
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    navCTA.classList.toggle("open");
    navToggle.classList.toggle("open");
  });
});
