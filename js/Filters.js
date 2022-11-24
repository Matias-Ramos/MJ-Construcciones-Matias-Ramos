//sintax chosenFilter -> Nuevas Viviendas
//sintax cardCategory -> filtroVivienda

const filters = document.querySelector(".filtroDeContenido");
filters.addEventListener("click", filtrar);
const cards = document.querySelectorAll(".cardShadow")




function filtrar(e){
	let chosenFilter = e.target;
	console.log("chosenFilter: ", chosenFilter.id);
	// switch(chosenFilter)
	// {
	// 	case "Nuevas Viviendas":
			
	// }
	// let filteredCards = cards.filter( card => {
	// 	const cardCategory = card.children[0].classList[3];
	// 	if(cardCategory===)
	// })
	
	// cards.forEach( card => {
	// 	let cardCategory = card.children[0].classList[3];
		
	// })
	//chosenFilter.value
}




// const accordionPlantel = document.querySelector("#seccionPlantel #accordion");
// accordionPlantel.addEventListener("click", centerViewport);

// function centerViewport(e){
// 	let clickedCard = null;
// 	switch(e.target.nodeName)
// 	{
// 		case "H3":
// 			clickedCard = e.target.parentNode.parentNode.parentNode;
// 			break;
// 		case "BUTTON":
// 			clickedCard = e.target.parentNode.parentNode;
// 			break;
// 	}
// 	const imgOfClickedCard = clickedCard.children[1].childNodes[1].childNodes[1];
// 	setTimeout( ()=> { imgOfClickedCard.scrollIntoView( {behavior: "smooth", block: "center"}) }, 175);
// }