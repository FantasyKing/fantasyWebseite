// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCHRDs0EEMZ8eurpxDIY7Hkoe9oepdRl1s",
    authDomain: "fantasy-king-df030.firebaseapp.com",
    databaseURL: "https://fantasy-king-df030.firebaseio.com",
    projectId: "fantasy-king-df030",
    storageBucket: "fantasy-king-df030.appspot.com",
    messagingSenderId: "285013087632",
    appId: "1:285013087632:web:930ba954b1300042"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const textmail = document.getElementById('mail');
const passwortInput = document.getElementById('password');

var buttonLogin = document.getElementById('login');
var buttonSignin = document.getElementById('signin');
var buttonLogout = document.getElementById('logout');


 buttonLogin.addEventListener('click', e => {

    const email = textmail.value;
    const pass = passwortInput.value;
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email, pass);

    promise.catch(e => console.log(e.massage));
});

buttonSignin.addEventListener('click', e => {

    const email = textmail.value;
    const pass = passwortInput.value;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, pass);

    promise.catch(e => console.log(e.massage));

});


buttonLogout.addEventListener('click', e => {
    alert('click');
    firebase.auth().signOut().then(function() {
        window.location = 'index.html';
        console.log('loggout')
    }).catch(function(error) {
        // An error happened.
    });
});


firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
        console.log(firebaseUser);
        buttonLogout.classList.remove('hide');
        //window.location = 'pages/dashboard.html';

    }else{
        console.log('no logged in');
        buttonLogout.classList.add('hide');
        document.createElement()
    }
});