// script.js
var modal = document.getElementById("myModal");
var images = document.querySelectorAll(".grid-item img");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

images.forEach((img) => {
  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };
});

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
