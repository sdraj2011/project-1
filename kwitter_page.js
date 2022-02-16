//YOUR FIREBASE LINKS
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
    room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+name+"<img class"
//End code
      } });  }); }
getData();
function logout() {
       localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
 window.location.replace("kwitter.html");
 }
function send() {
      msg = document.getElementById("msg").value;
       firebase.database().ref(room_name).push({
              name:user_name,
               message:msg,
                like:0 
            });
      document.getElementById("msg").value = "";      
}