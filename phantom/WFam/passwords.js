const envelope = document.querySelector(".envelope-wrapper");
const heart = document.querySelector(".heart");


envelope.addEventListener("mousedown", () => {
    envelope.classList.toggle("flap");
});


function checkPassword() {
    const password = document.getElementById("password").value;
    const name = document.getElementById("person-name");
    const error = document.getElementById("error");

    const people = {
        "Tom1": "Tom",
        "Nancy1": "Nancy",
        "Jon1": "Jon",
        "Anne1": "Anne",
        "Luke1": "Luke",
        "Scott1": "Scott",
        "Sarabeth1": "Sarabeth",
        "Grace1": "Grace",
        "Christopher1": "Christopher",
        "Ellie1": "Ellie",
        "Aaron1": "Aaron",
        "Averie1": "Averie",
        "Kate1": "Kate",
        "Jacoby1": "Jacoby",
        "Megan1": "Megan",
        "Lian1": "Lian",
        "lian1": "lian",
        
        "tom1": "Tom",
        "nancy1": "Nancy",
        "jon1": "Jon",
        "anne1": "Anne",
        "luke1": "Luke",
        "scott1": "Scott",
        "sarabeth1": "Sarabeth",
        "grace1": "Grace",
        "christopher1": "Christopher",
        "ellie1": "Ellie",
        "aaron1": "Aaron",
        "averie1": "Averie",
        "kate1": "Kate",
        "jacoby1": "Jacoby",
        "megan1": "Megan"
        
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
document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        envelope.classList.toggle("flap");
    }
});
