function maison() {
  var id = document.getElementById("maison");
  var context = id.getContext("2d");
  context.strokeStyle =  "#ffb33c";
  context.lineWidth = 10;
  context.beginPath();
  context.rect(400, 200, 250, 200);
  context.lineTo(300,100);
  context.lineTo(550,100);
  context.lineTo(650,200);
  context.moveTo(300,100);
  context.lineTo(200,200);
  context.lineTo(200,400);
  context.lineTo(400,400);
  context.moveTo(200,200);
  context.lineTo(400, 200);
  context.rect(250, 250, 100, 150);
  context.rect(450, 250, 50, 50);
  context.rect(550, 250, 50, 50);
  context.moveTo(270,320);
  context.arc(265,320, 10,0, 2 * Math.PI);
  context.stroke();
}
function arbre() {
  var id = document.getElementById("maison");
  var context = id.getContext("2d");
  context.strokeStyle =  "#ffb33c";
  context.lineWidth = 10;
  context.beginPath();
  context.rect(75, 280, 50, 120);

  context.strokeStyle = "#884400";
  context.stroke();
}
function feuilles() {
  var id = document.getElementById("maison");
  var context = id.getContext("2d");
  context.strokeStyle =  "#008800";
  context.lineWidth = 10;
  context.beginPath();
  context.moveTo(130, 220);
  context.arc(130, 250, 30, 1.5*Math.PI, 2.5*Math.PI);
  context.moveTo(130, 160);
  context.arc(130, 190, 30, 1.5*Math.PI, 2.5*Math.PI);
  context.moveTo(130, 100);
  context.arc(130, 130, 30, 1.5*Math.PI, 2.5*Math.PI);
  context.moveTo(70,280);
  context.arc(70, 250, 30, 2.5*Math.PI, 1.5*Math.PI);
  context.moveTo(70,220);
  context.arc(70, 190, 30, 2.5*Math.PI, 1.5*Math.PI);
  context.moveTo(70,160);
  context.arc(70, 130, 30, 2.5*Math.PI, 1.5*Math.PI);
  context.moveTo(70, 100);
  context.arc(100, 105, 30, Math.PI, 0);
  context.stroke();
}

maison();
arbre();
feuilles();
