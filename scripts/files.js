

var document;

function myFunction(){
    var x = document.getElementById("myFile");
    var txt = "";
    if ('files' in x) {
        if (x.files.length == 0) {
            txt = "Select one or more files.";
        } else {
            for (var i = 0; i < x.files.length; i++) {
                txt += "<br><strong>" + (i+1) + ". file</strong><br>";
                var file = x.files[i];
                if ('name' in file) {
                    txt += "name: " + file.name + "<br>";
                }
                if ('size' in file) {
                    txt += "size: " + file.size + " bytes <br>";
                }
            }
        }
    } 
    else {
        if (x.value == "") {
            txt += "Select one or more files.";
        } else {
            txt += "The files property is not supported by your browser!";
            txt  += "<br>The path of the selected file: " + x.value; // If the browser does not support the files property, it will return the path of the selected file instead. 
        }
    }
    document.getElementById("demo").innerHTML = txt;
}

$(document).ready(function () {
    var file = new File([blob], 'd2.txt');
    var file = new File([blob], 'd3.txt');
    var newArray = [];
    d3.txt("d3.txt", function(error, data) {// with header..
        data.forEach(function(d) {
                newArray.push(d);
        });

        });

        d3.txt("d2.txt", function(error, data2) {// without header..
            data2.forEach(function(d2) {
                    newArray.push(d2);
            });
        });
        console.log(newArray);
    });

$(document).ready(function () {
    var newArray = [];
    d3.txt("d3.txt", function(error, data) {// with header..
        data.forEach(function(d) {
                newArray.push(d);
        });

        });

        d3.txt("d2.txt", function(error, data2) {// without header..
            data2.forEach(function(d2) {
                    newArray.push(d2);
            });
            });            
            
    var AddData = [];
      $.each(GetStudent, function (i, item) {
          AddData.push({ Category: "Category", StudentCode: item.StudentCode, StudentAddress: item.StudentAddress, StudentGrade: item.StudentGrade, StudentName: item.StudentName, EmployeesCount: 65 });
      });
        console.log(newArray);
    });

function writeFile(){
    function WriteToFile() {
        try {
            var fso, s;
            fso = new ActiveXObject("Scripting.FileSystemObject");
            s = fso.CreateFolder("C:\\test.txt", true);
            s.writeline("This is a test");
            s.Close();
        }
        catch(err){
        var strErr = 'Error:';
        strErr += '\nNumber:' + err.number;
        strErr += '\nDescription:' + err.description;
        document.write(strErr);
        }
    }
}