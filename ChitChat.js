function Login() {
    var username = document.getElementById("username").value
    localStorage.setItem("username",username)
    window.location="ChitChatMain.html"
}