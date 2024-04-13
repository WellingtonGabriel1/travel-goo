const buttn = document.querySelectorAll(".butn");

buttn.forEach((button) => {
  button.dataset.toggled = "false";
  button.addEventListener("click", () => {
    if (button.dataset.toggled === "false") {
      button.style.backgroundColor = "#00a651";
      button.dataset.toggled = "true";
    } else {
      button.style.backgroundColor = "#808080";
      button.dataset.toggled = "false";
    }
  });
});
