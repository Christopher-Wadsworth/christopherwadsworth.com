const envelope = document.querySelector(".envelope-wrapper");
const heart = document.querySelector(".heart");

heart.addEventListener("click", () => {
    envelope.classList.toggle("flap");
});


function checkPassword() {
    const password = document.getElementById("password").value;
    const name = document.getElementById("person-name");
    const error = document.getElementById("error");

    const people = {
        "Chris72": "Chris",
        "Sarah84": "Sarah",
        "Alex31": "Alex"
    };

    if (people[password]) {
        name.textContent = people[password];

        document.getElementById("password-screen").style.display = "none";
        document.getElementById("main-content").style.display = "grid";
    } else {
        error.textContent = "Incorrect code.";
    }
}


document.getElementById("password").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkPassword();
    }
});
