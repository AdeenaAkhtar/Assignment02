var modal = document.getElementById("myModal");
var img1 = document.getElementById("Img1");
var img2 = document.getElementById("Img2");
var img3 = document.getElementById("Img3");
var img4 = document.getElementById("Img4");
var img5 = document.getElementById("Img5");
var img6 = document.getElementById("Img6");
var img7 = document.getElementById("Img7");
var img8 = document.getElementById("Img8");
var img9 = document.getElementById("Img9");
var img10 = document.getElementById("Img10");
var modalImg = document.getElementById("img");
function display(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

img1.addEventListener("click" , display);
img2.addEventListener("click" , display);
img3.addEventListener("click" , display);
img4.addEventListener("click" , display);
img5.addEventListener("click" , display);
img6.addEventListener("click" , display);
img7.addEventListener("click" , display);
img8.addEventListener("click" , display);
img9.addEventListener("click" , display);
img10.addEventListener("click" , display);

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}
