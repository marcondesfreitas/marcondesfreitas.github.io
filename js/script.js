document.addEventListener("DOMContentLoaded", function () {
    var userProfileImage = localStorage.getItem("userProfileImage");
    var user = JSON.parse(localStorage.getItem("user"));
    var userInfo = document.getElementById("userInfo");
    var liLogin = document.getElementById("li_login");
    var userProfileImageElement = document.getElementById("userProfileImage");
    var userGreetingElement = document.getElementById("userGreeting");
    var logoutButton = document.getElementById("logoutButton");

    if (userProfileImage) {
        userProfileImageElement.src = userProfileImage;
        logoutButton.style.display = "block";
        liLogin.style.display = "none";

    }else{
        liLogin.style.display = "block";
        logoutButton.style.display = "none";

    }

});

function logout() {
    localStorage.removeItem("userProfileImage");
    localStorage.removeItem("user");
    location.reload()
}
