document.getElementById("continue").onclick = () => {

document.body.innerHTML = `

<div class="container">

<h1 class="title">❤️ Майя... ❤️</h1>

<h2>Кел, тагдырга дагы бир мүмкүнчүлүк берели.</h2>

<p class="text">
Эгер жүрөгүңдө мага кичинекей болсо да орун калган болсо...
</p>

<h2>📍 Дүйшөмбү</h2>

<h2>🕘 Саат 21:00</h2>

<h2>📍 Аянт</h2>

<p class="text">
Мен сени күтөм... ❤️
</p>

<div class="buttons">

<button id="musicBtn">
🎵 Биздин ыр
</button>

<button id="yesBtn">
❤️ Ооба, барам
</button>

<button id="noBtn">
🙈 Жок
</button>

</div>

</div>

`;

document.getElementById("musicBtn").onclick = () => {
    window.open("https://youtu.be/JEYZLJz-Oig?si=Hx6vFiEPsfPbrav9", "_blank");
};

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {

const x = Math.random() * (window.innerWidth - 150);
const y = Math.random() * (window.innerHeight - 80);

noBtn.style.position = "absolute";
noBtn.style.left = x + "px";
noBtn.style.top = y + "px";

});

document.getElementById("yesBtn").onclick = () => {

document.body.innerHTML = `

<div class="container">

<h1 class="title">❤️ Рахмат ❤️</h1>

<p class="text">

Сенин жообуң мен үчүн абдан маанилүү.

Сени чыдамсыздык менен күтөм.

🌹❤️

Дүйшөмбү, саат 21:00.

Аянтта жолугушабыз.

</p>

</div>

`;

};

};
