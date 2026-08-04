// 
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
  
    menuToggle.addEventListener('click', () => {
      // Toggle menu visibility
      navLinks.classList.toggle('active');
      
      // Toggle hamburger animation (optional)
      menuToggle.classList.toggle('active');
      
      // Accessibility: update aria-expanded attribute
      const isExpanded = menuToggle.classList.contains('active');
      menuToggle.setAttribute('aria-expanded', isExpanded);
    });
  
    // Optional: Close menu when a link is clicked
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
      });
    });
  });
  