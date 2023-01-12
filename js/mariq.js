var modal = document.getElementById("artModal");

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

var digital = document.getElementById("digitalDisplay");
var doodle = document.getElementById("doodleDisplay");
var inky = document.getElementById("inkyDisplay");

window.onclick = function(event) {
  if (event.target === modal || event.target != (digital || doodle || inky)) {
    // modal.style.display = "none";
    closeModal();
  }
}

window.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
})

// Thumbnail image controls
// Opens the modal
function art(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("myartModal");

  var captionText = document.getElementById("captionDigital");
  document.getElementById("captionTraditional");

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// document.addEventListener(
//   'click',
//   function(event) {
//     // If user either clicks X button OR clicks outside the modal window, then close modal by calling closeModal()
//     if (
//       event.target.matches(".close") ||
//       !event.target.closest(".modal")
//     ) {
//       closeModal()
//     }
//   },
//   false
// )

// var slideIndex = 1;
// showSlides(slideIndex);

// // // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }