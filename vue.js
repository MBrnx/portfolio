fetch('navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar-placeholder').innerHTML = data;

    // ---- Tout code dépendant de la navbar ici ----
    const navbarCollapse = document.getElementById('navbarNav');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const toggleBtn = document.getElementById('theme-toggle'); // ⚡ Ici il existe maintenant
    const body = document.body;

    // Initialiser Bootstrap Collapse
    const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse, { toggle: false });

    // Fermer le menu si clic en dehors
    document.addEventListener('click', (e) => {
      if (!navbarCollapse.contains(e.target) && !navbarToggler.contains(e.target)) {
        if (navbarCollapse.classList.contains('show')) {
          bsCollapse.hide();
        }
      }
    });

    // ---- Theme toggle avec préférence système ----
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');

    // Appliquer le thème au chargement
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      body.setAttribute('data-theme', 'dark');
      toggleBtn.textContent = '☀️';
    } else {
      body.removeAttribute('data-theme');
      toggleBtn.textContent = '🌙';
    }

    // Gestion du bouton toggle
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

    // Forcer scroll en haut au chargement
    window.scrollTo(0, 0);
  })
  .catch(error => console.error('Erreur de chargement de la navbar:', error));

fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
  })
  .catch(error => console.error('Erreur de chargement du footer:', error));


const backToTopButton = document.getElementById("back-to-top");
const circle = document.querySelector(".progress-ring__circle");
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = scrollTop / scrollHeight;

    const offset = circumference - scrollPercent * circumference; 
    circle.style.strokeDashoffset = offset;

    backToTopButton.style.display = scrollTop > 100 ? "flex" : "none";
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});