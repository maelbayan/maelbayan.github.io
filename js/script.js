const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky",window.scrollY>0);
});

let menu = document.querySelector('#menu-icon');
let lisnavigasi = document.querySelector('.lisnavigasi')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    lisnavigasi.classList.toggle('active')
};

window.onscroll = () => {
    menu.classList.remove('bx-x')
    lisnavigasi.classList.remove('active')
};

const sr = ScrollReveal ({
    distance: '45px',
    duration: 2700,
    reset: true
})

sr.reveal('.beranda-teks',{delay:350, origin:'left'})
sr.reveal('.home-img',{delay:350, origin:'right'})
sr.reveal('.keunggulan,.sejarah,.jurusan',{delay:200, origin:'bottom'})

$.getJSON('../json/prestasi.json', function(data){
    $.each(data, function(i,data ){
        $('#daftar-prestasie').append(`
        <div class="col">
        <img src="../img/prestasi/`+data.img+`" alt="">
            <div class="layer">
                <h3>Juara `+data.juara+`</h3>
                <h5>`+data.lomba+` Tahun `+data.tahun+`</h5>
                <h6>`+data.keteranganLomba+`</h6>
            </div>
        </div>
        `)
    });
});