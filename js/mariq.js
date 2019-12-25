
var modal = document.getElementById('artModal');
function openModal() {
  document.getElementById('artModal').style.display = "block";
}

function closeModal() {
  document.getElementById('artModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// // Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function art(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("myartModal");

  var captionText = document.getElementById("captionDigital");
  document.getElementById("captionTraditional");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
      }
    }
