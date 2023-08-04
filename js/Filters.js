const filters = document.querySelectorAll(".filtroDeContenido"); //0:desktop, 1:mobile
const cards = document.querySelectorAll(".cardShadow");

if (window.innerWidth < 993)
  filters[1].addEventListener("click", function (e) {
    filter(e, true);
  });
else
  filters[0].addEventListener("click", function (e) {
    filter(e, false);
  });

function filter(e, isMobile) {
  let chosenFilter = null;

  if (isMobile) {
    chosenFilter = e.target.classList[0];
    switchDisplay(e, chosenFilter);
  } else {
    if (e.target.nodeName == `INPUT`) {
      //checks proper click (not on bar nor label)
      chosenFilter = e.target.value;
      switchDisplay(e, chosenFilter);
    }
  }
}

function switchDisplay(e, chosenFilter) {
  cards.forEach((card) => {
    let cardCategory = card.childNodes[1].classList[0];
    switch (true) {
      case cardCategory === chosenFilter || chosenFilter === "mostrarTodos":
        card.style.display = "block";
        break;
      case cardCategory !== chosenFilter:
        card.style.display = "none";
        break;
    }
  });
}
