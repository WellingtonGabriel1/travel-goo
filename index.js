const buttn = document.querySelectorAll(".butn");

// Função para redefinir a cor de todos os botões
function resetButtons() {
  buttn.forEach((button) => {
    button.style.backgroundColor = "#808080";
    button.dataset.toggled = "false";
  });
}

buttn.forEach((button) => {
  button.dataset.toggled = "false";
  button.addEventListener("click", () => {
    if (button.dataset.toggled === "false") {
      resetButtons(); // Redefinir todos os botões quando um é clicado
      button.style.backgroundColor = "#00a651";
      button.dataset.toggled = "true";
    } else {
      button.style.backgroundColor = "#808080";
      button.dataset.toggled = "false";
    }
  });
});
