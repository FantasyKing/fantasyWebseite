function buttonRegister() {
    const textmail = document.getElementById('inputEmail');
    const passwortInput = document.getElementById('inputPassword');

    var email = textmail.value.toString();
    var password = passwortInput.value.toString();

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    console.log(email, password);

    alert(errorMessage);
    });


}
//TODO: Work on register
