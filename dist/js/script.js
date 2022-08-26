 // untuk bagian hamburger
const hamburger = document.querySelector("#hamburger"); // memanggil nama #id
const navMenu  = document.querySelector("#nav-menu"); //navbar fixed

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden"); 
});

//navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header"); // langsung memanggil nama element "header"
  const fixedNav = header.offsetTop; // mengambil jarak dari posisi header terhadap top nya
  const toTop = document.querySelector('#to-top')

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden"); 
    toTop.classList.add("flex"); 
  } else {
    header.classList.remove("navbar-fixed"); // menghapus class navbar-fixed
    toTop.classList.remove("flex"); 
    toTop.classList.add("hidden");  
  }
};

// klik diluar hamburger menu items
window.addEventListener("click", function(e){
if (e.target != navMenu && e.target != hamburger) {
  hamburger.classList.remove("hamburger-active");
  navMenu.classList.add("hidden")
} 
});

//dark mode toggle

const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

 darkToggle.addEventListener("click", function() {
  if (darkToggle.checked) {
    html.classList.add("dark");
    // Whenever the user explicitly chooses dark mode
    localStorage.theme = 'dark';
  } else {
    html.classList.remove("dark");
    // Whenever the user explicitly chooses dark mode
    localStorage.theme = 'light'
  }
});

// pindahkan posisi toggle sesuai mode
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}