const firebaseConfig = {
    apiKey: "AIzaSyBMuTtu9Hms2CJ_cDIdqb5COJa-1ZHGRVw",
    authDomain: "kwitter-ad151.firebaseapp.com",
    databaseURL: "https://kwitter-ad151-default-rtdb.firebaseio.com",
    projectId: "kwitter-ad151",
    storageBucket: "kwitter-ad151.appspot.com",
    messagingSenderId: "816332521381",
    appId: "1:816332521381:web:19fb52340098e5859f324c"
  };
  
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name =localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome "+ user_name+"!";

function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
    });

    localStorage.setItem("room_name",room_name);
    window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
    document.getElementById("output").innerHTML+= row;
    //End code
    });});}
getData();


function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location = "kwitter_page.html";
}

function logout()
{
     localStorage.removeItem("user_name");
     localStorage.removeItem("room_name");
     window.location = "index.html";

}