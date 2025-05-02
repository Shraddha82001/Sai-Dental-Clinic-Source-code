function callvalue() {
    // Get input values and trim whitespace
    var username = document.getElementById("username").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var enquiry = document.getElementById("enquiry").value.trim();
    var message = document.getElementById("message").value.trim();

    // Validate all fields
    if (!username || !email || !phone || !enquiry || !message) {
        alert("Please fill all the fields.");
        return;
    }

    // Get the table body
    var tableBody = document.querySelector(".display tbody");

    // Create a new row and cells
    var newRow = tableBody.insertRow();
    newRow.insertCell(0).innerText = username;
    newRow.insertCell(1).innerText = email;
    newRow.insertCell(2).innerText = phone;
    newRow.insertCell(3).innerText = enquiry;
    newRow.insertCell(4).innerText = message;

    // Clear form fields
    document.getElementById("username").value = '';
    document.getElementById("email").value = '';
    document.getElementById("phone").value = '';
    document.getElementById("enquiry").value = '';
    document.getElementById("message").value = '';
}
