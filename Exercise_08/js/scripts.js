// The DO NOT ENTER SIGN
var canvasA = document.getElementById("canvasA");
var ctxA = canvasA.getContext("2d");
var AcenterX = canvasA.width /2;
var AcenterY = canvasA.height/2;
var Aradius = 100;

// draw circle
ctxA.beginPath();
ctxA.arc(AcenterX, AcenterY, Aradius, 0, 2 * Math.PI, false);
ctxA.fillStyle = 'red';
ctxA.fill();
ctxA.lineWidth = 5;
ctxA.strokeStyle = 'red';
ctxA.stroke();

// draw 'do not'
ctxA.fillStyle = 'white';
ctxA.textAlign = 'center';
ctxA.font = 'bold 25px Arial';
ctxA.fillText('DO NOT', 175, 150);
ctxA.stroke();

//draw white horizantal line
ctxA.beginPath();
ctxA.fillStyle = 'white';
ctxA.fillRect(90, 170, 170, 20);

  // draw 'enter'
  ctxA.fillStyle = 'white';
  ctxA.textAlign = 'center';
  ctxA.font = 'bold 25px Arial';
  ctxA.fillText('ENTER', 180, 230);
  ctxA.stroke();



//The Stop Light sign
var canvasB = document.getElementById("canvasB");
var ctxB = canvasB.getContext("2d");

ctxB.save();

// background

//rotating to make diamond
ctxB.translate(canvasB.width / 2, canvasB.height / 2);
ctxB.rotate(Math.PI / 4);
ctxB.translate(-(250 / 2), - (250/ 2));
ctxB.fillStyle = 'gold';
ctxB.fillRect(0, 0, 250, 250);

// creating the rounded black outline
ctxB.beginPath();
ctxB.lineJoin = 'round';
ctxB.moveTo(0, 0);
ctxB.lineTo(0,245);
ctxB.lineTo(245, 245);
ctxB.lineTo(245, 0);
ctxB.lineTo(0, 0);
ctxB.closePath();



ctxB.strokeStyle = 'black';
ctxB.lineWidth = 10;
ctxB.stroke();

ctxB.restore();

// black square rectangle
ctxB.beginPath();
ctxB.fillStyle = 'black';
ctxB.fillRect(138, 75, 74, 200);

//red light
ctxB.beginPath();
ctxB.arc(175, 115, 20, 0, 2*Math.PI, false);
ctxB.fillStyle = 'red';
ctxB.fill();
ctxB.lineWidth = 5;
ctxB.strokeStyle = 'red';
ctxB.stroke();

//yellow light
ctxB.beginPath();
ctxB.arc(175, 175, 20, 0, 2*Math.PI, false);
ctxB.fillStyle = 'yellow';
ctxB.fill();
ctxB.lineWidth = 5;
ctxB.strokeStyle = 'yellow';
ctxB.stroke();

//green light
ctxB.beginPath();
ctxB.arc(175, 235, 20, 0, 2*Math.PI, false);
ctxB.fillStyle = 'green';
ctxB.fill();
ctxB.lineWidth = 5;
ctxB.strokeStyle = 'green';
ctxB.stroke();


/*
ctxA.beginPath();
ctxA.arc(AcenterX, AcenterY, Aradius, 0, 2 * Math.PI, false);
ctxA.fillStyle = 'red';
ctxA.fill();
ctxA.lineWidth = 5;
ctxA.strokeStyle = 'red';
ctxA.stroke();
*/
