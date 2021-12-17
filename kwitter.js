function adduser(){
    user_name=document.getElementById("add_user").value;
    localStorage.setItem( "username ", user_name);
    window.location="kwitter_room.html";
}