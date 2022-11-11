const accordion = document.querySelector("#remodelaciones #accordion");
accordion.addEventListener("click", centerViewport);

function centerViewport(e){
	let clickedBtn = null;
	switch(e.target.nodeName)
	{
		case "H2":
			clickedBtn = e.target.parentNode;
			break;
		case "BUTTON":
			clickedBtn = e.target;
			break;
	}
	setTimeout( ()=> { clickedBtn.scrollIntoView( {behavior: "smooth", block:"start"}) }, 300);
}