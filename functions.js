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


document.getElementById('submitButton').addEventListener('click', function () {
  const form = document.getElementById('contactForm');
  const formData = new FormData(form);

  const data = {
      name: formData.get('name'),
      surname: formData.get('surname'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      address: formData.get('address'),
      question1: parseInt(formData.get('question1'), 10),
      question2: parseInt(formData.get('question2'), 10),
      question3: parseInt(formData.get('question3'), 10),
      question4: parseInt(formData.get('question4'), 10),
      question5: parseInt(formData.get('question5'), 10),
  };

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[0-9]{9,12}$/;

    if (!emailPattern.test(data.email)) {
        alert('Neteisingas el. pašto adresas.');
        return;
    }

    if (!phonePattern.test(data.phone)) {
        alert('Neteisingas telefono numeris.');
        return;
    }

    if (data.address.trim() === '') {
        alert('Adresas negali būti tuščias.');
        return;
    }

  const average = (
      data.question1 +
      data.question2 +
      data.question3 +
      data.question4 +
      data.question5
  ) / 5;

  console.log(data);

  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
      <p>Vardas: ${data.name}</p>
      <p>Pavardė: ${data.surname}</p>
      <p>El. paštas: ${data.email}</p>
      <p>Telefono numeris: ${data.phone}</p>
      <p>Adresas: ${data.address}</p>
      <p>Kaip įvertintumėte mūsų svetainės dizainą: ${data.question1}</p>
      <p>Kaip įvertintumėte paslaugų kokybę: ${data.question2}</p>
      <p>Kaip įvertintumėte svetainės naudotojo patirtį: ${data.question3}</p>
      <p>Kaip įvertintumėte informacijos aiškumą: ${data.question4}</p>
      <p>Kaip įvertintumėte bendrą patirtį: ${data.question5}</p>
      <p>Vidutinis įvertinimas: <span id="average">${average.toFixed(2)}</span></p>
      <p>- ${data.name} ${data.surname} ${data.email}: <span id="average2">${average.toFixed(2)}</span></p>
  `;

  const averageSpan = document.getElementById('average');
  const averageSpan2 = document.getElementById('average2');

  if (average < 4) {
      averageSpan.style.color = 'red';
      averageSpan2.style.color = 'red';
  } else if (average < 7) {
      averageSpan.style.color = 'orange';
      averageSpan2.style.color = 'orange';
  } else {
      averageSpan.style.color = 'green';
      averageSpan2.style.color = 'green';
  }
});