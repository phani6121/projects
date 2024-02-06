
const submitHadular = (e) => {


    // We can get the any form field value Using "class" or "id" or "name"
    var firstName = document.getElementsByClassName('first_name').value;
    const lastName = document.getElementById("last_name").value;


    let gender;
    var genderRadios = document.getElementsByName('gender');

    genderRadios.forEach(item => {
        if (item.checked) {
            gender = item.value;
        }
    });
    // for (var i = 0; i < genderRadios.length; i++) {
    //     if (genderRadios[i].checked) {
    //         gender = genderRadios[i].value;
    //         break;
    //     }
    // }

    const department = document.getElementById("dept").value;


    let mail = document.getElementById("mail").value;


    mail = mail ? mail : "No";
    if (mail) {
        // 1,true,"srima",'asdfg',[],{} , +ve(1,3,45,45) or -ve(-1,-23,-234)
        mail = mail
    } else {
        // false ,0,'',"",undefind,null
        mail = "No"
    }



    e.preventDefault(); // Prevent the form from submitting (for demonstration purposes)

    // firstName : firstName  = firstName // right
    // firstName : "firstName"  = firstName // Wrong
    const formData = {
        firstName,
        lastName,
        gender,
        department,
        mail
    }
    console.log("formData", formData);
    debugger



}