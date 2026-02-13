function checkPassword() {
    var correctPassword = "password";
    var enteredPassword = document.getElementById("password").value;

    if (enteredPassword === correctPassword) {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
        document.body.classList.add("love-bg");
        startHearts();
        startFallingLoop();
    } else {
        alert("Access denied.");
    }
}

function showMessage() {
    alert("You’re my always. ❤️");
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
    }, 300);
}

function startFallingLoop() {
    setInterval(function() {
        animateText();
    }, 6000);

    animateText();
}

function animateText() {
    var text = "Happy Valentines Day";
    var container = document.getElementById("fallingText");

    if (!container) return;   // Prevent crash

    container.innerHTML = "";

    text.split("").forEach(function(letter, index) {
        var span = document.createElement("span");
        span.className = "letter";
        span.style.animationDelay = index * 0.1 + "s";
        span.textContent = letter === " " ? "\u00A0" : letter;
        container.appendChild(span);

        setTimeout(function() {
            span.textContent = "❤";
        }, 1200 + index * 100);
    });
}
