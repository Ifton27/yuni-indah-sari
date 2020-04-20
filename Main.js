var myCanvas = document.getElementById('canvas');
var ctx = myCanvas.getContext('2d');
myCanvas.width = myCanvas.scrollWidth;
myCanvas.height = myCanvas.scrollHeight;

var panjangPP = 100;
var tinggiPP = 75;

// tutup gelas 1 //
ctx.translate(myCanvas.width / 8, myCanvas.height / 8);
ctx.fillStyle = 'red';
ctx.fillRect(205, 92, 150, 20);


// tutup gelas 2 //
ctx.translate(myCanvas.width / 20, myCanvas.height / 20);
ctx.fillStyle = 'white';
ctx.fillRect(405, 68, 150, 20);



// tutup gelas 3 //
ctx.translate(myCanvas.width / 200, myCanvas.height / 200);
ctx.fillStyle = 'red';
ctx.fillRect(796, -65, 20, 150);

// Gelas //
// 1
ctx.translate(myCanvas.width / 4, myCanvas.height / 4);
ctx.fillStyle = 'grey';
ctx.fillRect(-207, -40, 150, 250);

// 2
ctx.translate(myCanvas.width / 4, myCanvas.height / 4);
ctx.fillStyle = 'grey';
ctx.fillRect(-277, -165, 150, 250);

// 3
ctx.translate(myCanvas.width / 4, myCanvas.height / 4);
ctx.fillStyle = 'grey';
ctx.fillRect(-347, -290, 150, 250);



context.fillStyle = 'red';
context.fillRect(480, 180, 150, 210);
context.lineWidth = 1.5;
context.strokeRect(480, 180, 150, 210);


context.fillStyle = 'red';
context.rotate(Math.PI / 4);
context.fillRect(423, -348, 150, 32);
context.lineWidth = 1;
context.strokeRect(423, -348, 150, 32);

context.fillStyle = "red";
context.rotate(Math.PI / 2);
context.fillRect(-374, -512, 25, 24);
context.lineWidth = 0.8;
context.strokeRect(-374, -512, 25, 24);