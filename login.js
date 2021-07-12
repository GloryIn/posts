function validate() {
    console.log("qwert");
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email === "admin" && password === "admin") {
    window.location.href = "post.html";
    return false;
    } else {
    alert("email or password is wrong");
    window.location.href = "login.html"
    }
    }