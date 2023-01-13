var modal = document.getElementById("artModal");

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

modal.addEventListener('click', function() {
  closeModal();
})

modal.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
})

// Thumbnail image controls (opens the modal)
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