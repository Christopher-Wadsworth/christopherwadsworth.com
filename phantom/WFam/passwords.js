const envelope = document.querySelector(".envelope-wrapper");

envelope.addEventListener("mousedown", () => {
    envelope.classList.toggle("flap");
});


const people = {
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


function defaultLetter(name) {
    return `
        <strong>Congratulations ${name}!</strong>
        <p></p>

        <p>You have been chosen to take part in the WFam Taskmaster event this Thanksgiving!!!!</p>

        <p>This will be an event like none other seen before with the WFam. A gameshow of brains, brawns, and sheer WFam Talent!!!</p>

        <p>For your reference, here is an episode of the gameshow this event is based on 
        <a href="https://www.youtube.com/watch?v=DpV3rweizNA" target="_blank">
        <i>Season 4 Ep 1</i></a></p>

        <p>This event will be extraordinary and eventful with an eternity of hard work being put into it. But fear not, before the event there are just 4 things we need from you:</p>

        <p>1. With the other WFam members in your household, create a 30 second clip that will be played in reverse on the day of the event. The coolest 30 second clip will win the task. One person in your team (household) should share this video with Christopher before we meet in Chicago.</p>

        <p>2. Bring with you to the event an item that you believe best describes the WFam. You will present this item at the start of the event and will be judged by Grace on who brought the best item that fits that description.</p>

        <p>3. Send Christopher a photo of yourself that you would like to be your podium image. This photo should be funny while also instilling fear into your opponents.</p>

        <p>4. Bring your A game and leave the chances of defeat at home.</p>

        <p>If there are any questions, do not hesitate to message me with them.</p>

        <strong>On behalf of your almighty Taskmaster - Best of luck,</strong>

        <p></p>

        <strong>Your somewhat useful assistant, Christofer</strong>

        <p></p>
        <p></p>

        <strong>Approved by <i>Taskmaster Grace</i></strong>
    `;
}


/*
    ONLY put people here if they need a different letter.

    Example:

    "grace1": `
        <strong>Congratulations Grace!</strong>
        <p>This is Grace's special letter.</p>
    `
*/

const customLetters = {

     "luke1": `
        <strong>Congratulations Luke!</strong>
        <p></p>
        <p>You have been chosen to take part in the WFam Taskmaster event this Thanksgiving!!!!</p>
        <p>This will be an event like none other seen before with the WFam. A gameshow of brains, brawns, and sheer WFam Talent!!!</p>
        <p>For your reference, here is an episode of the gameshow this event is based on 
        <a href="https://www.youtube.com/watch?v=DpV3rweizNA" target="_blank">
        <i>Season 4 Ep 1</i></a></p>
        <p>This event will be extraordinary and eventful with an eternity of hard work being put into it. But fear not, before the event there are just 5 things we need from you:</p>
        <p>1. With the other WFam members in your household, create a 30 second clip that will be played in reverse on the day of the event. The coolest 30 second clip will win the task. One person in your team (household) should share this video with Christopher before we meet in Chicago.</p>
        <p>2. Bring with you to the event an item that you believe best describes the WFam. You will present this item at the start of the event and will be judged by Grace on who brought the best item that fits that description.</p>
        <p>3. Send Christopher a photo of yourself that you would like to be your podium image. This photo should be funny while also instilling fear into your opponents.</p>
        <p>4. Bring your A game and leave the chances of defeat at home.</p>
        <p>5. Record a 10 minute video of yourself. The person who records the most red colored vehicles wins. You must begin at your front door.</p>
        <p>If there are any questions, do not hesitate to message me with them.</p>

        <strong>On behalf of your almighty Taskmaster - Best of luck,</strong>

        <p></p>

        <strong>Your somewhat useful assistant, Christofer</strong>

        <p></p>
        <p></p>

        <strong>Approved by <i>Taskmaster Grace</i></strong>     `,

    // "christopher1": `
    //     <strong>Congratulations Christopher!</strong>
    //     <p>Christopher's completely different letter goes here.</p>
    // `
};


function checkPassword() {

    // Makes the password case-insensitive
    const password = document.getElementById("password").value.toLowerCase();

    const error = document.getElementById("error");

    if (people[password]) {

        const name = people[password];

        // Use a custom letter if one exists.
        // Otherwise use the default letter.
        const letter = customLetters[password] || defaultLetter(name);

        document.getElementById("letter-text").innerHTML = letter;

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
