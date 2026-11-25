// ==========================
// 1. MENU NAVIGASI MOBILE
// ==========================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("open");

    const isOpen = navMenu.classList.contains("open");

    menuBtn.setAttribute("aria-expanded", isOpen);

});


// Menutup menu setelah diklik

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("open");

        menuBtn.setAttribute("aria-expanded", "false");

    });

});


// ==========================
// 2. NAVBAR SCROLL
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


// ==========================
// 3. ANIMASI SECTION
// ==========================

const revealElements =
    document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);

revealElements.forEach(function (element) {

    observer.observe(element);

});


// ==========================
// 4. EFEK MENGETIK
// ==========================

const typingText =
    document.getElementById("typingText");

const words = [

    "Mahasiswa Sistem Informasi",

    "Technology Enthusiast",

    "Web Development Enthusiast"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {

    const currentWord = words[wordIndex];

    typingText.textContent =
        currentWord.substring(0, charIndex);

    if (!deleting && charIndex < currentWord.length) {

        charIndex++;

        setTimeout(typingEffect, 90);

    } else if (!deleting) {

        deleting = true;

        setTimeout(typingEffect, 1500);

    } else if (charIndex > 0) {

        charIndex--;

        setTimeout(typingEffect, 45);

    } else {

        deleting = false;

        wordIndex++;

        if (wordIndex >= words.length) {

            wordIndex = 0;

        }

        setTimeout(typingEffect, 400);

    }

}

typingEffect();


// ==========================
// 5. TAHUN OTOMATIS
// ==========================

document.getElementById("year").textContent =
    new Date().getFullYear();


console.log(
    "Portfolio Dzaki Fayyadh berhasil dijalankan!"
);
