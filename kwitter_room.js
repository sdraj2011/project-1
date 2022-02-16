
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBy9qrxC6n9iA2BM3h9YKUTuzKW05o6ODA",
      authDomain: "kwitter-54f48.firebaseapp.com",
      databaseURL: "https://kwitter-54f48-default-rtdb.firebaseio.com",
      projectId: "kwitter-54f48",
      storageBucket: "kwitter-54f48.appspot.com",
      messagingSenderId: "559995481959",
      appId: "1:559995481959:web:d75fd494bdf672dcc8c9c2"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+user_name+"!";
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name-"+Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";

}
function addRoom() {
 room_name=document.getElementById("room_name").value;
 firebase.database().ref("/").child(room_name).update({
purpose:"adding room name"
 });
 localStorage.setItem("room_name",room_name);
 window.location="kwitter_page.html";

}