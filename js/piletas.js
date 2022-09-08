function expandirForm()
{
    let divAsesoram = document.querySelector(".solicitarAsesoram section");
    let formContacto = document.createElement("div");
    formContacto.setAttribute("class","col-10 col-xs-10 col-sm-10 col-lg-6 col-xl-6");
    formContacto.innerHTML = `
    <form class="my-4">
        <!--Zona-->
        <div class="form-group">
            <label for="zona">Ubicación de la obra: </label>
            <textarea class="form-control" id="zona" rows="1"></textarea>
        </div>
        <!--Descripción libre-->
        <div class="form-group">
            <label for="descripcionLibre">Información adicional que desee indicar: </label>
            <textarea class="form-control" id="descripcionLibre" placeholder="Por ejemplo:&#10;-Medida: 3x7, 4x8, 5x10...&#10;-Con revestimientos.&#10;-Con vereda térmica.&#10;-Otros." rows="5"></textarea>
        </div>
        <!--email-->
        <div class="form-group">
            <label for="email">Direccion de correo electrónico:</label>
            <input type="email" class="form-control" id="email">
        </div>

        <!--Teléfono-->
        <div class="form-group">
            <label for="telefono">Teléfono:</label>
            <input class="form-control" id="telefono">
        </div>
        
        <button type="submit" class="btn btn-primary mt-3 mb-5 w-50">Enviar</button>
    </form>`;
    divAsesoram.append(formContacto);

    let agrandarFuente = () =>
    {
    let formContent = document.querySelectorAll(".solicitarAsesoram .form-group");
    for(let i=0; i<formContent.length; i++)
        formContent[i].style.fontSize = "larger";
    }
    agrandarFuente();

    
}
function deshabilitarBtn()
{
    btnExpandirAsesoram.setAttribute("disabled","");
    btnExpandirAsesoram.setAttribute("class","btn btn-outline-primary w-50")
    btnExpandirAsesoram.style.boxShadow = "none";
    btnExpandirAsesoram.style.height = "100px";
}
function abrirSeccionAsesoramiento()
{
    expandirForm();
    deshabilitarBtn();
}
function actualizarStorageTrue()
{
    sessionStorage.setItem('asesoramPiletasClicked', true);
    abrirSeccionAsesoramiento();
}
function checkStorage(formDisplayed)
{
    if(formDisplayed===null) //(if btnExpandirAsesoram. nunca clickeado) -> creación status default: "false".
        sessionStorage.setItem('asesoramPiletasClicked', false);
    else
    {
        if(formDisplayed=="true") //Si ya fue clickeado, mantener el formulario abierto.
            abrirSeccionAsesoramiento();
    }
}

window.onload = () => checkStorage(sessionStorage.getItem("asesoramPiletasClicked"));
let btnExpandirAsesoram = document.querySelector(".solicitarAsesoram button");
btnExpandirAsesoram.addEventListener("click",actualizarStorageTrue);