function callvalue() {
    // Get values from form fields
    var username = document.getElementById("username").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var appointmentdate = document.getElementById("date").value.trim();
    var appointmenttime = document.getElementById("time").value.trim();
    var genderElement = document.querySelector('input[name="gender"]:checked');
    var dentaldepartment = document.getElementById("department").value.trim();
    var address = document.getElementById("address").value.trim();


    var gender = genderElement ? genderElement.value : "";

   
    if (!username || !email || !phone || !appointmentdate || !appointmenttime || !gender || !dentaldepartment || !address) {
        alert("Please fill all the fields.");
        return;
    }

    // Insert values into table
    var tableBody = document.querySelector(".display tbody");
    var newRow = tableBody.insertRow();

    newRow.insertCell(0).innerText = username;
    newRow.insertCell(1).innerText = email;
    newRow.insertCell(2).innerText = phone;
    newRow.insertCell(3).innerText = appointmentdate;
    newRow.insertCell(4).innerText = appointmenttime;
    newRow.insertCell(5).innerText = gender;
    newRow.insertCell(6).innerText = dentaldepartment;
    newRow.insertCell(7).innerText = address;

    // Reset form fields
    document.getElementById("username").value = '';
    document.getElementById("email").value = '';
    document.getElementById("phone").value = '';
    document.getElementById("date").value = '';
    document.getElementById("time").value = '';
    document.querySelectorAll('input[name="gender"]').forEach(radio => radio.checked = false);
    document.getElementById("department").value = '';
    document.getElementById("address").value = '';
}
