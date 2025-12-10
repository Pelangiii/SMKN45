// Animasi muncul ketika halaman selesai dimuat
window.addEventListener("load", () => {
    document.querySelector(".navbar").classList.add("show");
    document.querySelector(".hero").classList.add("show");
});
//artikel
window.addEventListener("load", () => {
    document.querySelector(".hero").classList.add("show");
    document.querySelector(".artikel-section").classList.add("show");
});
//slide kehalian
const slider = document.getElementById("programSlider");

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5; 
    slider.scrollLeft = scrollLeft - walk;
});


//slide pengajar
var swiper = new Swiper(".guruSwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 2200,
        disableOnInteraction: false,
    },

    breakpoints: {
        1200: { slidesPerView: 4 },
        900:  { slidesPerView: 3 },
        600:  { slidesPerView: 2 },
        0:    { slidesPerView: 1 }
    }
});
// Cek Video
document.querySelectorAll(".video-card").forEach(card => {
    const video = card.querySelector(".video-element");
    const overlay = card.querySelector(".video-overlay");

    card.addEventListener("click", () => {
        if (video.paused) {
            video.play();
            overlay.style.opacity = "0";
            overlay.style.pointerEvents = "none";
        } else {
            video.pause();
            overlay.style.opacity = "1";
        }
    });
});
//lokasi sekolah
var smkn45 = [-6.203407, 106.756587];

var map = L.map('map', {
    zoomControl: true,
    scrollWheelZoom: true,
    dragging: true,
}).setView(smkn45, 14);

L.tileLayer('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3010903488052!2d106.77224697499041!3d-6.22397309376408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f12befeed7ff%3A0x5df156bdca16a26d!2sSMKN%2045%20Jakarta!5e0!3m2!1sen!2sid!4v1765263193110!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade', {
    maxZoom: 20,
}).addTo(map);

L.marker(smkn45).addTo(map);
// artikel
document.getElementById("searchBtn").addEventListener("click", function() {
    const keyword = document.getElementById("searchInput").value;

    if(keyword.trim() === "") {
        alert("Silakan ketik kata kunci artikel!");
    } else {
        console.log("Mencari artikel:", keyword);

        // nanti bisa diarahkan ke halaman lain
        // window.location.href = "artikel.html?search=" + keyword;
    }
});
//list berita
function openNews(title, date) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDate").innerText = date;
    document.getElementById("newsModal").style.display = "block";
}

function closeNews() {
    document.getElementById("newsModal").style.display = "none";
}

window.onclick = function (event) {
    let modal = document.getElementById("newsModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};




