//Fungsi membuka menu di resonsive
function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
}

//Fungsi acive menu saat scrolling
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .container ul li");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.pageYOffset >= sectionTop - 50) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};

// //Fungsi text animasi mengetik
// import { init } from "ityped";

// const oneElement = document.querySelector("#one");
// const otherElement = document.querySelector("#other");

// init(oneElement, { showCursor: false, strings: ["Nice", "One"] });
// init(otherElement, {
//   disableBackTyping: true,
//   strings: ["iTyped is", "Awesome"],
// });
