const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');
const menuImg = menuIcon.querySelector('img');
const nav = document.querySelector('nav');

menuIcon.addEventListener('click', () => {
  const isExpanded = menuIcon.getAttribute('aria-expanded') === 'true';
  
  // Toggle menu
  navLinks.classList.toggle('active');
  
  // Update accessibility attribute
  menuIcon.setAttribute('aria-expanded', !isExpanded);
  
  // Swap icon between menu and close
  if (!isExpanded) {
    menuImg.src = './assets/images/icon-menu-close.svg';
    menuImg.alt = '';
  } else {
    menuImg.src = './assets/images/icon-menu.svg';
    menuImg.alt = '';
  }
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!nav.contains(e.target) && navLinks.classList.contains('active')) {
    navLinks.classList.remove('active');
    menuIcon.setAttribute('aria-expanded', 'false');
    menuImg.src = './assets/images/icon-menu.svg';
  }
});