// ================= PAGE SWITCH FUNCTION =================
function nextPage(pageId) {

    // Sab pages hide karo
    const pages = document.querySelectorAll(".page");
    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    // Jo page chahiye usko show karo
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add("active");
    }
}



// ================= COUNTDOWN =================

// 👇 Yaha birth date change kar sakti ho
let birthDate = new Date("2023-08-15T14:30:00");

function updateCountdown() {

    let now = new Date();
    let diff = now - birthDate;

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((diff / (1000 * 60)) % 60);
    let seconds = Math.floor((diff / 1000) % 60);

    let countdownElement = document.getElementById("countdown");

    if (countdownElement) {
        countdownElement.innerHTML =
            days + " Days | " +
            hours + " Hours | " +
            minutes + " Minutes | " +
            seconds + " Seconds";
    }
}

// Har 1 second me update hoga
setInterval(updateCountdown, 1000);
updateCountdown();