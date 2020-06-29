var plateau = document.getElementById("plateau");
var pion = document.getElementById('pion'),
  stylePion = pion.style,
  x = pion.offsetLeft,
  y = pion.offsetTop;
function random80() {
  return Math.floor(Math.random() * 80);
}
//RNG
var rng1;
var rng2;
var rng3;
var rng4;
var rng5;
function random3(){
  rng1 = Math.floor(Math.random() * 4+1);
  rng2 = Math.floor(Math.random() * 4+1);
  rng3 = Math.floor(Math.random() * 4+1);
  rng4 = Math.floor(Math.random() * 4+1);
  rng5 = Math.floor(Math.random() * 4+1);

}

//mob1
var mobgen = document.createElement("div");
    mobgen.setAttribute("class", "mob1");
    plateau.appendChild(mobgen);
var mobcss = mobgen.style,
    mx1 = mobgen.offsetLeft,
    my1 = mobgen.offsetTop;
    mx1 = Math.floor(Math.floor(Math.random() * 16) * 40);
    my1 = Math.floor(Math.floor(Math.random() * 16) * 40);

//mob2
var mobgen2 = document.createElement("div");
    mobgen2.setAttribute("class", "mob2");
    plateau.appendChild(mobgen2);
var mobcss2 = mobgen2.style,
    mx2 = Math.floor(Math.floor(Math.random() * 16) * 40);
    my2 = Math.floor(Math.floor(Math.random() * 16) * 40);

//mob3
var mobgen3 = document.createElement("div");
    mobgen3.setAttribute("class", "mob3");
    plateau.appendChild(mobgen3);
var mobcss3 = mobgen3.style,
    mx3 = Math.floor(Math.floor(Math.random() * 16) * 40);
    my3 = Math.floor(Math.floor(Math.random() * 16) * 40);

//mob4
var mobgen4 = document.createElement("div");
    mobgen4.setAttribute("class", "mob4");
    plateau.appendChild(mobgen4);
var mobcss4 = mobgen4.style,
    mx4 = Math.floor(Math.floor(Math.random() * 16) * 40);
    my4 = Math.floor(Math.floor(Math.random() * 16) * 40);

//mob5
var mobgen5 = document.createElement("div");
    mobgen5.setAttribute("class", "mob5");
    plateau.appendChild(mobgen5);
var mobcss5 = mobgen5.style;
    mx5 = Math.floor(Math.floor(Math.random() * 16) * 40);
    my5 = Math.floor(Math.floor(Math.random() * 16) * 40);

// en travaux
function dropDaBomb(x, y) {
  var bombegen = document.createElement("div");
      bombegen.setAttribute("class", "bombe");
      plateau.appendChild(bombegen);
      bstyle = bombegen.style;
      bstyle.display = "block";
      bstyle.top = y + "px";
      bstyle.left = x + "px";
      setTimeout(boom, 1000);

}
function boom(x,y) {
  bstyle.display = "none";
}
// generationMurs
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

