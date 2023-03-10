/** @format */

// function adjustScrollPosition() {
//   const navbarHeight = document.querySelector(".navbar").offsetHeight;
//   const hash = window.location.hash;
//   console.log(hash, navbarHeight);
//   if (hash && document.querySelector(hash)) {
//     const top = document.querySelector(hash).offsetTop - navbarHeight;
//     window.scrollTo({
//       top: top,
//       behavior: "smooth",
//     });
//   }
// }

// window.addEventListener("load", function () {
//   adjustScrollPosition();
//   const navbarLinks = document.querySelectorAll(".navbar-nav a");
//   navbarLinks.forEach(function (link) {
//     link.addEventListener("click", function (event) {
//       event.preventDefault();
//       adjustScrollPosition();
//     });
//   });
// });
