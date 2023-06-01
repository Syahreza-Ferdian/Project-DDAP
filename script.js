const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('menu-active');
};

const cekElemen = new IntersectionObserver(elemenSingDicek => {
    elemenSingDicek.forEach(cek => {
        if(cek.isIntersecting){
            document.querySelector(".hp").classList.add("fadeInLeft");
            document.querySelector(".rs").classList.add("fadeInRight");
        }
    })
});

cekElemen.observe(document.querySelector(".resep"));