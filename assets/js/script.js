document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('[data-nav-link]');
  const sections = document.querySelectorAll('[data-page]');

  // Function to handle section switching
  const switchSection = (targetPage) => {
    sections.forEach(section => {
      if (section.getAttribute('data-page') === targetPage) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });

    navLinks.forEach(nav => nav.classList.remove('active'));
    document.querySelector(`[data-nav-link="${targetPage}"]`).classList.add('active');
  };

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const targetPage = link.getAttribute('data-nav-link');
      switchSection(targetPage);
    });
  });

  // Optional: Handle initial section visibility if needed
  switchSection('about');
});


