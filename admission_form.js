function SavePersonalInfo(event){
    event.preventDefault();

    const genderElement = document.querySelector('input[name = "gender"]:checked');
    const gender = genderElement ? genderElement.value : ""


    const personalData = {
        username : document.getElementById("username").value.trim(),
        email : document.getElementById("email").value.trim(),
        phone : document.getElementById("phone").value.trim(),
        dob : document.getElementById("dob").value.trim(),
        gender : gender,
        category : document.getElementById("category").value,
        nationality : document.getElementById("nationality").value,
        address : document.getElementById("address").value.trim(),
    };

    for( let key in personalData){
        if (!personalData[key]){
            alert("Please fill all the boxes");
            return;
        }
      
    }

 
    localStorage.setItem("personalInfo", JSON.stringify(personalData));
    window.location.href = "next_admission_details.html";

}