// Erstelle den Canvas  

window.onload = function draw() { 
    let canvas =  document.getElementById("canvas");
    let context = canvas.getContext('2d');
    let x = 520;
    let y = 110;      

    context.fillStyle = "#B19CD9";
    context.fillRect(0, 0, 210, 210);
    context.fillStyle = "#49396E";
    context.fillRect(210, 0, 130, 130);
    context.fillStyle = "#190F3E";
    context.fillRect(260, 130, 80, 80);
    context.fillStyle = "#190F3E";
    context.fillRect(210, 130, 30, 30);
    context.fillStyle = "#7C69A2";
    context.fillRect(210, 160, 50, 50);
    context.fillStyle = "#B19CD9";
    context.fillRect(240, 130, 20, 20);
    context.fillStyle = "#49396E";
    context.fillRect(240, 150, 10, 10);
    context.fillStyle = "white";
    context.fillRect(250, 150, 10, 10); 

    context.beginPath();
    context.lineWidth = 2;
    context.moveTo(420, 0);
    context.lineTo(420, 210);
    context.lineTo(630, 210);
    context.lineTo(630, 0);
    context.lineTo(420, 0);
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();

    context.beginPath();
    context.lineWidth = 2;
    context.moveTo(630, 0);
    context.lineTo(630, 130);
    context.lineTo(760, 130);
    context.lineTo(760, 0);
    context.lineTo(630, 0);
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();

    context.beginPath();
    context.lineWidth = 2;
    context.moveTo(630, 130);
    context.lineTo(630, 160);
    context.lineTo(660, 160);
    context.lineTo(660, 130);
    context.lineTo(630, 130);
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();

    context.beginPath();
    context.lineWidth = 2;
    context.moveTo(660, 130);
    context.lineTo(660, 150);
    context.lineTo(680, 150);
    context.lineTo(680, 130);
    context.lineTo(660, 130);
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();

    context.beginPath();
    context.lineWidth = 2;
    context.moveTo(660, 150);
    context.lineTo(660, 160);
    context.lineTo(670, 160);
    context.lineTo(670, 150);
    context.lineTo(660, 150);
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();

    context.beginPath();
    context.lineWidth = 2;
    context.moveTo(630, 160);
    context.lineTo(630, 210);
    context.lineTo(680, 210);
    context.lineTo(680, 160);
    context.lineTo(630, 160);
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();

    context.beginPath();
    context.lineWidth = 2;
    context.moveTo(680, 130);
    context.lineTo(680, 210);
    context.lineTo(760, 210);
    context.lineTo(760, 130);
    context.lineTo(680, 130);
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();

    //fill in the lines that aren't linewith = 4 yet
    context.beginPath();
    context.lineWidth = 4;
    context.moveTo(420, 0);
    context.lineTo(760, 0);
    context.lineTo(760, 210);
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();


    context.fillStyle = "black";
    context.lineWidth = 5;
    context.strokeStyle = "#4488aa";
    context.fillText("21", x, y);

    context.fillStyle = "black";
    context.lineWidth = 5;
    context.strokeStyle = "#4488aa";
    context.fillText("5", (x+130), (y+80));

    context.fillStyle = "black";
    context.lineWidth = 5;
    context.strokeStyle = "#4488aa";
    context.fillText("8", (x+195), (y+70));

    context.fillStyle = "black";
    context.lineWidth = 5;
    context.strokeStyle = "#4488aa";
    context.fillText("13", (x+175), (y-35));

    context.fillStyle = "black";
    context.lineWidth = 5;
    context.strokeStyle = "#4488aa";
    context.fillText("3", (x+120), (y+40));

    context.fillStyle = "black";
    context.lineWidth = 5;
    context.strokeStyle = "#4488aa";
    context.fillText("2", (x+147), (y+33));

    context.fillStyle = "black";
    context.lineWidth = 2;
    context.strokeStyle = "#4488aa";
    context.fillText("1", (x+143), (y+49));

    context.fillStyle = "black";
    context.lineWidth = 2;
    context.strokeStyle = "#4488aa";
    context.fillText("1", (x+153), (y+49)); 
}