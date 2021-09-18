
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAfayNwVIPKO9HpwU25lh79BK6jumdY62k",
      authDomain: "kwitter-175a9.firebaseapp.com",
      databaseURL: "https://kwitter-175a9-default-rtdb.firebaseio.com",
      projectId: "kwitter-175a9",
      storageBucket: "kwitter-175a9.appspot.com",
      messagingSenderId: "743135541323",
      appId: "1:743135541323:web:e9d1ddafcc004033f8f5ce"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
