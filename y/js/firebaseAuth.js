
function buttonLogin() {
    const textmail = document.getElementById('inputEmail');
    const passwortInput = document.getElementById('inputPassword');

    var email = textmail.value.toString();
    var password = passwortInput.value.toString();

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;


        console.log(errorMessage);
        console.log(errorCode);
        alert(errorMessage);

    });
}

function buttonSignin (){

    const email = textmail.value;
    const pass = passwortInput.value;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, pass);

    promise.catch(e => console.log(e.massage));
}
