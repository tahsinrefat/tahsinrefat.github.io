
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBaxuGrmsI7a9Ghuh_V02_qekEjEN9Uk_k",
    authDomain: "eshoppercomment7.firebaseapp.com",
    databaseURL: "https://eshoppercomment7.firebaseio.com",
    projectId: "eshoppercomment7",
    storageBucket: "eshoppercomment7.appspot.com",
    messagingSenderId: "242022257035",
    appId: "1:242022257035:web:d8d214e39814dfaa9a5f8e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.database();
fetchFromDb();
var comment_form = document.querySelector('#comment-form');
 
function func_comment()
{
    var name = comment_form['comment-name'].value;
    var email = comment_form['comment-email'].value;
    var msg = comment_form['comment-message'].value;
    doComment(name, email, msg);
    pushToDb(name, email, msg);
    comment_form.reset();
}
 
function doComment(name, email, msg)
{
    var param = document.createElement("P");
    param.appendChild(document.createTextNode(msg));
    var xx = document.createElement("LI");
    //console.log(xx);
    //console.log(param);
    xx.appendChild(param);
    var icont = document.createElement("I");
    icont.className = "fa fa-user";
    var linkt = document.createElement("A");
    linkt.href = "#";
    linkt.appendChild(icont);
    linkt.appendChild(document.createTextNode(name));
    var l1 = document.createElement("LI");
    l1.appendChild(linkt);
    document.querySelector('#comment-list').appendChild(l1);
    document.querySelector('#comment-list').appendChild(xx);
    var l2 = document.createElement("BR");
    document.querySelector('#comment-list').appendChild(l2);
}
 
function pushToDb(name, email, comment)
{
    db.ref('comments').push({
        name: name,
        email: email,
        comment: comment,
    })
}
 
function fetchFromDb()
{
    db.ref('comments').once('value',   function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            var name = childData['name'];
            var email = childData['email'];
            var comment = childData['comment'];
            doComment(name, email, comment);
        });
    });
}