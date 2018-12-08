
function print_welcome_message(){
	var welcome = "hello";
    var name = reader;
    
    document.write('<p>');
    document.write(firstName + " " + lastName);
    document.write('</p>');
}

function welcome(){
    var name = prompt("What´s your name?", "!");
    var age = prompt("How old are you?", "!");

    document.write('<p> Welcome, ' + name + '</p>');
}

function print_array(){
    var items = ["item1", "item2"];
    var input = prompt("What do you want to add to the array of items?");

    items.push(input); //Adds item to the beginning. Unshift adds to the beginning.
    /*document.write('<p>items contains:</p>');
    for (var i in items){
        document.write(items[i]);
    }*/
    document.getElementById("arr").innerHTML = items;
}

//not used
function print_2D_array(){
    var ar = [[3, 2, 1], [5, 1, 6], [1, 6, 0], [4, 7, 8], [4, 15, 2]];
 
    for (var i in ar) {
       document.write("row " + i); 
       for (var j in ar[i]){
          document.write(" " + ar[i][j] + " ");
         }
    }
} 

 function print_message(){
     var mess = "Hello, this is a String.";
     document.getElementById("message").innerHTML = mess;
     var node = document.createTextNode(" This is also a String, appended to the previous one.");
     message.appendChild(node);
    }
	
function print_date(){
	var d = new Date();
	document.getElementById("date").innerHTML = d;
}
    
function print_number(){
	var num = 444444444444444;
	document.getElementById("number").innerHTML = num;
}

function print_boolean(){
    var boo = true;
    document.getElementById("boolean").innerHTML = boo;
}

function print_math(){
    var p = Math.PI;
    document.getElementById("math").innerHTML = p;
}

function print_reg(){
    var str = "This is my Webproject!!!";
    var RegEx = /WebProject/i;
    var sub = RegEx.exec(str);
    document.getElementById("reg").innerHTML = "RegExp: " + RegEx.toString() + " " + "Search result found in the text 'This is my Webproject!!!': "  + sub;
}


function print_global(){
    var inf = 1 / 0;
    var n = "string";
    document.getElementById("glob").innerHTML = "Result of calculation: " + inf + "<br>" + "Type of variable: " + typeof(nan) + "<br>" +
    "Is variable NaN?: " + isNaN(inf) + "<br>" + "Is the string 'string' a NaN?: " + isNaN(n);
}

