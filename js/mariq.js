var modal = document.getElementById('artModal');

function openModal() {
  document.getElementById('artModal').style.display = "block";
}

function closeModal() {
  document.getElementById('artModal').style.display = "none";
}

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
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

window.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    modal.style.display = 'none'
  }
})

// window.onclick = function(event) {
// if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

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