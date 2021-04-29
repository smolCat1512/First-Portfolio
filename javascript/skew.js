// Setup content constant, this takes in class constant which in
// html is a div wrapped around the whole body
const content = document.querySelector(".content");
let currentPixel = window.pageYOffset

//looper keeps running and keeps track of where the new pixel is
const looper = function () {
  const newPixel = window.pageYOffset;
  const diff = newPixel - currentPixel
  const speed = diff * 0.15;
  
  content.style.transform = "skewY(" + speed + "deg)"
  
  currentPixel = newPixel;
  
  requestAnimationFrame(looper)
}

looper();