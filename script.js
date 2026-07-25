const openBtn = document.getElementById("openBtn");

openBtn.addEventListener("click", () => {

document.body.innerHTML = `
<div class="hearts"></div>

<div class="container">

<h1>❤️ Майя ❤️</h1>

<p id="typing" class="text"></p>

<button id="nextBtn">❤️ Улантуу ❤️</button>

</div>
`;

const message = `

❤️ Майя...
Бул сайтты ачканың үчүн рахмат.
Бул жөн гана сайт эмес...
Бул менин жүрөгүмдөн чыккан сөздөр.
Эгер мен сени капа кылган болсом,
чын жүрөктөн кечирим сурайм.
Сен мен үчүн жөн гана адам эмессиң.
Сен менин күнүмдү жарык кылган,
жылмайышың менен маанайымды көтөргөн
эң кымбат адамсың.Сенин күлкүң,көз карашың,
жаның мен үчүн абдан баалуу.Кээде адамдар жаңылышат.
Мен да жаңылдым.Бирок бир нерсе өзгөргөн жок —
сага болгон сезимим.Мен өткөндү өзгөртө албайм,
бирок келечекти экөөбүз
бирге кооз кыла алабыз деп ишенем.
❤️

`;

let i = 0;

function typeWriter(){

if(i < message.length){

document.getElementById("typing").innerHTML += message.charAt(i);

i++;

setTimeout(typeWriter,35);

}

}

typeWriter();

document.getElementById("nextBtn").onclick = showGallery;

});
function showGallery() {

document.body.innerHTML = `
<div class="hearts"></div>

<div class="container">

<h1>📸 Биздин эскерүүлөр ❤️</h1>

<img id="photo" src="images/photo1.jpg">

<p class="text">
Ар бир сүрөт биздин эң сонун көз ирмемдерибизди эске салат.
Ар бир көз ирмем мен үчүн абдан баалуу. ❤️
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

if(index >= photos.length){
index = 0;
}

document.getElementById("photo").src = photos[index];

},3000);

document.getElementById("continue").onclick = showInvitation;

}
function showInvitation() {

document.body.innerHTML = `
<div class="hearts"></div>

<div class="container">

<h1>❤️ Майя ❤️</h1>

<p class="text">

Эгер жүрөгүңдө мага кичинекей болсо да орун калган болсо...

Мен өткөндү өзгөртө албайм,
бирок келечекти экөөбүз
бирге кооз кыла алабыз деп ишенем.
📅 Жума

🕘 Саат 21:00

📍 Аянт

Сени ошол жерде чыдамсыздык менен күтөм.

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
Сенин «Ооба» дегениң мен үчүн эң чоң белек болду.

Мен ошол күнү сени чыдамсыздык менен күтөм. ❤️
</p>

</div>
`;

createHearts();
};
const noBtn = document.getElementById("noBtn");

let count = 0;

const texts = [
"🥺 Дагы ойлончу...",
"❤️ Сураныч...",
"😅 Мени кармай албайсың...",
"💖 Акыркы жолу сурайм...",
"🥰 Макул болчу..."
];

function moveButton(e) {

    if (e) e.preventDefault();

    if (count >= 5) {
        noBtn.innerHTML = "❤️ Макул, барам ❤️";
        noBtn.style.position = "static";
        noBtn.style.background = "#28a745";

        noBtn.onclick = () => {
            document.getElementById("yesBtn").click();
        };
        return;
    }

    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    const x = Math.random() * Math.max(maxX, 50);
    const y = Math.random() * Math.max(maxY, 50);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    noBtn.innerHTML = texts[count];
    count++;
}
// 💻 Компьютер
noBtn.addEventListener("mouseover", moveButton);

// 📱 Телефон
noBtn.addEventListener("touchstart", moveButton, { passive: false });

// Эгер touchstart иштебесе
noBtn.addEventListener("click", moveButton);

}
// ❤️ Учкан жүрөктөр
function createHearts() {
    const hearts = document.querySelector(".hearts");

    if (!hearts) return;

    setInterval(() => {

        const heart = document.createElement("span");

        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "%";
        heart.style.fontSize = (15 + Math.random() * 20) + "px";
        heart.style.animationDuration = (5 + Math.random() * 5) + "s";

        hearts.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 10000);

    }, 300);

}

createHearts();
