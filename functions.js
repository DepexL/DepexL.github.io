document.addEventListener("DOMContentLoaded", () => {
  const scrollUpButton = document.getElementById("Scroll-Up");
  const mainElement = document.querySelector("main"); 
  const headerElement = document.querySelector("header"); 


  mainElement.addEventListener("scroll", () => {
    const scrollPosition = mainElement.scrollTop; 
    const headerHeight = headerElement.offsetHeight; 

    if (scrollPosition > headerHeight) {
      scrollUpButton.style.opacity = "1";
      scrollUpButton.style.visibility = "visible";
    } else {
      scrollUpButton.style.opacity = "0";
      scrollUpButton.style.visibility = "hidden";
    }
  });


  scrollUpButton.addEventListener("click", () => {
    mainElement.scrollTo({
      top: 0, 
      behavior: "smooth", 
    });
  });

  const toggleSidebarButton = document.getElementById("toggle-sidebar");
  const navSidebar = document.getElementById("nav-sidebar");

  toggleSidebarButton.addEventListener("click", () => {
    navSidebar.classList.toggle("visible");
  });

  const darkLightButton = document.getElementById("dark-light-mode");

  darkLightButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("dark-mode-background");
  });
});


function updateClock() {
  const now = new Date();  
  const hours = String(now.getHours());  
  const minutes = String(now.getMinutes());  
  const seconds = String(now.getSeconds());  
 
  const formattedTime = `${hours}:${minutes}:${seconds}`;
 
  document.getElementById('clock').textContent = formattedTime;
}

 
setInterval(updateClock, 1000);
 
updateClock();
