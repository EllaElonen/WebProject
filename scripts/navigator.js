

function getBrowserVersion() {
    var x = "Version info: " + navigator.appVersion;
    document.getElementById("browser").innerHTML = x;
}

function getScreenHeight() {
    var x = "Total Height: " + screen.height + "px";
    document.getElementById("screen").innerHTML = x;
}

function getLocation(){
    document.getElementById("location").innerHTML = 
        "The URL of this page:<br>" + window.location.href;
}

function getScreenLeft(){
    var myWindow = window.open("", "myWindow");
    myWindow.document.write("<p>This is 'myWindow'");
    myWindow.document.write("<br>ScreenLeft: " + myWindow.screenLeft);
    myWindow.document.write("<br>ScreenTop: " + myWindow.screenTop + "</p>");
}

function getWindowXY(){
    var myWindow = window.open("", "myWindow");
    myWindow.document.write("<p>This is 'myWindow'");
    myWindow.document.write("<br>ScreenX: " + myWindow.screenX);
    myWindow.document.write("<br>ScreenY: " + myWindow.screenY + "</p>");
}

function createAlert(){
    alert("This is an alert box!");
}

function createPrompt(){
    prompt("what´s your name?");
}

function createConfirmation(){
    confirm("You have clicked the button.")
}

 var myWindow;

function openWindow() {
    myWin = window.open("", "myWindow", "width=200,height=100");
    myWin.document.write("<p>This is 'myWindow'</p>");
}

function closeWindow() {
    myWin.close();
}

//create alerts at 6 seconds intervals, TODO
/*function setInterval(){ 
    setInterval(function(){ alert("Hello"); }, 6000);
}*/

//set a timer and stop it, TODO
var timer = setInterval(myTimer, 1000);

function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("timer").innerHTML = t;
}

function myStopFunction() {
    clearInterval(timer);
}

//clear alert timeout
var timeout;

function setTime() {
    timeout = setTimeout(function(){ alert("Hello"); }, 6000);
}

function stopTime() {
    clearTimeout(timeout);
}

//get hostname, disabled
function getHostname() {
    if (x != null){
    var x = location.hostname;
    document.getElementById("host").innerHTML= x;
}
    else{
    document.getElementById("host").innerHTML= "undefined";
    }
}

function getCookies() {
     if (cookies != null){
        var cookies = "Cookies enabled: " + navigator.cookieEnabled;
        document.getElementById("cookie").innerHTML = cookies;
        }
        else {
            document.getElementById("cookie").innerHTML = "Cookies enabled: undefined";
        }
    }
