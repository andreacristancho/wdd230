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

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});

// Dark Mode //

const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});
