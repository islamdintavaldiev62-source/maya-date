const openBtn = document.getElementById("openBtn");

openBtn.addEventListener("click", () => {

document.body.innerHTML = `

<div class="container">

<h1 class="title">❤️ Майя ❤️</h1>

<p id="typing" class="text"></p>

<button id="nextBtn">
Улантуу ❤️
</button>

</div>

`;

const message = `

Бул сайтты ачканың үчүн рахмат.

Бул жөн гана чакыруу эмес.

Бул менин жүрөгүмдөн чыккан сөздөр.

Эгер мен сени капа кылган болсом...

Чын жүрөктөн кечирим сурайм.

Мен өткөндү өзгөртө албайм.

Бирок келечекти өзгөртүү үчүн аракет кыла алам.

Сен мен үчүн абдан кымбат адамсың.

Мен сени сагындым.

Кел, тагдырга дагы бир мүмкүнчүлүк берели... ❤️

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



// ======================
// СҮРӨТТӨР
// ======================

function showGallery(){

document.body.innerHTML = `

<div class="container">

<h1 class="title">Биз... ❤️</h1>

<img id="photo" src="images/photo1.jpg">

<p class="text">

Ар бир сүрөт —

Биздин эң сонун эскерүүбүз. ❤️

</p>

<button id="continue">

Улантуу ❤️

</button>

</div>

`;

const photos = [

"images/photo1.jpg",

"images/photo2.jpg",

"images/photo3.jpg",

"images/photo4.jpg",

"images/photo5.jpg"

];

let index = 0;

setInterval(()=>{

index++;

if(index>=photos.length){

index=0;

}

document.getElementById("photo").src = photos[index];

},3000);

document.getElementById("continue").onclick = showInvitation;

}



// ======================
// ЧАКЫРУУ
// ======================

function showInvitation(){

document.body.innerHTML = `

<div class="container">

<h1 class="title">❤️ Майя ❤️</h1>

<p class="text">

Эгер жүрөгүңдө мага кичинекей болсо да орун калган болсо...

Кел, дагы бир жолу жолугалы.

</p>

<h2>📍 Дүйшөмбү</h2>

<h2>🕘 21:00</h2>

<h2>📍 Аянт</h2>

<button id="yesBtn">

❤️ Мен сөзсүз келем ❤️

</button>

</div>

`;

document.getElementById("yesBtn").onclick = ()=>{

document.body.innerHTML = `

<div class="container">

<h1 class="title">

❤️ Рахмат ❤️

</h1>

<p class="text">

Бул жообуң мени абдан кубантты.

Мен сени күтөм.

📍 Дүйшөмбү

🕘 21:00

📍 Аянт

❤️

</p>

</div>

`;

};

}
