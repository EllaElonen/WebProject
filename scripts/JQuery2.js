
$(document).ready(function() {
	$('h1').hide().slideDown(3000);
	$('.corner-image').hide().slideDown(3000);
});

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function lavender() {
    document.querySelector("body").style.backgroundColor = "lavender";
    }

function lavenderblush() {
    document.querySelector("body").style.backgroundColor = "lavenderblush";
    }






