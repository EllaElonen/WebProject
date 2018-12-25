var pw1;
var pw2;

$(document).ready(function() {
	pw1 = document.getElementById('pw1').value;
	pw2 = document.getElementById('pw2').value;
});

function match_passwords(){
    if (pw1 == pw2)
        return true; 
    return false;
}

function print_alert(){
    if (match_passwords()){
        alert('Passwords matched.');
    } else {
        alert('Passwords didn´t match.');
    }
}

function validate_number_input(){
    if (isNan(pw1)){
        return true; 
        }
    else{
    alert('number input'); 
    return false;      
    }
}

function isFilled{
    if pw1!=null;
    return true;
}

function validate_form{
    if pw1!=null{
        return true
    }
    else{
        return false
    }
}