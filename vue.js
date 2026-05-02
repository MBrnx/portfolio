// ===============================
// THEME CLAIR / SOMBRE
// ===============================
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Préférence système
const prefersDark = window.matchMedia &&
                    window.matchMedia('(prefers-color-scheme: dark)').matches;

// Thème sauvegardé
const savedTheme = localStorage.getItem('theme');

// Application du thème au chargement
if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    body.setAttribute('data-theme', 'dark');
    toggleBtn.textContent = '☀️';
} else {
    body.removeAttribute('data-theme');
    toggleBtn.textContent = '🌙';
}

// Toggle du thème
toggleBtn.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        toggleBtn.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        toggleBtn.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    }
});

// ===============================
// NAVBAR : FERMETURE AUTOMATIQUE
// ===============================
const navbarCollapse = document.getElementById('navbarNav');
const navbarToggler = document.querySelector('.navbar-toggler');

if (navbarCollapse && navbarToggler) {
    document.addEventListener('click', (e) => {
        const isOpen = navbarCollapse.classList.contains('show');
        const clickInsideMenu = navbarCollapse.contains(e.target);
        const clickOnToggler = navbarToggler.contains(e.target);

        if (isOpen && !clickInsideMenu && !clickOnToggler) {
            const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
            bsCollapse.hide();
        }
    });
}

// ===============================
// BOUTON BACK TO TOP + PROGRESSION
// ===============================
const backToTopButton = document.getElementById("back-to-top");
const circle = document.querySelector(".progress-ring__circle");

if (circle) {
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference;

    window.addEventListener("scroll", () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = scrollTop / scrollHeight;

        const offset = circumference - scrollPercent * circumference;
        circle.style.strokeDashoffset = offset;

        backToTopButton.style.display = scrollTop > 100 ? "flex" : "none";
    });
}

backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===============================
// SCROLL EN HAUT AU CHARGEMENT
// ===============================
window.scrollTo(0, 0);
