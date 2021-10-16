//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyAfayNwVIPKO9HpwU25lh79BK6jumdY62k",
  authDomain: "kwitter-175a9.firebaseapp.com",
  databaseURL: "https://kwitter-175a9-default-rtdb.firebaseio.com",
  projectId: "kwitter-175a9",
  storageBucket: "kwitter-175a9.appspot.com",
  messagingSenderId: "743135541323",
  appId: "1:743135541323:web:7e216fb1c9c46fe3f8f5ce"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

userName = localStorage.getItem("user_name")
document.getElementById("welcomeuser").innerHTML = "Welcome " + userName;

function add_room() {
  roomname = document.getElementById("roomname_input").value;
  localStorage.setItem("room_name", roomname);
  firebase.database().ref("/").child(roomname).update({
    purpose: "adding_roomname"
  });
  window.location = "kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      // Codes in line 28-31 are given by default and dosen't need to be coded
      Room_names = childKey;
      console.log("room names - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });
}
getData();

function redirectToRoomName(name_chosen) {
  console.log("room name chosen" + name_chosen);
  localStorage.setItem("room_name", name_chosen);
  window.location = "kwitter_page.html";
}


function logout() {
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");
  window.location = "index.html"
}