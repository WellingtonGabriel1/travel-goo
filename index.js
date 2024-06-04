const buttn = document.querySelectorAll(".butn");
const arrow1 = document.querySelector(".arrow1");
const arrow2 = document.querySelector(".arrow2");
const arrow3 = document.querySelector(".arrow3");
const container1 = document.querySelector(".destinations-modal-container1");
const container2 = document.querySelector(".destinations-modal-container2");
const container3 = document.querySelector(".destinations-modal-container3");

arrow1.addEventListener("click", function () {
  if (container1.style.display === "block") {
    container1.style.display = "none";
  } else {
    container1.style.display = "block";
  }
});

arrow2.addEventListener("click", function() {
  if (container2.style.display === "block") {
    container2.style.display = "none";
  } else {
    container2.style.display = "block";
  }
});

arrow3.addEventListener("click", function() {
  if (container3.style.display === "block") {
    container3.style.display = "none";
  } else {
    container3.style.display = "block";
  }
});

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

function onClickScrollTo(id) {
  document.getElementById(id).scrollIntoView();
}
