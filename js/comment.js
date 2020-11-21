  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBQmEve4m15TMpTGZbxJxryCWxK3a4YpQs",
    authDomain: "eshoppercomment1.firebaseapp.com",
    databaseURL: "https://eshoppercomment1.firebaseio.com",
    projectId: "eshoppercomment1",
    storageBucket: "eshoppercomment1.appspot.com",
    messagingSenderId: "147206113287",
    appId: "1:147206113287:web:710f2659fde21445edc2a2"
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