//move aleatoire mob 1
function mob1Mov(){
if (rng1 == 1) {
  // mobcss.left = String(mx1 -= 40) + 'px';
  mx1 -= 40;
}
if (rng1 == 2){
  // mobcss.left = String(mx1 += 40) + 'px';
  mx1 += 40;
}
if (rng1 == 3){
  // mobcss.top = String(my1 -= 40) + 'px';
  my1 -= 40;
}
if (rng1 == 4){
  // mobcss.top = String(my1 += 40) + 'px';
  my1 += 40;
}
}
//move aleatoire mob 2
function mob2Mov(){
if (rng2 == 1) {
  // mobcss2.left = String(mx2 -= 40) + 'px';
  mx2 -= 40;
}
if (rng2 == 2){
  // mobcss2.left = String(mx2 += 40) + 'px';
  mx2 += 40;
}
if (rng2 == 3){
  // mobcss2.top = String(my2 -= 40) + 'px';
  my2 -= 40;
}
if (rng2 == 4){
  // mobcss2.top = String(my2 += 40) + 'px';
  my2 += 40;
}
}
//move aleatoire mob 3
function mob3Mov(){
if (rng3 == 1) {
  // mobcss3.left = String(mx3 -= 40) + 'px';
  mx3 -= 40;
}
if (rng3 == 2){
  // mobcss3.left = String(mx3 += 40) + 'px';
  mx3 += 40;
}
if (rng3 == 3){
  // mobcss3.top = String(my3 -= 40) + 'px';
  my3 -= 40;
}
if (rng3 == 4){
  // mobcss3.top = String(my3 += 40) + 'px';
  my3 += 40;
}
}
//move aleatoire mob 4
function mob4Mov(){
if (rng4 == 1) {
  // mobcss4.left = String(mx4 -= 40) + 'px';
  mx4 -= 40;
}
if (rng4 == 2){
  // mobcss4.left = String(mx4 += 40) + 'px';
  mx4 += 40;
}
if (rng4 == 3){
  // mobcss4.top = String(my4 -= 40) + 'px';
  my4 -= 40;
}
if (rng4 == 4){
  // mobcss4.top = String(my4 += 40) + 'px';
  my4 += 40;
}
}
//move aleatoire mob 5
function mob5Mov(){
if (rng5 == 1) {
  // mobcss5.left = String(mx5 -= 40) + 'px';
  mx5 -= 40;
}
if (rng5 == 2){
  // mobcss5.left = String(mx5 += 40) + 'px';
  mx5 += 40;
}
if (rng5 == 3){
  // mobcss5.top = String(my5 -= 40) + 'px';
  my5 -= 40;
}
if (rng5 == 4){
  // mobcss5.top = String(my5 += 40) + 'px';
  my5 += 40;
}
}
//mouvements
document.onkeydown = function(event) {
  let keyCode = event.keyCode;
  switch (keyCode) {
    case 38:
      y -= 40;
      random3();
      mob1Mov();
      mob2Mov();
      mob3Mov();
      mob4Mov();
      mob5Mov();
      break;
    case 39:
      x += 40;
      random3();
      mob1Mov();
      mob2Mov();
      mob3Mov();
      mob4Mov();
      mob5Mov();
      break;
    case 40:
      y += 40;
      random3();
      mob1Mov();
      mob2Mov();
      mob3Mov();
      mob4Mov();
      mob5Mov();
      break;
    case 37:
      x -= 40;
      random3();
      mob1Mov();
      mob2Mov();
      mob3Mov();
      mob4Mov();
      mob5Mov();
      break;
    case 32:
      dropDaBomb(x , y);
      random3();
      mob1Mov();
      mob2Mov();
      mob3Mov();
      mob4Mov();
      mob5Mov();
      break;
    default:
      return;
  }
//playerArea
  if (y < 0) y = 0;
  if (x < 0) x = 0;
  if (y > 640) y = 640;
  if (x > 640) x = 640;
//mobArea1
if (my1 < 0) my1 = 0;
if (mx1 < 0) mx1 = 0;
if (my1 > 640) my1 = 640;
if (mx1 > 640) mx1 = 640;
//mobArea2
if (my2 < 0) my2 = 0;
if (mx2 < 0) mx2 = 0;
if (my2 > 640) my2 = 640;
if (mx2 > 640) mx2 = 640;
//mobArea3
if (my3 < 0) my3 = 0;
if (mx3 < 0) mx3 = 0;
if (my3 > 640) my3 = 640;
if (mx3 > 640) mx3 = 640;
//mobArea4
if (my4 < 0) my4 = 0;
if (mx4 < 0) mx4 = 0;
if (my4 > 640) my4 = 640;
if (mx4 > 640) mx4 = 640;
//mobArea5
if (my5 < 0) my5 = 0;
if (mx5 < 0) mx5 = 0;
if (my5 > 640) my5 = 640;
if (mx5 > 640) mx5 = 640;

//collisionsPlayer
  for (var i = 0; i < colliMur.length; i++) {
    if (x == colliMur[i].offsetLeft && y == colliMur[i].offsetTop) {
      if (keyCode == 38) {
        my5 += 40;
      } else if (keyCode == 39) {
        mx5 -= 40;
      } else if (keyCode == 40) {
        my5 -= 40;
      } else if (keyCode == 37) {
        mx5 += 40;
      }
        }
      }
//collisionsMob1
for (var i = 0; i < colliMur.length; i++) {
  if (mx1 == colliMur[i].offsetLeft && my1 == colliMur[i].offsetTop) {
    if (rng1 == 3) {
      my1 += 40;
    } else if (rng1 == 2) {
      mx1 -= 40;
    } else if (rng1 == 4) {
      my1 -= 40;
      console.log(colliMur[i].offsetLeft,colliMur[i].offsetTop);
    } else if (rng1 == 1) {
      mx1 += 40;
    }
      }
    }
//collisionsMob2
for (var i = 0; i < colliMur.length; i++) {
  if (mx2 == colliMur[i].offsetLeft && my2 == colliMur[i].offsetTop) {
    if (rng2 == 3) {
      my2 += 40;
    } else if (rng2 == 2) {
      mx2 -= 40;
    } else if (rng2 == 4) {
      my2 -= 40;
      console.log(colliMur[i].offsetLeft,colliMur[i].offsetTop);
    } else if (rng2 == 1) {
      mx2 += 40;
    }
      }
    }
//collisionsMob3
for (var i = 0; i < colliMur.length; i++) {
  if (mx3 == colliMur[i].offsetLeft && my3 == colliMur[i].offsetTop) {
    if (rng3 == 3) {
      my3 += 40;
    } else if (rng3 == 2) {
      mx3 -= 40;
    } else if (rng3 == 4) {
      my3 -= 40;
      console.log(colliMur[i].offsetLeft,colliMur[i].offsetTop);
    } else if (rng3 == 1) {
      mx3 += 40;
    }
      }
    }
//collisionsMob4
for (var i = 0; i < colliMur.length; i++) {
  if (mx4 == colliMur[i].offsetLeft && my4 == colliMur[i].offsetTop) {
    if (rng4 == 3) {
      my4 += 40;
    } else if (rng4 == 2) {
      mx4 -= 40;
    } else if (rng4 == 4) {
      my4 -= 40;
      console.log(colliMur[i].offsetLeft,colliMur[i].offsetTop);
    } else if (rng4 == 1) {
      mx4 += 40;
    }
      }
    }
//collisionsMob5
for (var i = 0; i < colliMur.length; i++) {
  if (mx5 == colliMur[i].offsetLeft && my5 == colliMur[i].offsetTop) {
    if (rng5 == 3) {
      my5 += 40;
    } else if (rng5 == 2) {
      mx5 -= 40;
    } else if (rng5 == 4) {
      my5 -= 40;
      console.log(colliMur[i].offsetLeft,colliMur[i].offsetTop);
    } else if (rng5 == 1) {
      mx5 += 40;
    }
      }
    }

  stylePion.left = String(x) + 'px';
  stylePion.top = String(y) + 'px';
  mobcss.left = String(mx1) + 'px';
  mobcss.top = String(my1) + 'px';
  mobcss2.left = String(mx2) + 'px';
  mobcss2.top = String(my2) + 'px';
  mobcss3.left = String(mx3) + 'px';
  mobcss3.top = String(my3) + 'px';
  mobcss4.left = String(mx4) + 'px';
  mobcss4.top = String(my4) + 'px';
  mobcss5.left = String(mx5) + 'px';
  mobcss5.top = String(my5) + 'px';
}
