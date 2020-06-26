var bombe = document.getElementById("bombe");
var plateau = document.getElementById("plateau");
var pion = document.getElementById('pion'),
  stylePion = pion.style,
  x = pion.offsetLeft,
  y = pion.offsetTop;
function random80() {
  return Math.floor(Math.random() * 80);
}

function dropDaBomb(x, y) {
  var bombegen = document.createElement("div");
      bombegen.setAttribute("id", "bombe");
      plateau.appendChild(bombegen);
      bstyle = bombegen.style;
      bstyle.display = "block";
      bstyle.top = y + "px";
      bstyle.left = x + "px";
      setTimeout(boom, 3000);
}
function boom() {
  bstyle.display = "none";

}


for (var i = 0; i < random80() + 20; i++) {
  var divgen = document.createElement("div");
  divgen.setAttribute("class", "mur");
  var element = document.getElementById("murs");
  element.appendChild(divgen);
  var murcss = divgen.style,
    h = divgen.offsetLeft,
    v = divgen.offsetTop;
  h = Math.floor(Math.floor(Math.random() * 16) * 40);
  v = Math.floor(Math.floor(Math.random() * 16) * 40);
  murcss.left = String(h) + 'px';
  murcss.top = String(v) + 'px';
}
var colliMur = document.querySelectorAll(".mur");

document.onkeydown = function(event) {
  let keyCode = event.keyCode;
  switch (keyCode) {
    case 38:
      y -= 40;
      break;
    case 39:
      x += 40;
      break;
    case 40:
      y += 40;
      break;
    case 37:
      x -= 40;
      break;
    case 32:
    dropDaBomb(x , y);
      break;
    default:
      return;
  }

  if (y < 0) y = 0;
  if (x < 0) x = 0;
  if (y > 640) y = 640;
  if (x > 640) x = 640;

  for (var i = 0; i < colliMur.length; i++) {
    if (x == colliMur[i].offsetLeft && y == colliMur[i].offsetTop) {
      if (keyCode == 38) {
        y += 40;
      } else if (keyCode == 39) {
        x -= 40;
      } else if (keyCode == 40) {
        y -= 40;
      } else if (keyCode == 37) {
        x += 40;
      }
        }
      }


  stylePion.left = String(x) + 'px';
  stylePion.top = String(y) + 'px';
}
