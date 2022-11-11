//Distribuye las características de cada propiedad de forma vertical u horizontal según el viewport.

const wndwWidth = window.innerWidth;
const caracteristicasContainers = document.querySelectorAll(" #containerProyectos .caracteristicasContainer");
let containerClasses = caracteristicasContainers[0].getAttribute("class");

wndwWidth < 993 ? 
(containerClasses+=" list-group-vertical") : (containerClasses+=" list-group-horizontal");

for (container of caracteristicasContainers)
{
	container.setAttribute("class", containerClasses);	
}
