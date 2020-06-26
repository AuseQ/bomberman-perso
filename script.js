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

// //mob1
// var mobgen = document.createElement("div");
//     mobgen.setAttribute("class", "mob1");
//     plateau.appendChild(mobgen);
// var mobcss = mobgen.style,
//     mx1 = mobgen.offsetLeft,
//     my1 = mobgen.offsetTop;
//     mx1 = Math.floor(Math.floor(Math.random() * 16) * 40);
//     my1 = Math.floor(Math.floor(Math.random() * 16) * 40);
//     mobcss.left = String(mx1) + 'px';
//     mobcss.top = String(my1) + 'px';
//
// //mob2
// var mobgen2 = document.createElement("div");
//     mobgen2.setAttribute("class", "mob2");
//     plateau.appendChild(mobgen2);
// var mobcss2 = mobgen2.style,
//     mx2 = Math.floor(Math.floor(Math.random() * 16) * 40);
//     my2 = Math.floor(Math.floor(Math.random() * 16) * 40);
//     mobcss2.left = String(mx2) + 'px';
//     mobcss2.top = String(my2) + 'px';
//
// //mob3
// var mobgen3 = document.createElement("div");
//     mobgen3.setAttribute("class", "mob3");
//     plateau.appendChild(mobgen3);
// var mobcss3 = mobgen3.style,
//     mx3 = Math.floor(Math.floor(Math.random() * 16) * 40);
//     my3 = Math.floor(Math.floor(Math.random() * 16) * 40);
//     mobcss3.left = String(mx3) + 'px';
//     mobcss3.top = String(my3) + 'px';
//
// //mob4
// var mobgen4 = document.createElement("div");
//     mobgen4.setAttribute("class", "mob4");
//     plateau.appendChild(mobgen4);
// var mobcss4 = mobgen4.style,
//     mx4 = Math.floor(Math.floor(Math.random() * 16) * 40);
//     my4 = Math.floor(Math.floor(Math.random() * 16) * 40);
//     mobcss4.left = String(mx4) + 'px';
//     mobcss4.top = String(my4) + 'px';

//mob5
var mobgen5 = document.createElement("div");
    mobgen5.setAttribute("class", "mob5");
    plateau.appendChild(mobgen5);
var mobcss5 = mobgen5.style,
    mx5 = Math.floor(Math.floor(Math.random() * 16) * 40);
    my5 = Math.floor(Math.floor(Math.random() * 16) * 40);
    mobcss5.left = String(mx5) + 'px';
    mobcss5.top = String(my5) + 'px';

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

// //move aleatoire mob 1
// function mob1Mov(){
// if (rng1 == 1) {
//   mobcss.left = String(mx1 -= 40) + 'px';
// }
// if (rng1 == 2){
//   mobcss.left = String(mx1 += 40) + 'px';
// }
// if (rng1 == 3){
//   mobcss.top = String(my1 -= 40) + 'px';
// }
// if (rng1 == 4){
//   mobcss.top = String(my1 += 40) + 'px';
// }
// }
// //move aleatoire mob 2
// function mob2Mov(){
// if (rng2 == 1) {
//   mobcss2.left = String(mx2 -= 40) + 'px';
// }
// if (rng2 == 2){
//   mobcss2.left = String(mx2 += 40) + 'px';
// }
// if (rng2 == 3){
//   mobcss2.top = String(my2 -= 40) + 'px';
// }
// if (rng2 == 4){
//   mobcss2.top = String(my2 += 40) + 'px';
// }
// }
// //move aleatoire mob 3
// function mob3Mov(){
// if (rng3 == 1) {
//   mobcss3.left = String(mx3 -= 40) + 'px';
// }
// if (rng3 == 2){
//   mobcss3.left = String(mx3 += 40) + 'px';
// }
// if (rng3 == 3){
//   mobcss3.top = String(my3 -= 40) + 'px';
// }
// if (rng3 == 4){
//   mobcss3.top = String(my3 += 40) + 'px';
// }
// }
// //move aleatoire mob 4
// function mob4Mov(){
// if (rng4 == 1) {
//   mobcss4.left = String(mx4 -= 40) + 'px';
// }
// if (rng4 == 2){
//   mobcss4.left = String(mx4 += 40) + 'px';
// }
// if (rng4 == 3){
//   mobcss4.top = String(my4 -= 40) + 'px';
// }
// if (rng4 == 4){
//   mobcss4.top = String(my4 += 40) + 'px';
// }
// }
//move aleatoire mob 5
function mob5Mov(){
if (rng5 == 1) {
  mobcss5.left = String(mx5 -= 40) + 'px';
}
if (rng5 == 2){
  mobcss5.left = String(mx5 += 40) + 'px';
}
if (rng5 == 3){
  mobcss5.top = String(my5 -= 40) + 'px';
}
if (rng5 == 4){
  mobcss5.top = String(my5 += 40) + 'px';
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
}
//mouvements
document.onkeydown = function(event) {
  let keyCode = event.keyCode;
  switch (keyCode) {
    case 38:
      y -= 40;
      random3();
      // mob1Mov();
      // mob2Mov();
      // mob3Mov();
      // mob4Mov();
      mob5Mov();
      break;
    case 39:
      x += 40;
      random3();
      // mob1Mov();
      // mob2Mov();
      // mob3Mov();
      // mob4Mov();
      mob5Mov();
      break;
    case 40:
      y += 40;
      random3();
      // mob1Mov();
      // mob2Mov();
      // mob3Mov();
      // mob4Mov();
      mob5Mov();
      break;
    case 37:
      x -= 40;
      random3();
      // mob1Mov();
      // mob2Mov();
      // mob3Mov();
      // mob4Mov();
      mob5Mov();
      break;
    case 32:
    dropDaBomb(x , y);
    random3();
    // mob1Mov();
    // mob2Mov();
    // mob3Mov();
    // mob4Mov();
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
// //mobArea1
// if (my1 < 40) my1 = 40;
// if (mx1 < 40) mx1 = 40;
// if (my1 > 600) my1 = 600;
// if (mx1 > 600) mx1 = 600;
// //mobArea2
// if (my2 < 40) my2 = 40;
// if (mx2 < 40) mx2 = 40;
// if (my2 > 600) my2 = 600;
// if (mx2 > 600) mx2 = 600;
// //mobArea3
// if (my3 < 40) my3 = 40;
// if (mx3 < 40) mx3 = 40;
// if (my3 > 600) my3 = 600;
// if (mx3 > 600) mx3 = 600;
// //mobArea4
// if (my4 < 40) my4 = 40;
// if (mx4 < 40) mx4 = 40;
// if (my4 > 600) my4 = 600;
// if (mx4 > 600) mx4 = 600;
//mobArea5
if (my5 < 40) my5 = 40;
if (mx5 < 40) mx5 = 40;
if (my5 > 600) my5 = 600;
if (mx5 > 600) mx5 = 600;

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

//collisionsMob2

//collisionsMob3

//collisionsMob4


  stylePion.left = String(x) + 'px';
  stylePion.top = String(y) + 'px';
}
