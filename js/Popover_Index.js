$(document).ready(function () {
  //creation
  var toggle = `
      <a
        tabindex="0"
        data-toggle="popover"
        data-placement="top"
      ></a>`;

  //insertion
  $("#popoverContainer").append(toggle);

  //modification
  $('[data-toggle="popover"]')
    .popover({
      html: true,
      content: `
        <div class="media">
          <img src="images/icons/pointer.svg" alt="Ícono de mouse puntero">
        </div>`,
      container: "#popoverContainer",
    })
    .popover("show");
});

// removes the popover once click on the accordion
const accordion = document.getElementById("accordion");
window.addEventListener("click", checkVisibility);
function checkVisibility() {
  $(function () {
    $('[data-toggle="popover"]').popover("hide");
  });
  window.removeEventListener("click", checkVisibility);
}
