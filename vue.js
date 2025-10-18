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
