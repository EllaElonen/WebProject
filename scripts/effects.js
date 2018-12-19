

$(document).ready(function(){
    $("#hide").click(function(){
        $("p").hide();
    });
    
    $("#show").click(function(){
        $("p").show();
    });
    
    $("#toggle").click(function(){
        $("p").toggle();
    });
    
    $("#fadeout").click(function(){
        $("p").fadeOut()
    });
    
    $("#fadein").click(function(){
        $("p").fadeIn();
    });
    
    $("#fadetoggle").click(function(){
        $("p").fadeToggle(3000);
    });
    
    $("#fadeto").click(function(){
        $("p").fadeTo(1000, 0.4);
    });
    
     $("#stopfade").click(function(){
        $("p").stop();
    });
    
    $("#btn1").click(function(){
        $(".box").animate({width: "1200px"});
    });
        
    $("#btn2").click(function(){
        $(".box").animate({width: "0px"});
    });
    
    $("#btn3").click(function(){
        $(".box").css('animation-timing-function', 'linear');
    });
    
    $(".animatealert").click(function(){
        $("p").hide("slow", function(){
            alert("The paragraph is now hidden");
        });
    });
});

