function callvalue(event) {
    event.preventDefault(); 

    const admissionDetails = {
    collegename : document.getElementById("collegename").value.trim(),
    universityname : document.getElementById("universityname").value.trim(),
    percentage : document.getElementById("percentage").value.trim(),
    yearofpassing : document.getElementById("yearofpassing").value.trim(),
    subjects : document.getElementById("subjects").value.trim(),
    entrance : document.getElementById("entrance").value.trim(),
};

for (let key in admissionDetails){
    if (!admissionDetails[key]){
        alert("Please fill all the boxes");
        return;
    }
}

const personalData = JSON.parse(localStorage.getItem("personalInfo"));


if(!personalData){
    alert("Personal Data is not available. Please fill it first.");
    return;
}

const fulldata = {
    personalData ,
    admissionDetails
}

const tableBody = document.querySelector(".display tbody");
const newRow = tableBody.insertRow();

newRow.insertCell(0).innerText = fulldata.personalData.username;
newRow.insertCell(1).innerText = fulldata.personalData.email;
newRow.insertCell(2).innerText = fulldata.personalData.phone;
newRow.insertCell(3).innerText = fulldata.personalData.dob;
newRow.insertCell(4).innerText = fulldata.personalData.gender;
newRow.insertCell(5).innerText = fulldata.personalData.category;
newRow.insertCell(6).innerText = fulldata.personalData.nationality;
newRow.insertCell(7).innerText = fulldata.personalData.address;
newRow.insertCell(8).innerText = fulldata.admissionDetails.collegename;
newRow.insertCell(9).innerText = fulldata.admissionDetails.universityname;
newRow.insertCell(10).innerText = fulldata.admissionDetails.percentage;
newRow.insertCell(11).innerText = fulldata.admissionDetails.yearofpassing;
newRow.insertCell(12).innerText = fulldata.admissionDetails.subjects;
newRow.insertCell(13).innerText = fulldata.admissionDetails.entrance;


localStorage.removeItem("personalInfo");
document.querySelector("form").reset();


}