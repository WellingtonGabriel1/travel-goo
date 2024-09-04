const buttn = document.querySelectorAll(".butn");
const arrow1 = document.querySelector(".arrow1");
const arrow2 = document.querySelector(".arrow2");
const arrow3 = document.querySelector(".arrow3");
const close1 = document.querySelector(".close-card1");
const close2 = document.querySelector(".close-card2");
const close3 = document.querySelector(".close-card3");
const container1 = document.querySelector(".destinations-modal-container1");
const container2 = document.querySelector(".destinations-modal-container2");
const container3 = document.querySelector(".destinations-modal-container3");
const buttonsub = document.querySelector(".button-subscribe");

//função para abrir e fechar card da seção popular destinations
arrow1.addEventListener("click", function () {
  if (container1.style.display === "block") {
    container1.style.display = "none";
  } else {
    container1.style.display = "block";
  }
});

arrow2.addEventListener("click", function () {
  if (container2.style.display === "block") {
    container2.style.display = "none";
  } else {
    container2.style.display = "block";
  }
});

arrow3.addEventListener("click", function () {
  if (container3.style.display === "block") {
    container3.style.display = "none";
  } else {
    container3.style.display = "block";
  }
});

// funcao para fechar o card quando clicado no X
close1.addEventListener("click", function () {
  if (container1.style.display === "block") {
    container1.style.display = "none";
  } else {
    container1.style.display = "block";
  }
});

close2.addEventListener("click", function () {
  if (container2.style.display === "block") {
    container2.style.display = "none";
  } else {
    container2.style.display = "block";
  }
});

close3.addEventListener("click", function () {
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

// função para fazer scroll para outra seção
function onClickScrollTo(id) {
  document.getElementById(id).scrollIntoView();
}

//Mostrar cards da categoria - celular

function showHotDeals() {
  document.querySelectorAll(".cards-packages-container").forEach((card) => {
    if (window.matchMedia("(max-width: 450px)").matches) {
      card.style.display = "block";
      card.style.flexDirection = "column";
    } else {
      card.style.display = "flex";
    }
  });
}

function showOtherPackages() {
  document.querySelectorAll(".cards-packages-container").forEach((card) => {
    card.style.display = "none";
  });

  alert(
    "Could not find any packages in this category, please try again later."
  );
}

// Mostrar cards da categoria - tablet

function showPackages() {
  document.querySelectorAll(".cards-packages-container").forEach((card) => {
    if (window.matchMedia("(max-width: 1024px)").matches) {
      card.style.display = "grid";
      card.style.gridGap = "45px";
    } else {
      card.style.display = "flex";
    }
  });
}

// Mensagem subscribe

buttonsub.addEventListener("click", function () {
  alert("E-mail registered! Thank you for signing up.");
});
