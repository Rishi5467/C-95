
var firebaseConfig = { apiKey: "AIzaSyDjfSbvZiSrZa081bob2cH37xAMsNgZG1M", authDomain: "kkllll-d426b.firebaseapp.com", databaseURL:
"https://kkllll-d426b-default-rtdb.firebaseio.com",
projectId: "kkllll-d426b", storageBucket: "kkllll-d426b.appspot.com", messagingSenderId: "34370890543", appId: "1:34370890543:web:113d79176af08dbd258fda", measurementId: "G-ZCV9EEQD3V" };


    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
    function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });

      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html"
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room_name-"+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";

      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log("name");
      localStorage.setItem("room_name", name);
      windowlocation="kwitter_page.html";
}
function logout(){

}