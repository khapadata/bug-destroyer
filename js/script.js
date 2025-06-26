// Mobile navigation hamburger menu toggle
// Toggles 'active' class on both the hamburger icon and navigation menu
// when the hamburger is clicked. Also closes the menu when a navigation
// link is selected.

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  if (!hamburger || !navMenu) {
    return;
  }

  // Toggle menu on hamburger click
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close the menu when a link is clicked
  const links = navMenu.querySelectorAll('a.nav-link');
  links.forEach(function (link) {
    link.addEventListener('click', function () {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
});
