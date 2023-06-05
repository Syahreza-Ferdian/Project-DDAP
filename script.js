// NAVBAR TOGGLE PAS NANG TABLET/HP
const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('menu-active');
};

//CLICK NANG NJOBO SIDEBAR --> NAVBAR AUTO ILANG
const menuBtn = document.querySelector('#menu');

document.addEventListener('click', function(e) {
    if(!menuBtn.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('menu-active');
    }
});

// ANIMASI SING JALAN PAS DI SCROLL
const cekElemen = new IntersectionObserver(elemenSingDicek => {
    elemenSingDicek.forEach(cek => {
        if(cek.isIntersecting){
            document.querySelector(".hp").classList.add("fadeInLeft");
            document.querySelector(".rs").classList.add("fadeInRight");
        }
    })
});
cekElemen.observe(document.querySelector(".resep"));


//FUNGSI NAMPILKE OVERLAY INFORMASI GIZI
function tampilkanGizi(){
    document.querySelector('.informasi-gizi').classList.add('active');
}

function hilangkanTampilanGizi(){
    document.querySelector('.informasi-gizi').classList.remove('active');
}


// KANGGO NAMBAHKE BAHAN MAKANAN NANG SEARCH
function addCategory() {
    var kontener = document.getElementById("categoryContainer");
    var kategoriInput = kontener.querySelectorAll(".category-input");

    var opoIsoDitambahke = true;
    kategoriInput.forEach(function(inputContainer) {
        var inputField = inputContainer.querySelector("input");
        if (inputField.value === "") {
            opoIsoDitambahke = false;
            alert("Harap masukkan value terlebih dahulu sebelum menambahkan bahan baru!");
        }
    });

    if (opoIsoDitambahke) {
        var kontenerAnyar = document.createElement("div");
        kontenerAnyar.className = "category-input";

        var inputFieldAnyar = document.createElement("input");
        inputFieldAnyar.type = "text";
        inputFieldAnyar.name = "categories";
        inputFieldAnyar.placeholder = "Masukkan bahan makanan";
        inputFieldAnyar.required = false;

        kontenerAnyar.appendChild(inputFieldAnyar);

        kontener.appendChild(kontenerAnyar);

        inputFieldAnyar.focus(); //PENTING: Ben cursor auto mapan nang input field
    }
}


//KANGGO NGE-CLEAR BAHAN MAKANAN SING DITAMBAHKE
//OTOMATIS INPUT FIELD E BALIK DADI SIJI MANEH
function clearForm() {
    var kontener = document.querySelector(".category-container");
    kontener.innerHTML = '';

    var kontenerAnyar = document.createElement("div");
    kontenerAnyar.className = "category-input";

    var inputFieldAnyar = document.createElement("input");
    inputFieldAnyar.type = "text";
    inputFieldAnyar.name = "categories";
    inputFieldAnyar.placeholder = "Masukkan bahan makanan";
    inputFieldAnyar.required = false;

    kontenerAnyar.appendChild(inputFieldAnyar);

    kontener.appendChild(kontenerAnyar);
}
