//Distribuye los botones del navBottom vertical u horizontalmente según el viewport.

const wndwWidth = window.innerWidth;
const navBottomBtnGroup = document.querySelector(".navBottom nav>div:first-child ");
let btnGpClasses = navBottomBtnGroup.getAttribute("class");

wndwWidth < 993 ? 
(btnGpClasses+=" btn-group-vertical") : (btnGpClasses+=" btn-group");

navBottomBtnGroup.setAttribute("class", btnGpClasses);