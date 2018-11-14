
function print_cookie_monster(){
    var firstName = 'Cookie';
    var lastName = 'monster';
    
    document.write('<p>');
    document.write(firstName + " " + lastName);
    document.write('</p>');
}

function welcome(){
    var name = prompt("What´s your name?", "!");
    var age = prompt("How old are you?", "!");

    document.write('<p> Welcome, ' + name + '</p>');
}


function collect_items(){
    var items = [];
    var input = prompt("What do you want to add to the array of items?")

    items.unshift('input') //Adds item to the beginning. Push adds to the end.
    document.write('<p>items contains: ' + items + ' '  + + items[items.length-1] + ' ' + input + '</p>');
}

function print_numbers(){
    
}

function print2DArray(){
    var ar = [[3, 2, 1], [5, 1, 6], [1, 6, 0], [4, 7, 8], [4, 15, 2, 8]];
 
    for (var i in ar) 
    {
       document.write("row " + i); //console.log 
       for (var j in ar[i]) 
         {
          document.write(" " + a[i][j]);
         }
    }
}

