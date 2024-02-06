const submitHadular = (e) => {
    e.preventDefault();

    // const firstName = document.getElementsByClassName('first-name');
    // // firstName ==> array
    // console.log(firstName, firstName[0].value);
    const firstName = document.querySelector('.first-name').value;
    debugger


    const lastName = document.getElementById('last-name');
    // Return field
    console.log(lastName, lastName.value);
    debugger
    const caseNumber = document.getElementById('case-number').value;
    const numberHours = document.getElementById('number-hours').value;
    const placementAgency = document.getElementById('placement-agency').value;

    const formData = {
        firstName,
        lastName,
        caseNumber,
        numberHours,
        placementAgency
    }
    console.log("formData", formData);
    debugger
}