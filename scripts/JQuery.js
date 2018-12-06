
$(document).ready(function() {
	$('h1').hide().slideDown(3000);
	$('.corner-image').hide().slideDown(3000);
});

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol to list items that exist at load time
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

    // Until now, we have created <li>{myInput}</li> and added it to the myUL list
    
  // Toggle a "checked" symbol to this list item when clicked
  li.onclick = function() {
      this.classList.toggle('checked');
  }
  
  // Now we have <li onclick="...">{myInput}</li>
  
  // Create close button <span>
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  // Now we have <span class="close">&x00D7;</span>
  span.onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
  }
  // Now we have <span class="close" onclick="...">&x00D7;</span>

  // Put it all together
  li.appendChild(span);
    
  // Now we have <li onclick="...">{myInput}<span class="close" onclick="...">&x00D7;</span></li>
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}








