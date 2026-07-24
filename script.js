// ❤️ MAYA DATE WEBSITE

const openBtn = document.getElementById("openBtn");

openBtn.addEventListener("click", () => {

    document.body.innerHTML = `

    <div class="container">

        <h1 class="title">Майя... ❤️</h1>

        <p id="typing" class="text"></p>

        <button id="nextBtn">
            ➜ Улантуу
        </button>

    </div>

    `;

    const message = `

Бул сайтты ачканың үчүн рахмат.

Бул жөн гана чакыруу эмес...

Бул менин жүрөгүмдөн чыккан сөздөр.

Эгер мен сени капа кылган болсом...

Чын жүрөктөн кечирим сурайм.

Мен кеткен каталарымды түшүндүм.

Сен жөнүндө ойлобогон бир дагы күн болгон жок.

❤️

`;

    let i = 0;

    function typeWriter(){

        if(i < message.length){

            document.getElementById("typing").innerHTML += message.charAt(i);

            i++;

            setTimeout(typeWriter,40);

        }

    }

    typeWriter();

    setTimeout(()=>{

        document.getElementById("nextBtn").onclick = ()=>{

            showGallery();

        }

    },1000);

});


// =====================
// Сүрөттөр бөлүмү
// =====================

function showGallery(){

document.body.innerHTML = `

<div class="container">

<h1 class="title">

Биз... ❤️

</h1>

<img id="photo"

src="images/photo1.jpg"

style="width:100%;
border-radius:20px;
margin-top:20px;
box-shadow:0 0 30px rgba(255,255,255,.3);">

<p class="text">

Ар бир сүрөт...

Биздин эң сонун эскерүүбүз ❤️

</p>

<button id="continue">

Улантуу ❤️

</button>

</div>

`;

const photos=[

"images/photo1.jpg",

"images/photo2.jpg",

"images/photo3.jpg",

"images/photo4.jpg",

"images/photo5.jpg"

];

let index=0;

setInterval(()=>{

index++;

if(index>=photos.length){

index=0;

}

document.getElementById("photo").src=photos[index];

},3000);

document.getElementById("continue").onclick=()=>{

alert("4-бөлүктө жолугушууга чакыруу ачылат ❤️");

}

}
