// Footer Info //

document.addEventListener("DOMContentLoaded", function () {
  // Copyright information
  const copyrightInfo = document.getElementById("copyrightInfo");
  const currentYear = new Date().getFullYear();
  copyrightInfo.textContent = `© ${currentYear} - Andrea Cristancho - Colombia`;

  // Last modified information
  const lastModified = document.getElementById("lastModified");
  const lastModifiedDate = document.lastModified;
  lastModified.textContent = `Last Modified: ${lastModifiedDate}`;
});

// Hamburguer menu //
const mainnav = document.querySelector(".navigation");
const hamButton = document.querySelector("#menu");

hamButton.addEventListener("click", () => {
  mainnav.classList.toggle("show");
  hamButton.classList.toggle("open");
});

//
