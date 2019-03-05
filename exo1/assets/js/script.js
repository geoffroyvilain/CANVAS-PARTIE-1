var c = document.getElementById('moncanvas');
// ctx choisi arbitrairement
var ctx = c.getContext('2d');
// MAISON
ctx.beginPath();      // Début du chemin
ctx.moveTo(50,50); // POINT DE DEPART
ctx.lineTo(50,250); // JE TRACE JUSQU A (X,Y)
ctx.lineTo(250,250); //JE TRACE JUSQU A (X,Y)
ctx.lineTo(250,50); // JE TRACE JUSQU A (X,Y)
ctx.lineTo(50,50);
// en 1er : fillStyle - fill - et closePath
ctx.fillStyle = '#A1D8E6'; //indique la couleur
ctx.fill();               // permet de faire fonctionner fillStyle
ctx.closePath();      // Fermeture du chemin, EN RETOURNANT VERS LE POINT DE DEPART

//TOIT
ctx.beginPath();      // Début du chemin
ctx.moveTo(50,50);
ctx.lineTo(150,10);
ctx.lineTo(250,50);
ctx.fillStyle = '#D7823E';
ctx.fill();
ctx.closePath();      // Fermeture du chemin

//FENETRE GAUCHE
ctx.beginPath();      // Début du chemin
ctx.moveTo(60,60);
ctx.lineTo(60,100);
ctx.lineTo(100,100);
ctx.lineTo(100,60);
ctx.fillStyle = '#C9C9C9';
ctx.fill();
ctx.closePath();      // Fermeture du chemin

//FENETRE DROITE
ctx.beginPath();      // Début du chemin
ctx.moveTo(200,60);
ctx.lineTo(240,60);
ctx.lineTo(240,100);
ctx.lineTo(200,100);
ctx.fillStyle = '#C9C9C9';
ctx.fill();
ctx.closePath();      // Fermeture du chemin

//PORTE
ctx.beginPath();      // Début du chemin
ctx.moveTo(120,250);
ctx.lineTo(120,150);
ctx.lineTo(180,150);
ctx.lineTo(180,250);
ctx.fillStyle = '#C9C9C9';
ctx.fill();
ctx.closePath();      // Fermeture du chemin
