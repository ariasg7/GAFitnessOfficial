// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

const wrapper = document.querySelector('.about-img-wrapper');
const imgs = wrapper.querySelectorAll('img');

wrapper.addEventListener('click', (e) => {
  if (!e.target.matches('img')) return;

  const clicked = e.target;

  const currentMain = wrapper.querySelector('.img-main');
  const currentSecondary = wrapper.querySelector('.img-secondary');
  const currentTertiary = wrapper.querySelector('.img-tertiary');

  if (clicked === currentTertiary) {
    // Rotate right: clicked image (tertiary) becomes main
    currentMain.classList.replace('img-main', 'img-secondary');
    currentSecondary.classList.replace('img-secondary', 'img-tertiary');
    currentTertiary.classList.replace('img-tertiary', 'img-main');
  } else if (clicked === currentSecondary) {
    // Rotate left: clicked image (secondary) becomes main
    currentMain.classList.replace('img-main', 'img-tertiary');
    currentTertiary.classList.replace('img-tertiary', 'img-secondary');
    currentSecondary.classList.replace('img-secondary', 'img-main');
  }
  // Do nothing if main image is clicked
});