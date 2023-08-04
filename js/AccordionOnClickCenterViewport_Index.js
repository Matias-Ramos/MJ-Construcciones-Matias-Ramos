const accordionPlantel = document.querySelector("#seccionPlantel #accordion");
accordionPlantel.addEventListener("click", centerViewport);

function centerViewport(e) {
  let clickedCard = null;
  switch (e.target.nodeName) {
    case "H3":
      clickedCard = e.target.parentNode.parentNode.parentNode;
      break;
    case "BUTTON":
      clickedCard = e.target.parentNode.parentNode;
      break;
  }
  const imgOfClickedCard = clickedCard.children[1].childNodes[1].childNodes[1];
  setTimeout(() => {
    imgOfClickedCard.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 175);
}
