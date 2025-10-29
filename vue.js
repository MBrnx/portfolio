fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar-placeholder').innerHTML = data;
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
