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

// black square rectangle
ctxB.beginPath();
ctxB.fillStyle = 'black';
ctxB.fillRect(90, 65, 75, 220);

//red light
ctxB.beginPath();
ctxB.arc(127, 110, 20, 0, 2*Math.PI, false);
ctxB.fillStyle = 'red';
ctxB.fill();
ctxB.lineWidth = 5;
ctxB.strokeStyle = 'red';
ctxB.stroke();

//yellow light
ctxB.beginPath();
ctxB.arc(127, 170, 20, 0, 2*Math.PI, false);
ctxB.fillStyle = 'yellow';
ctxB.fill();
ctxB.lineWidth = 5;
ctxB.strokeStyle = 'yellow';
ctxB.stroke();

//green light
ctxB.beginPath();
ctxB.arc(127, 230, 20, 0, 2*Math.PI, false);
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
