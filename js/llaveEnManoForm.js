/*************************************** */
// Activate form


function expandirForm() {
  let divAsesoram = document.querySelector(".solicitarAsesoram section");
  let formContacto = document.createElement("div");
  formContacto.setAttribute(
    "class",
    "col-10 col-xs-10 col-sm-10 col-lg-6 col-xl-6"
  );
  formContacto.innerHTML = `
    <form class="mb-4" action="https://formsubmit.co/mjconstruciones.arg@gmail.com" method="POST">

        <!--Título del email que recibe MJ-->
        <input value="Asesoramiento llave en mano" class="form-control d-none" name="_subject" id="email_title" rows="1" >

        <!--Zona-->
        <div class="form-group">
            <label for="zona">Ubicación de la obra: </label>
            <textarea class="form-control" name="zona" id="zona" rows="1" required></textarea>
        </div>

        <!--Descripción libre-->
        <div class="form-group">
            <label for="descripcionLibre">Información adicional que desee indicar: </label>
            <textarea class="form-control" name="descripción" id="descripcionLibre" placeholder="Por ejemplo:&#10;-mts² aproximados.&#10;-Material deseado.&#10;-Otro." rows="4" required></textarea>
        </div>
        <!--Email-->
        <div class="form-group">
            <label for="email">Direccion de correo electrónico:</label>
            <input type="email" class="form-control" name="email" id="email" required>
        </div>

        <!--Teléfono-->
        <div class="form-group">
            <label for="telefono">Teléfono:</label>
            <input class="form-control" name="telefono" id="telefono" required>
        </div>

        <button type="submit" class="btn btn-primary mt-3 mb-5 w-50">Enviar</button>
    </form>`;
  divAsesoram.append(formContacto);

  let agrandarFuente = () => {
    let formContent = document.querySelectorAll(
      ".solicitarAsesoram .form-group"
    );
    for (let i = 0; i < formContent.length; i++)
      formContent[i].style.fontSize = "larger";
  };
  agrandarFuente();
}
function deshabilitarBtn() {
  btnExpandirAsesoram.setAttribute("disabled", "");
  btnExpandirAsesoram.setAttribute("class", "btn btn-outline-primary");
  btnExpandirAsesoram.style.boxShadow = "none";
  btnExpandirAsesoram.style.height = "100px";
  btnExpandirAsesoram.removeEventListener("click", actualizarStorageTrue);
}
function abrirSeccionAsesoramiento() {
  expandirForm();
  deshabilitarBtn();
}
function actualizarStorageTrue() {
  sessionStorage.setItem("asesoramLlaveClicked", true);
  abrirSeccionAsesoramiento();
}



/*************************************** */
// Button "Solicitar asesoramiento" clicked

let btnExpandirAsesoram = document.querySelector(".solicitarAsesoram button");
btnExpandirAsesoram.addEventListener("click", actualizarStorageTrue);


/***************************************** */
// Window on load local storage verification

function checkStorage(formDisplayed) {
  if (formDisplayed === null)
    // if btnExpandirAsesoram. was never clicked -> set localSt. variable asesoramLlaveClicked to "false".
    sessionStorage.setItem("asesoramLlaveClicked", false);
  else {
    if (formDisplayed == "true")
      abrirSeccionAsesoramiento();
  }
}
window.onload = () =>
 checkStorage(sessionStorage.getItem("asesoramLlaveClicked"));





