var myCanvas = document.getElementById('canvas');
var context = myCanvas.getContext('2d');
myCanvas.width = myCanvas.scrollWidth;
myCanvas.height = myCanvas.scrollHeight;


//GELAS PERTAMA

context.fillStyle = 'grey';
context.fillRect(100, 180, 150, 210);
context.strokeStyle = "#000000";
context.strokeRect(100, 180, 150, 210);

context.fillStyle = 'red';
context.fillRect(100, 149, 150, 32);
context.strokeStyle = "#000000";
context.strokeRect(100, 149, 150, 32);

context.fillStyle = 'black';
context.fillRect(163, 124, 25, 24);
context.strokeStyle = "#000000";
context.strokeRect(163, 125, 25, 24);



// GAMBAR KETIGA

context.fillStyle = 'gray';
context.fillRect(860, 180, 150, 210);
context.strokeStyle = "#000000";
context.strokeRect(860, 180, 150, 210);

context.fillStyle = 'red';
context.fillRect(1010, 30, 32, 150);
context.strokeStyle = "#000000";
context.strokeRect(1010, 30, 32, 150);

context.fillStyle = 'black';
context.fillRect(1042, 90, 25, 24);
context.strokeStyle = "#000000";
context.strokeRect(1042, 90, 25, 24);



// GAMBAR KEDUA

context.fillStyle = 'grey';
context.fillRect(476, 180, 150, 210);
context.strokeStyle = "#000000";
context.strokeRect(476, 180, 150, 210);

context.fillStyle = 'red';
context.rotate(Math.PI / 4);
context.fillRect(420, -348, 150, 32);
context.strokeStyle = "#000000";
context.strokeRect(420, -348, 150, 32);

context.fillStyle = 'black';
context.rotate(Math.PI / 2);
context.fillRect(-374, -512, 25, 24);
context.strokeStyle = "#000000";
context.strokeRect(-374, -512, 25, 24);