
function random80() {
return Math.floor(Math.random() * 80);
}

for (var i = 0; i < random80(); i++) {
  var divgen = document.createElement("div");
  divgen.setAttribute("class", "mur");
  var element = document.getElementById("murs");
  element.appendChild(divgen);
var murcss = divgen.style;
h = divgen.offsetLeft,
v = divgen.offsetTop;
h = Math.floor(Math.floor(Math.random()*16)*40);
v = Math.floor(Math.floor(Math.random()*16)*40);
murcss.left = String(h) + 'px';
murcss.top = String(v) + 'px';
}
var colliMur = document.querySelectorAll(".mur");


var pion = document.getElementById('pion'),
  stylePion = pion.style,
  x = pion.offsetLeft,
  y = pion.offsetTop;
document.onkeydown = function(event){
  var event = event || window.event,
  keyCode = event.keyCode;
  switch(keyCode){
    case 38:
      y = y - 40;
      for (var i = 0; i < colliMur.length; i++) {
        var murGauche = colliMur[i].offsetLeft;
        var murHaut = colliMur[i].offsetTop;
        if (x < murGauche + 40 &&
         x + 40 > murGauche &&
        y < murHaut + 40 &&
         40 + y > murHaut) {
        y = y + 40;
      }
      }
      if (y < 0) {
        y = 0;
      }
      break;
    case 39:
      x = x + 40;
      for (var i = 0; i < colliMur.length; i++) {
        var murGauche = colliMur[i].offsetLeft;
        var murHaut = colliMur[i].offsetTop;
        if (x < murGauche + 40 &&
         x + 40 > murGauche &&
        y < murHaut + 40 &&
         40 + y > murHaut) {
        x = x - 40;
      }
      }
      if (x > 640) {
      x = 640;
      }
      break;
    case 40:
      y = y + 40;

      for (var i = 0; i < colliMur.length; i++) {
        var murGauche = colliMur[i].offsetLeft;
        var murHaut = colliMur[i].offsetTop;
        if (x < murGauche + 40 &&
         x + 40 > murGauche &&
        y < murHaut + 40 &&
         40 + y > murHaut) {
        y = y -40;
      }
      }
      if (y > 640) {
        y = 640;
      }
      break;
    case 37:
      x = x - 40;
      for (var i = 0; i < colliMur.length; i++) {
        var murGauche = colliMur[i].offsetLeft;
        var murHaut = colliMur[i].offsetTop;
        if (x < murGauche + 40 &&
         x + 40 > murGauche &&
        y < murHaut + 40 &&
         40 + y > murHaut) {
        x = x + 40;
      }
      }
      if (x < 0) {
        x = 0;
      }
      break;
}

  stylePion.left = String(x) + 'px';
  stylePion.top = String(y) + 'px';
}
