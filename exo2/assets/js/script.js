var c = document.getElementById('moncanvas');
var ctx = c.getContext('2d');
// MAISON
ctx.beginPath();      // Début du chemin
ctx.fillStyle = '#A1D8E6';
ctx.rect(50,50,200,200);
ctx.fill();
ctx.closePath();      // Fermeture du chemin

//TOIT
ctx.beginPath();      // Début du chemin
ctx.fillStyle = '#D7823E';
ctx.moveTo(50,50);
ctx.lineTo(150,5);
ctx.lineTo(250,50);
ctx.fill();
ctx.closePath();      // Fermeture du chemin

// FENETRES
ctx.beginPath();      // Début du chemin
ctx.fillStyle = '#C9C9C9';
ctx.rect(60,60,40,40); //fenetre gauche
ctx.rect(200,60,40,40); // fenetre DROITE
ctx.rect(125,180,60,70); // porte
ctx.fill();
ctx.closePath();      // Fermeture du chemin
