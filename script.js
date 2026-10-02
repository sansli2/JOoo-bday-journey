/* =====================================================
   DAY 3 MEMORY SYSTEM
===================================================== */

let currentMemory = "";

let recoveredPieces = {
    A: false,
    R: false,
    S: false,
    U: false
};


/* =====================================================
   START DAY 3
===================================================== */

function startDay3() {
    const day3 = document.getElementById("day3");
    const archive = document.getElementById("archive");

    if (day3) {
        day3.classList.add("hidden");
        day3.style.display = "none";
    }

    if (archive) {
        archive.classList.remove("hidden");
        archive.style.display = "block";
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =====================================================
   OPEN MEMORY
===================================================== */

function openMemory(letter) {
    currentMemory = letter;

    const modal = document.getElementById("memoryModal");
    const file = document.getElementById("memoryFile");
    const title = document.getElementById("memoryTitle");
    const content = document.getElementById("memoryContent");

    if (!modal || !file || !title || !content) return;

    /* A */
    if (letter === "A") {
        file.innerText = "FILE 001 — THE BEGINNING";
        title.innerText = "THE ORIGIN STORY";
        content.innerHTML = `
            <p>Grade 11.</p>
            <p>Grade 12.</p>
            <p>A university entrance exam.</p>
            <p>One dorm room.</p>
            <br>
            <p>And one girl who slept like a baby.</p>
            <br>
            <p>Somehow, somewhere between those memories, the friendship became something more.</p>
            <br>
            <p>Put the story in order:</p>
            <p><strong>Grade 11 → Grade 12 → Dorm → University</strong></p>
        `;
    }

    /* R */
    if (letter === "R") {
        file.innerText = "FILE 002 — SNACK INCIDENT";
        title.innerText = "THE RAINY SAMBUSA FILE";
        content.innerHTML = `
            <p>MISSION: Find the legendary quoqor biscuit.</p>
            <br>
            <p>LOCATION: Unisa.</p>
            <br>
            <p>CONFIDENCE: Extremely high.</p>
            <br>
            <p>ACTUAL RESULT: Absolutely nothing.</p>
            <br>
            <p>After getting off the bus somewhere in the middle of nowhere, the mission continued.</p>
            <br>
            <p>And eventually...</p>
            <p><strong>SAMBUSA.</strong></p>
            <br>
            <p>It wasn't quoqor. But it worked.</p>
            <p>And yes... it was a rainy night.</p>
        `;
    }

    /* S */
    if (letter === "S") {
        file.innerText = "FILE 003 — IDENTITY CASE";
        title.innerText = "THE MYSTERY OF JO";
        content.innerHTML = `
            <p>There were almost eight Arsemas in freshman year.</p>
            <br>
            <p>One Arsema had to be identified.</p>
            <br>
            <p>So her name was shortened.</p>
            <br>
            <p>The clue?</p>
            <p>It came from shortening her father's name.</p>
            <br>
            <p>And eventually...</p>
            <p><strong>JO.</strong></p>
            <br>
            <p>Case closed.</p>
        `;
    }

    /* U */
    if (letter === "U") {
        file.innerText = "FILE 004 — SUBJECT: JO";
        title.innerText = "HER WORLD";
        content.innerHTML = `
            <p>She loves food.</p>
            <p>She wants to travel.</p>
            <p>She loves lilies.</p>
            <p>She loves dark green.</p>
            <p>She likes vintage things.</p>
            <p>And maybe one day she'll become the person who somehow makes every event come together.</p>
            <br>
            <p>But this file isn't really about the things she likes.</p>
            <br>
            <p>It's about <strong>her.</strong></p>
            <br>
            <p>The most beautiful girl inside and out.</p>
            <p>And someone I love very much.</p>
        `;
    }

    modal.classList.remove("hidden");
    modal.style.display = "flex";
}


/* =====================================================
   CLOSE MEMORY
===================================================== */

function closeMemory() {
    const modal = document.getElementById("memoryModal");
    if (modal) {
        modal.classList.add("hidden");
        modal.style.display = "none";
    }
}


/* =====================================================
   RECOVER PIECE
===================================================== */

function solveMemory() {
    recoveredPieces[currentMemory] = true;
    closeMemory();
    checkRecoveredPieces();
}


/* =====================================================
   CHECK A R S U
===================================================== */

function checkRecoveredPieces() {
    if (
        recoveredPieces.A === true &&
        recoveredPieces.R === true &&
        recoveredPieces.S === true &&
        recoveredPieces.U === true
    ) {
        setTimeout(function() {
            const archive = document.getElementById("archive");
            const arsuReveal = document.getElementById("arsuReveal");

            if (archive) {
                archive.classList.add("hidden");
                archive.style.display = "none";
            }

            if (arsuReveal) {
                arsuReveal.classList.remove("hidden");
                arsuReveal.style.display = "flex";
            }

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }, 600);
    }
}


/* =====================================================
   OPEN PASSPORT
===================================================== */

function openPassport() {
    const arsuReveal = document.getElementById("arsuReveal");
    const passportSection = document.getElementById("passportSection");

    if (arsuReveal) {
        arsuReveal.classList.add("hidden");
        arsuReveal.style.display = "none";
    }

    if (passportSection) {
        passportSection.classList.remove("hidden");
        passportSection.style.display = "flex";
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =====================================================
   FINISH DAY 3
===================================================== */

function finishDay3() {
    const passportSection = document.getElementById("passportSection");
    const day3End = document.getElementById("day3End");

    if (passportSection) {
        passportSection.classList.add("hidden");
        passportSection.style.display = "none";
    }

    if (day3End) {
        day3End.classList.remove("hidden");
        day3End.style.display = "flex";
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
