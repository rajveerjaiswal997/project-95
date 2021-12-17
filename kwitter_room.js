// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBV9y7JN2th3MfKB2PBI1mLEUdJPIWljO8",
  authDomain: "project2-93.firebaseapp.com",
  projectId: "project2-93",
  storageBucket: "project2-93.appspot.com",
  messagingSenderId: "8044428900",
  appId: "1:8044428900:web:83a64e7827e12ead612971"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
      user_name=localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML="welcome " + user_name+"!";

      function addroom(){
            room_name = document.getElementById("room_name").value;
            firebase.database().ref("/").child(room_name).update({
                  purpose:"adding room name"
            });
            localStorage.setItem("room_name",room_name);
            window.location="kwitter_page.html";
      }
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}