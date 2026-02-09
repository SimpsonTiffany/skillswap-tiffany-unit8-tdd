document.getElementById("year").textContent = new Date().getFullYear();

const browseBtn = document.getElementById("browseBtn");
if (browseBtn) {
    browseBtn.addEventListener("click", () => {
        alert("Browse Skills is coming in Sprint 1 (Skill Discovery).");
    });
}

const cards = document.querySelectorAll(".card");

function toggleCard(card) {
    const more = card.querySelector(".more");
    if (!more) return;
    more.classList.toggle("hidden");
}

cards.forEach((card) => {
    // Click toggles details
    card.addEventListener("click", () => toggleCard(card));

    // Keyboard accessibility: Enter/Space toggles details
    card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleCard(card);
        }
    });
});
