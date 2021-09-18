
function login(){
username = document.getElementById("username_input").value;
    localStorage.setItem("user_name", username);
document.getElementById("username_input").value="";
    window.location="kwitter_room.html";


}