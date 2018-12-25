
$(document).ready(function(){
    $(".hideButton").click(function(){
        $(".tab").hide();
        $(".tabcontent").hide();
    });
});

$(document).ready(function(){
    $(".showButton").click(function(){
        $(".tab").show();
    });
});

//show HTML tab
$(document).ready(function(){
    $("#HTMLButton").click(function(){
        $(".tabcontent").hide();
        $("#HTML").show();
    });
});

//show CSS tab
$(document).ready(function(){
    $("#CSSButton").click(function(){
        $(".tabcontent").hide();
        $("#CSS").show();
    });
});

//show JavaScript tab
$(document).ready(function(){
    $("#JavaScriptButton").click(function(){
        $(".tabcontent").hide();
        $("#JavaScript").show();
    });
});



$(document).ready(function(){
    $("p").on("click", function(){
        $(this).css("background-color", "pink");
    });
    $("button").click(function(){
        $("p").off("click");
    });
});


//Tooltip
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});



