
//Tooltip
$(document).ready(function(){
    //$('[data-toggle="tooltip"]').tooltip();   
    $("#menu li").hover(
        function(){
            $(".dropdown-menu", this).slideDown(100);
        },
        function(){
            $(".dropdown-menu", this).stop().slideUp(100);
        }
    );
});