let popup = document.getElementById("popup");

document.onmouseleave = function (){
  popup.style.display = "block";
}

function closeModel(){
  popup.style.display = "none";
}


document.addEventListener('DOMContentLoaded', function () {
  const popup = document.getElementById('popup');
  const closeButton = document.getElementById('closeButton');

  // Show the popup when the page loads
  popup.style.display = 'block';

  // Close the popup when the close button is clicked
  closeButton.addEventListener('click', function () {
    popup.style.display = 'none';
  });
});



const header = document.querySelector("header");
const sectionOne = document.querySelector(".hero");

const sectionOneoptions = { 
  rootMargin: "-200px 0px 0px 0px"
}

const sectionOneObserver = new IntersectionObserver(function(
  entries, 
  sectionOneoptions
  ) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      navBar.classList.add("nav-scrolled");
    } else {
      navBar.classList.remove("nav-scrolled");
    }
  });
}, 
sectionOneoptions);

sectionOneObserver.observe(sectionOne);


const navBar = document.querySelector("nav"),
  menuBtns = document.querySelectorAll(".menu-icon"),
  overlay  = document.querySelector(".overlay");

 menuBtns.forEach((menuBtn) => {
    menuBtn.addEventListener("click", () => {
        navBar.classList.toggle("open");
    });
 });

 overlay.addEventListener("click", () => {
  navBar.classList.toggle("open");
 }); 

 

 const dropdowns = document.querySelectorAll('.dropdown');

 dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
      select.classList.toggle('select-clicked');
      caret.classList.toggle('caret-rotate');
      menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
      option.addEventListener('click', () => {
        selected.innerText = option.innerText;
        select.classList.remove('select-clicked');
        caret.classList.remove('caret-rotate');
        menu.classList.remove('menu-open');
        options.forEach(option => {
          option.classList.remove('active');
        });
        option.classList.add('active');
      });
    });
 });

