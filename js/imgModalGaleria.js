/***************************************/
// open modal

let modal = document.getElementById('modalContainer');
let images = document.getElementsByClassName('modalCarouselImg'); //proyectXcarouselImg
let modalImg = document.getElementById("modal-content");

// Go through all of the images with our custom class
for (let i = 0; i < images.length; i++) {
  let img = images[i];
  // and attach our click listener for this image.
  img.onclick = function(evt) {
    modal.style.display = "flex";
    modalImg.src = this.src;
  }
}

/***************************************/
// close modal
let span = document.getElementById("modalCloseBtn");

span.onclick = function() {
  modal.style.display = "none";
}

/***************************************/