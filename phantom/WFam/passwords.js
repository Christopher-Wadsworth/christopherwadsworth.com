<input type="password" id="password" placeholder="Enter code">
<button onclick="checkPassword()">Enter</button>

<p id="message">Enter the code to continue.</p>

<script>
function checkPassword() {
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (password === "1234") {
        message.textContent = "Welcome! You have access.";
    } else {
        message.textContent = "Incorrect code.";
    }
}
</script>
