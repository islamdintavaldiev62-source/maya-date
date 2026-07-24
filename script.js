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

Бул сайт жөн гана сөздөр эмес.

Бул менин жүрөгүмдөн чыккан сезимдер.

Балким мен сени капа кылдым.

Балким туура эмес кадамдарга бардым.

Бирок бир нерсени түшүндүм...

Сен мен үчүн өзгөчө адамсың.

Сенин күлкүңдү,
үнүңдү,
көздөрүңдү,
жаныңда өткөргөн ар бир көз ирмемди сагындым.

Өткөндү өзгөртө албайм.

Бирок бүгүн сага бир гана нерсе айткым келет...

❤️ Чын жүрөктөн кечирим сурайм.

Эгер жүрөгүңдө мага кичинекей болсо да орун калган болсо...

Кел...

Тагдырга дагы бир мүмкүнчүлүк берели. ❤️
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
Ар бир сүрөттө биздин эң сонун көз ирмемдер жашайт...
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

function showInvitation(){

document.body.innerHTML = `
<div class="hearts"></div>

<div class="container">

<h1>❤️ Майя ❤️</h1>

<p class="text">

Мен сени көргүм келет...

Эгер мүмкүн болсо,

Дүйшөмбү күнү

🕘 Саат 21:00

📍 Аянтта жолугалы.

Мен сөзсүз сени күтөм.

❤️ Келесиңби?

</p>

<div class="buttons">

<button id="yesBtn">❤️ Ооба ❤️</button>

<button id="noBtn">💔 Жок</button>

</div>

</div>
`;

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
<div class="hearts"></div>

<div class="container">

<h1>❤️ Рахмат ❤️</h1>

<p class="text">

Сенин "Ооба" дегениң мен үчүн эң чоң белек.

Мен ошол күнү сени чыдамсыздык менен күтөм.

❤️ Мен сени баалайм. ❤️

</p>

</div>
`;

};

}
