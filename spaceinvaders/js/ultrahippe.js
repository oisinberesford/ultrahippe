function drawUltraHippee(ctx, x, y) {
      drawHead(x,y);
      drawBody(x, y+15);
      drawLegs(x, y+30);
      drawShoes(x, y+50);

  function drawEye(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI*2);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(x, y, 1, 0, Math.PI*2);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
  }

    function drawNose(x,y) {
      ctx.beginPath();
      ctx.arc(x, y, 2, 0, Math.PI*2);
      ctx.fillStyle = "black";
      ctx.fill();
      ctx.closePath();
    }

    function drawHair(x,y) {
      ctx.beginPath();
      ctx.moveTo(x, y-15);
      ctx.lineTo(x, y-25);
      ctx.stroke();
      ctx.closePath();

      ctx.beginPath();
      ctx.moveTo(x-5, y-15);
      ctx.lineTo(x-10, y-23);
      ctx.stroke();
      ctx.closePath();

      ctx.beginPath();
      ctx.moveTo(x+5, y-15);
      ctx.lineTo(x+10, y-23);
      ctx.stroke();
      ctx.closePath();   
    }
    function drawMouth(x,y){
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x+10, y);
      ctx.stroke();
      ctx.closePath();

    }
    function drawHead(x,y) {
      ctx.beginPath();
      ctx.arc(x, y, 15, 0, Math.PI*2);
      ctx.fillStyle = "#ffe0bd";
      ctx.fill();

    
      drawHair(x,y);
      drawEye(x-7,y);
      drawEye(x+7, y);
      drawNose(x, y+3);
      drawMouth(x,y+8)
      ctx.closePath();
    }

    function drawBody(x, y) {
      drawCape(x,y);
      
      // draw chest
      ctx.beginPath();
      ctx.rect(x-10, y, 20, 20);
      ctx.fillStyle = "lightblue";
      ctx.fill();
      ctx.closePath();
      
      drawLeftArm(x,y);
      drawRightArm(x,y);
      drawH(x,y+10);
             
    }

    function drawCape(x,y) {
    ctx.beginPath();  
    var gradient = ctx.createLinearGradient(x-15, 0, 50, y-40);
    gradient.addColorStop(0,"red");
    gradient.addColorStop(1,"white"); 
    ctx.fillStyle = gradient;
    ctx.fillRect(x-25,y-2,50,40)
   // ctx.beginPath();
     // ctx.rect(x-25, y-2, 50, 40);
      //ctx.fillStyle = "red";
      //ctx.fill();
      //ctx.closePath();
          
    }
   
    function drawLeftArm(x,y) {
      ctx.beginPath();
      ctx.rect(x+10,y,10,10);
      ctx.fillStyle = "#lightblue";
      ctx.fill();
      ctx.closePath();
   
      ctx.beginPath();
      ctx.rect(x+10,y+10,10,10);
      ctx.fillStyle = "#ffe0bd";
      ctx.fill();
      ctx.closePath();
    }

    function drawRightArm(x,y) {
      ctx.beginPath();
      ctx.rect(x-20,y,10,10);
      ctx.fillStyle = "lightblue";
      ctx.fill();
      ctx.closePath();
   
      ctx.beginPath();
      ctx.rect(x-20,y+10,10,10);
      ctx.fillStyle = "#ffe0bd";
      ctx.fill();
      ctx.closePath();
    }

    function drawH(x,y){
      ctx.font="bold 10pt Calibri"
      ctx.fillStyle="yellow"      
      ctx.fillText("H",x-4,y)
    }    

    function drawLegs(x,y) {
      ctx.beginPath();
      ctx.rect(x-10, y, 20, 20);
      ctx.fillStyle = "green";
      ctx.fill();
      ctx.closePath();

      ctx.beginPath();
      ctx.moveTo(x,y);
      ctx.lineTo(x, y+20);
      ctx.stroke();
      ctx.closePath();      
    }

    function drawShoes(x, y) {
      // right shoe - with gradient!
      ctx.beginPath();
      var gradient = ctx.createLinearGradient(x-15, 0, x, 0);
      gradient.addColorStop(0,"black");
      gradient.addColorStop(1,"grey");
      ctx.fillStyle = gradient;
      ctx.fillRect(x-15,y,15,5);
      ctx.closePath();

      // left shoe
      ctx.beginPath();
      var gradient = ctx.createLinearGradient(x, 0, x+15, 0);
      gradient.addColorStop(0,"grey");
      gradient.addColorStop(1,"black");
      ctx.fillStyle = gradient;
      ctx.fillRect(x,y,15,5);
      ctx.closePath();
    }

}
    
