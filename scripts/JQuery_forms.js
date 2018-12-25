
/*$(document).ready(function() {
	$('h1').hide().slideDown(3000);
	$('.corner-image').hide().slideDown(3000);
});

$(document).ready(function(){
    $("button").click(function(){
        $("h1, h2, p").addClass("blue");
        $("div").addClass("important");
    });
});

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

//change background to lavender 
$(document).ready(function(){
    $("#lavender").click(function(){
        $("body").css("background-color", "lavender");
    });
});

//change background to lavender 
$(document).ready(function(){
    $("#lavenderblush").click(function(){
        $("body").css("background-color", "lavenderblush");
    });
});

//TODO
$(".double").dblclick(function(){
    alert("The paragraph was double-clicked");
});


$(document).ready(function(){
    $(window).resize(function(){
        $("p").text(x += 1);
    });
});

//TODO
$(document).ready(function(){
    $("button").click(function(){
        $("h1, h2, p").addClass("blue");
        $("div").addClass("important");
    });
});

//TODO
function format_input() {
  var x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}

$(document).ready(function(){
    $("form").submit(function(){
        alert("Submitted");
    });
});

i = 0;
$(document).ready(function(){
    $("input").keypress(function(){
        $("span").text(i += 1);
    });
});

$(document).ready(function(){
    $("p, button, h2").click(function(event){
        $("div").html("Triggered by a " + event.target.nodeName + " element.");
    });
});

$(document).ready(function(){
    $(".disabled").click(function(event){
        event.preventDefault();
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
*/

/*$(document).ready(function () {

    $('#myform').validate({ // initialize the plugin
        rules: {
            field1: {
                required: true,
                alphanumeric
            },
            field2: {
                required: true,
                alphanumeric
            },
            field3{
            email: true,
            required: true,
            minlength: 5
        }
    });*/

   $(document).ready(function(){
    $('#myform').validate({
    rules :{
        "data[username][password]" : {
            required : true
        }
    },
    messages :{
        "data[username][password]" : {
            required : 'Fill the obligatory fields'
        }
    }
    });
});






