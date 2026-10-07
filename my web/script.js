const themeButton = document.querySelector("#theme-toggle");

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    themeButton.textContent = "Switch to dark mode";
  } else {
    themeButton.textContent = "Switch to light mode";
  }
});