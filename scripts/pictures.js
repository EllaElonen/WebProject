$(document).ready(function(){
    $(".change").click(function(){
        $("img.sunset").attr("width", "500");
    });
    
     $(".revert").click(function(){
        $("img.sunset").attr("width", "290");
    });

$("myCanvas").click(function() {
    $(this).animate({
        "margin-left": 200
    }, 2000, $.bez([0.685, 0.595, 0.020, 0.720]));
    
     var bezier_params = {
        start: {
            x: 185,
            y: 185,
            angle: 10
        },
        end: {
            x:540,
            y:110,
            angle: -10,
            length: 0.25
        }
    };

    $("my_elem").animate({path : new $.path.bezier(bezier_params)});
    });
});

function drawLine(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.moveTo(0,0);
    ctx.lineTo(200,100);
    ctx.stroke();
}

function drawText(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.font = "30px Arial";
    ctx.fillText("Hello World",10,50);
    }

function drawGradient(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    // Create gradient
    var grd = ctx.createLinearGradient(0, 0, 200, 0);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "white");

    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(10, 10, 150, 80); 
}

//TODO
function drawShadow(){
    var canvas = document.getElementById('myCanvas');
    context = canvas.getContext('2d');
    width = 100,
    height = 80,
    posX = 100,
    posY = 80;

    context.rect(-width, -height, width, height);
    context.shadowColor = 'red';
    context.shadowBlur = 40;
    context.shadowOffsetX = width+posX;
    context.shadowOffsetY = height+posY;
    context.fill();
}

function drawCircle(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(95,50,40,0,2*Math.PI);
    ctx.stroke()
}

//TODO, add opacity
function drawImage(){
    var canvas = document.getElementById("myCanvas");     
    var context = canvas.getContext("2d");
    context.globalAlpha = 0.5;
    var myImage = new Image();
    myImage.src = "Sunset.jpg";
    myImage.onload = function(){
    context.drawImage(myImage, 0, 0, 100, 100);
}

/*}
    var canvas = document.getElementById('myCanvas');

if (canvas.getContext)
    {
        var c           = canvas.getContext('2d');
        c.globalAlpha   = 0;

        var img     = new Image();
        img.onload  = function() {
        c.drawImage(img, 0, 0);
        }
    img.src     = 'Sunset.jpg';*/
}

//TODO
function putImage()
{
  var canvas1 = document.getElementById("canvasSignature");        
  if (canvas1.getContext) {
     var ctx = canvas1.getContext("2d");                
     var myImage = canvas1.toDataURL("images/Magnolia.png");      
  }
  var imageElement = document.getElementById("MyPix");  
  imageElement.src = myImage;                           

}  