var openButton = document.querySelector("header > button");

console.log(openButton);

openButton.onclick = openMenu;

function openMenu() {  
  var deNav = document.querySelector("nav");
  deNav.classList.toggle("toonMenu");
}

window.onkeydown = handleKeydown;

function handleKeydown(event) {
  if (event.key == "Escape") {
    var deNav = document.querySelector("nav");
    deNav.classList.remove("toonMenu");
  }
}