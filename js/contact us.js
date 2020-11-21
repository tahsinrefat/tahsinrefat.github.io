// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBzyqsPExKMxOrINGnm6kmAePGcgOZinE0",
    authDomain: "eshopper-21e1d.firebaseapp.com",
    databaseURL: "https://eshopper-21e1d.firebaseio.com",
    projectId: "eshopper-21e1d",
    storageBucket: "eshopper-21e1d.appspot.com",
    messagingSenderId: "142219034168",
    appId: "1:142219034168:web:a6c3ee782bd464908e70cd"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

var database = firebase.database();

var ref = database.ref('contact-us-data');


document.getElementById("exampleInputMsg1").value = "";
document.getElementById("exampleInputEmail1").value = "";
document.getElementById("exampleInputName1").value = "";
document.getElementById("sub").value = "";

function getUserInputs(){
    var msg = document.getElementById("exampleInputMsg1").value.trim();
    var nam = document.getElementById('exampleInputName1').value.trim();
    var eml = document.getElementById('exampleInputEmail1').value.trim();
    var sub = document.getElementById('exampleInputSubject1').value.trim();
    //Forces the user to fill up the form when submitting
    if(nam == ""){
        alert("Please enter your name.");
        return;
    }
    if(eml == ""){
        alert("Please enter an Email ID where we can contact you later.");
        return;
    }
    if(msg == ""){
        alert("Please type a message if you want to contact us about anything.");
        return;
    }

    //Check if it's a valid email
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(eml))
    {
        
    }else{
        alert("You have entered an invalid email address!")
        return;
    }
    var data = {
        name: nam,
        message: msg,
        email: eml,
        subject: sub,
    }

    ref.push(data);

    alert("Your message has been sent.");
    /*document.getElementById("exampleInputMsg1").value = "";
    document.getElementById("exampleInputEmail1").value = "";
    document.getElementById("exampleInputName1").value = "";*/
}
