// Footer info //

document.addEventListener("DOMContentLoaded", function () {
  // Copyright information
  const copyrightInfo = document.getElementById("copyrightInfo");
  const currentYear = new Date().getFullYear();
  copyrightInfo.textContent = `© ${currentYear} - Andrea Cristancho - Colombia`;

  // Last modified information //
  const lastModified = document.getElementById("lastModified");
  const lastModifiedDate = document.lastModified;
  lastModified.textContent = `Last Modified: ${lastModifiedDate}`;
});

// Hamburguer menu //

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("show");
  hamButton.classList.toggle("show");
});

//Dark Mode  Toggle

const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  main.classList.toggle("dark-mode");
});
