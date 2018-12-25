    $(document).ready(function(){
    $(".change").click(function(){
        $("img.sunset").attr("width", "500");
    });
    
    $(".revert").click(function(){
        $("img.sunset").attr("width", "290");
    });
    
    $(".swap").click(function(){
        $("#sunset").attr('src', 'images/WhiteFlower.png')
    });
});

/*function saveImage(){
    document.getElementById("downloader").download = "image.png";
    document.getElementById("downloader").href = document.getElementById("myCanvas").toDataURL("image/png").replace(/^data:image\/[^;]/, 'data:application/octet-stream');
}*/
    
function drawBezier(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(20, 20);
    ctx.bezierCurveTo(20, 100, 200, 100, 200, 20);
    ctx.stroke();
}

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
    var myCanvas = document.getElementById("myCanvas");     
    var context = myCanvas.getContext("2d");
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
function saveImage(){
    var download = document.getElementById("download");
    var image = document.getElementById("myCanvas").toDataURL("image/png")
    .replace("image/png", "image/octet-stream");
    download.setAttribute("href", image);                         
}  