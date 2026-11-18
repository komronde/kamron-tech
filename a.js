const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const themeToggle = document.querySelector(".theme-toggle");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", String(!isOpen));
        menuToggle.setAttribute("aria-label", isOpen ? "Menyuni ochish" : "Menyuni yopish");
        navLinks.classList.toggle("is-open", !isOpen);
    });

    navLinks.addEventListener("click", (event) => {
        if (event.target instanceof HTMLAnchorElement) {
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Menyuni ochish");
            navLinks.classList.remove("is-open");
        }
    });
}

if (themeToggle) {
    const savedTheme = localStorage.getItem("portfolio-theme");
    document.body.classList.toggle("light-theme", savedTheme === "light");

    themeToggle.addEventListener("click", () => {
        const isLight = document.body.classList.toggle("light-theme");
        localStorage.setItem("portfolio-theme", isLight ? "light" : "dark");
        themeToggle.setAttribute(
            "aria-label",
            isLight ? "Qorong‘i rang rejimini yoqish" : "Yorug‘ rang rejimini yoqish"
        );
    });
}

const year = document.querySelector("#current-year");
if (year) {
    year.textContent = String(new Date().getFullYear());
}

const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealElements.forEach((element) => revealObserver.observe(element));
} else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
}