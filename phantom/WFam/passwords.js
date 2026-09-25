const people = {
    "Chris72": "Chris",
    "Sarah84": "Sarah",
    "Alex31": "Alex",
    "Jordan55": "Jordan"
};

function checkPassword() {
    const password = document.getElementById("password").value;
    const name = document.getElementById("person-name");
    const error = document.getElementById("error");

    if (people[password]) {
        name.textContent = people[password];

        document.getElementById("password-screen").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    } else {
        error.textContent = "Incorrect code.";
    }
}
