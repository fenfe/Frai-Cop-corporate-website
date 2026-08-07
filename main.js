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
  
  // <!--  agriculture  -->
  
   // 1. Grab all the scroll rows and desktop image tags
   const steps = document.querySelectorAll('.process-step-row');
   const desktopImages = document.querySelectorAll('.desktop-sticky-media img');

   // 2. Configure the sweet spot area inside the viewport screen
   const observerOptions = {
       root: null,
       rootMargin: '-25% 0px -45% 0px',
       threshold: 0
   };

     // 3. Create the operational tracker loop
     const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          // Check inside the loop if the block enters the screen AND we are on desktop sizing
          if (entry.isIntersecting && window.innerWidth >= 768) {
              const stepNumber = entry.target.getAttribute('data-step');
              
              desktopImages.forEach(img => {
                  if (img.getAttribute('data-step') === stepNumber) {
                      img.classList.add('active');
                      img.style.position = 'relative';
                      img.style.opacity = '1';
                  } else {
                      img.classList.remove('active');
                      img.style.position = 'absolute';
                      img.style.opacity = '0';
                  }
              });
          }
      });
  }, observerOptions);

   // 4. Fire up the tracker engine for every single row
   steps.forEach(step => {
    observer.observe(step);
});

// 5. Safely handle screen orientation changes or window stretching live
window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
      desktopImages.forEach(img => {
          img.style.opacity = '0';
          img.style.position = 'absolute';
      });
  } else {
      // Put image 1 back up if switching to large monitor screens
      const activeImg = document.querySelector('.desktop-sticky-media img.active') || desktopImages[0];
      if (activeImg) {
          activeImg.classList.add('active');
          activeImg.style.position = 'relative';
          activeImg.style.opacity = '1';
      }
  }
});
// end of agriculture