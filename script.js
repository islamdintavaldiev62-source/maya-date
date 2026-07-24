const noBtn = document.getElementById("noBtn");

let escapeCount = 0;

const messages = [
    "🥺 Сураныч...",
    "❤️ Дагы ойлончу...",
    "😅 Мени кармай албайсың...",
    "💖 Ооба десеңчи...",
    "🥰 Акыркы жолу сурайм..."
];

noBtn.addEventListener("mouseover", () => {

    if (escapeCount >= 5) {
        noBtn.innerHTML = "❤️ Макул, барам ❤️";
        noBtn.style.position = "static";
        noBtn.style.background = "#28a745";

        noBtn.onclick = () => {
            document.getElementById("yesBtn").click();
        };

        return;
    }

    noBtn.innerHTML = messages[escapeCount];

    escapeCount++;

    const x = Math.random() * (window.innerWidth - 220);
    const y = Math.random() * (window.innerHeight - 100);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});
