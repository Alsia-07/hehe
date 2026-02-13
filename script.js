function checkPassword() {
    var correctPassword = "password";
    var enteredPassword = document.getElementById("password").value;

    if (enteredPassword === correctPassword) {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
        document.body.classList.add("love-bg");
        startHearts();
    } else {
        alert("Incorrect password.");
    }
}

function showMessage() {
    alert("I wanna be yours. ❤️");
}

function startHearts() {
    setInterval(function() {
        var heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "❤";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (Math.random() * 15 + 10) + "px";
        document.body.appendChild(heart);

        setTimeout(function() {
            heart.remove();
        }, 5000);
    }, 250);
}
