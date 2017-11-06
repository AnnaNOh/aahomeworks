document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("myCanvas");
  canvasEl.width = 500;
  canvasEl.height = 500;

  const ctx = canvasEl.getContext("2d");
  ctx.fillStyle = "yellow";
  ctx.fillRect(0, 0, 500, 500);


// dart board
  ctx.beginPath();
  ctx.arc(200, 200, 50, 0, 2*Math.PI);
  ctx.strokeStyle = "red";
  ctx.lineWidth = 20;
  ctx.stroke();
  ctx.fillStyle = "white";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(200, 200, 40, 0, 2*Math.PI);
  ctx.strokeStyle = "white";
  ctx.lineWidth = 20;
  ctx.stroke();
  ctx.fillStyle = "red";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(200, 200, 30, 0, 2*Math.PI);
  ctx.strokeStyle = "red";
  ctx.lineWidth = 10;
  ctx.stroke();
  ctx.fillStyle = "white";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(200, 200, 20, 0, 2*Math.PI);
  ctx.strokeStyle = "white";
  ctx.lineWidth = 10;
  ctx.stroke();
  ctx.fillStyle = "red";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(200, 200, 10, 0, 2*Math.PI);
  ctx.strokeStyle = "red";
  ctx.lineWidth = 10;
  ctx.stroke();
  ctx.fillStyle = "white";
  ctx.fill();


// smiley face
  ctx.strokeStyle = "orange";
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
  ctx.moveTo(110, 75);
  ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
  ctx.moveTo(65, 65);
  ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
  ctx.moveTo(95, 65);
  ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
  ctx.stroke();


// curvy text box
  ctx.strokeStyle = "white";
  ctx.beginPath();
  ctx.moveTo(375, 325);
  ctx.quadraticCurveTo(325, 325, 325, 362.5);
  ctx.quadraticCurveTo(325, 400, 350, 400);
  ctx.quadraticCurveTo(350, 420, 330, 425);
  ctx.quadraticCurveTo(360, 420, 365, 400);
  ctx.quadraticCurveTo(425, 400, 425, 362.5);
  ctx.quadraticCurveTo(425, 325, 375, 325);
  ctx.stroke();


});
