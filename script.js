const openBtn = document.getElementById("openBtn");

openBtn.addEventListener("click", () => {

document.body.innerHTML = `
<div class="hearts"></div>

<div class="container">

<h1 class="title">❤️ Майя ❤️</h1>

<p id="typing" class="text"></p>

<button id="nextBtn">❤️ Улантуу ❤️</button>

</div>
`;

const message = `

❤️ Майя...

Бул сайтты жөн эле ачкан жоксуң...

Бул жерде менин жүрөгүмдүн үнү жашайт.

Балким мен көп ката кетирдим.

Балким сени капа кылдым.

Бирок бир күн да сени ойлобой өткөн жок.

Сенин күлкүңдү,
үнүңдү,
көздөрүңдү,
жаныңдагы ар бир көз ирмемди абдан сагындым.

Мен өткөндү өзгөртө албайм.

Бирок келечекти экөөбүз чогуу жаза алабыз.

❤️ Чын жүрөктөн кечирим сурайм.

Эгер мүмкүнчүлүк берсең...

Баарын кайрадан баштагым келет.

`;

let i = 0;

function typeWriter() {
    if (i < message.length) {
        document.getElementById("typing").innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 35);
    }
}

typeWriter();

document.getElementById("nextBtn").onclick = showGallery;

});
function showGallery() {

document.body.innerHTML = `
<div class="hearts"></div>

<div class="container">

<h1>❤️ Биздин эскерүүлөр ❤️</h1>

<img id="photo" src="images/photo1.jpg">

<p class="text">
Ар бир сүрөттө биздин эң сонун көз ирмемдер жашайт... ❤️
</p>

<button id="continue">❤️ Улантуу ❤️</button>

</div>
`;

const photos = [
"images/photo1.jpg",
"images/photo2.jpg",
"images/photo3.jpg",
"images/photo4.jpg"
];

let index = 0;

setInterval(() => {
    index++;

    if (index >= photos.length) {
        index = 0;
    }

    document.getElementById("photo").src = photos[index];

}, 3000);

document.getElementById("continue").onclick = showInvitation;

}

function showInvitation() {

document.body.innerHTML = `
<div class="hearts"></div>

<div class="container">

<h1>❤️ Майя ❤️</h1>

<p class="text">

Эгер жүрөгүңдө мага кичинекей болсо да орун калган болсо...

📅 Дүйшөмбү

🕘 Саат 21:00

📍 Аянт

Мен ошол жерде сени чыдамсыздык менен күтөм.

❤️ Келесиңби?

</p>

<div class="buttons">

<button id="yesBtn">❤️ Ооба ❤️</button>

<button id="noBtn">💔 Жок</button>

</div>

</div>
`;

document.getElementById("yesBtn").onclick = () => {

document.body.innerHTML = `
<div class="hearts"></div>

<div class="container">

<h1>❤️ Рахмат ❤️</h1>

<p class="text">

Бул мен үчүн эң сонун белек.

Мен ошол күнү сени чыдамсыздык менен күтөм.

❤️

</p>

</div>
`;
};
    document.getElementById("yesBtn").onclick = () => {

document.body.innerHTML = `
<div class="hearts"></div>

<div class="container">

<h1>❤️ Рахмат ❤️</h1>

<p class="text">

Бул мен үчүн эң сонун белек.

Мен ошол күнү сени чыдамсыздык менен күтөм.

❤️

</p>

</div>
`;
};

const noBtn = document.getElementById("noBtn");

let escapeCount = 0;

const messages = [
"🥺 Сураныч, дагы ойлончу...",
"❤️ Мен сени күтөм...",
"😅 Мени кармай албайсың...",
"💖 Балким «Ооба» десеңчи...",
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

}
