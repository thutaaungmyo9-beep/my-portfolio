// ==============================
// Mobile Menu
// ==============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});

// Close menu when clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
});

// ==============================
// Active Navigation
// ==============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ==============================
// Fade Animation (Intersection Observer)
// ==============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(".card, .about-card, .skill-card, .timeline-item, .contact-box")
    .forEach(item => {

        item.classList.add("hidden");
        observer.observe(item);

    });

// ==============================
// Navbar Background
// ==============================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector("header");

    if (window.scrollY > 80) {

        navbar.style.background = "rgba(2,6,23,.95)";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.35)";

    } else {

        navbar.style.background = "rgba(15,23,42,.75)";
        navbar.style.boxShadow = "none";

    }

});

// ==============================
// Typing Effect
// ==============================

const titles = [
    "Network Engineer",
    "Cisco Engineer",
    "Fortinet Engineer",
    "Network Security"
];

const typingElement = document.querySelector(".hero-left h2");

let titleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const current = titles[titleIndex];

    if (!deleting) {

        typingElement.textContent = current.substring(0, charIndex++);
    } else {

        typingElement.textContent = current.substring(0, charIndex--);
    }

    let speed = deleting ? 60 : 120;

    if (!deleting && charIndex === current.length + 1) {

        deleting = true;
        speed = 1800;

    }

    if (deleting && charIndex === 0) {

        deleting = false;
        titleIndex = (titleIndex + 1) % titles.length;

    }

    setTimeout(typeEffect, speed);

}

typeEffect();

// ==============================
// Scroll To Top Button
// ==============================

const topBtn = document.createElement("button");

topBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.classList.add("showTop");

    } else {

        topBtn.classList.remove("showTop");

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

};
