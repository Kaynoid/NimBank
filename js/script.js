usersBtn = document.getElementById("users");
landingPage = document.getElementById("landingPage");
usersPage = document.getElementById("usersPage");

usersBtn.onclick = ()=>{
    landingPage.style.opacity = "0";
    landingPage.style.visibility = "hidden";
    usersPage.style.visibility = "visible";
    usersPage.style.opacity = "1";
}
