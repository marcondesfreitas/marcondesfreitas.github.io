function register() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var photoInput = document.getElementById("photo");

    document.addEventListener("DOMContentLoaded", function () {
        var userProfileImage = localStorage.getItem("userProfileImage");

        if (userProfileImage !== null && userProfileImage !== undefined) {
            document.getElementById("userProfileImage").src = userProfileImage;
        }
    });

    if (photoInput.files.length > 0) {
        var photoFile = photoInput.files[0];

        var reader = new FileReader();
        reader.onload = function (e) {
            var photoDataUrl = e.target.result;

            var user = {
                name: name,
                email: email,
                password: password,
                photo: photoDataUrl
            };

            localStorage.setItem(email, JSON.stringify(user));

            alert("Cadastro realizado com sucesso!");

            window.location.href = "./login.html";

        };

        reader.readAsDataURL(photoFile);
    } else {
        alert("Selecione uma foto antes de cadastrar.");
    }
}