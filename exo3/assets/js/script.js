var c = document.getElementById('moncanvas');
var ctx = c.getContext("2d");
// partie haute
ctx.beginPath();      // Début du chemin
ctx.fillStyle = "#00A551";
ctx.rect(50,50,160,40);
//partie basse
ctx.rect(10,90,240,40);
ctx.closePath();      // Fermeture du chemin
ctx.fill();


// roue Gauche
ctx.beginPath();      // Début du chemin
ctx.fillStyle = "#CDCDCD";
ctx.strokeStyle = "black";
ctx.arc(30,160,30,0,Math.PI*2,true);
ctx.closePath();      // Fermeture du chemin
ctx.fill();
ctx.stroke();


//roue droite
ctx.beginPath();      // Début du chemin
ctx.fillStyle = "#CDCDCD";
ctx.strokeStyle = "black";
ctx.arc(230,160,30,0,Math.PI*2,true);
ctx.closePath();      // Fermeture du chemin
ctx.fill();
ctx.stroke();
