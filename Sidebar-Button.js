document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById('toggle-sidebar');
    const sidebar = document.getElementById('nav-sidebar');
    const body = document.body;
  
    toggleButton.addEventListener('click', () => {
      sidebar.classList.toggle('visible');
      body.classList.toggle('margin-adjusted'); 
    });
  });