var username = [];
var email = [];
var phone = [];
var enquiry = [];
var message = [];

var row = 1;

function callvalue(){
    var username=document.getElementById("username").value;
    var email=document.getElementById("email").value;
    var phone=document.getElementById("phone").value;
    var enquiry=document.getElementById("enquiry").value;
    var message=document.getElementById("message").value;

    // Reference to table body
    var callvalue = document.getElementById('display');

    var NewRow = callvalue.insertRow(row);

    var cell1 = NewRow.insertCell(0);
    var cell2 = NewRow.insertCell(1);
    var cell3 = NewRow.insertCell(2);
    var cell4 = NewRow.insertCell(3);
    var cell5 = NewRow.insertCell(4);

    cell1.innerHTML = username;
    cell2.innerHTML = email;
    cell3.innerHTML = phone;
    cell4.innerHTML = enquiry;
    cell5.innerHTML = message;

    row++;
 

    document.getElementById("username").value = '';
    document.getElementById("email").value = '';
    document.getElementById("phone").value = '';
    document.getElementById("enquiry").value = '';
    document.getElementById("message").value = '';
} 