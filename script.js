


document.addEventListener("DOMContentLoaded", function () {
    const langCards = document.querySelectorAll(".lang-card");

    langCards.forEach(card => {
        // Add a random tilt effect on load
        let randomTilt = Math.random() * 20 - 10; // Random between -10deg to 10deg
        card.style.transform = `rotate(${randomTilt}deg)`;

        card.addEventListener("mouseover", function () {
            card.style.transform = "rotate(0deg) scale(1.1)";
            card.style.boxShadow = "0px 0px 15px rgba(0, 0, 0, 0.5)";
        });

        card.addEventListener("mouseleave", function () {
            card.style.transform = `rotate(${randomTilt}deg)`;
            card.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.3)";
        });
    });
});

