function login() {
    var loginEmail = document.getElementById("loginEmail").value;
    var loginPassword = document.getElementById("loginPassword").value;


    var user = JSON.parse(localStorage.getItem(loginEmail));

    if (user && user.password === loginPassword) {
        document.getElementById("userName").textContent = user.name;
        document.getElementById("userEmail").textContent = user.email;
        document.getElementById("userPhoto").src = user.photo;
        document.getElementById("userInfo").style.display = "block";

        localStorage.setItem("userProfileImage", user.photo);

        window.location.href = "../../index.html";
    } else {
        alert("Email ou senha incorretos.");
    }
}
