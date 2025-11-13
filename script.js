window.addEventListener('scroll', function () {
    let catImage = document.getElementById('catImage');
    let scrollValue = window.scrollY;
    catImage.style.transform = 'translateY(' + scrollValue * 0.4 + 'px)';
});

window.addEventListener('scroll', function () {
    let sections = document.querySelectorAll('.section');
    sections.forEach(function (section) {
        let position = section.getBoundingClientRect().top;
        if (position - window.innerHeight <= 0) {
            section.classList.add('visible');
        }
    });
});

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(sendSMS);
    } else {
        alert("Konum servisi tarayıcınızda etkin değil.");
    }
}

function sendSMS(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    // SMS gönderilecek telefon numarası
    const phoneNumber = "+905439208849";

    // Mesaj içeriği
    const message = ` Kedinizi buldum Konum Bilgisi:\nEnlem: ${lat}\nBoylam: ${lon}`;

    // SMS uygulamasını açmak için sms bağlantısı
    const smsLink = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;

    // SMS uygulamasını başlat
    window.location.href = smsLink;
}

