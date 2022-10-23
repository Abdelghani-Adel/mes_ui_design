document.addEventListener("DOMContentLoaded", function (event) {
  const content = document.getElementById("content");
  const nav = document.getElementById("nav-bar");
  const bodypd = document.getElementById("body-pd");
  const toggle = document.getElementById("nav-toggle");
  const headerpd = document.getElementById("header");

  // Show nav bar on clicking on toggle button
  toggle.addEventListener("click", () => {
    nav.classList.toggle("navbar-shown");
    toggle.classList.toggle("bx-x");
    bodypd.classList.toggle("body-pd");
    headerpd.classList.toggle("header-shortened");
  });

  // Hide nav bar on clicking on content area
  content.addEventListener("click", () => {
    if (nav.classList.contains("navbar-shown")) {
      nav.classList.remove("navbar-shown");
      toggle.classList.remove("bx-x");
      bodypd.classList.remove("body-pd");
      headerpd.classList.remove("body-pd");
    }
  });

  // showNavbar("nav-toggle", "nav-bar", "body-pd", "header");

  /*===== LINK ACTIVE =====*/
  const linkColor = document.querySelectorAll(".nav_link");

  function colorLink() {
    if (linkColor) {
      linkColor.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    }
  }
  linkColor.forEach((l) => l.addEventListener("click", colorLink));

  // Your code to run since DOM is loaded and ready
});
