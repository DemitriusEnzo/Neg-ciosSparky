function criaNavbar() {
    const navbarHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
            <a class="navbar-brand" href="index.html#sparky">Sparky</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="index.html#quem-somos">Quem Somos</a></li>
                    <li class="nav-item"><a class="nav-link" href="index.html#nossos-diferenciais">Nossos Diferenciais</a></li>
                    <li class="nav-item"><a class="nav-link" href="index.html#desenvolvimento">Desenvolvimento</a></li>
                    <li class="nav-item"><a class="nav-link" href="index.html#chats">Chats</a></li>
                    <li class="nav-item"><a class="nav-link" href="index.html#socio">Seja Meu Sócio</a></li>
                </ul>
            </div>
        </div>
    </nav>
    `;

    document.getElementById('navbar-container').innerHTML = navbarHTML;
}

window.addEventListener('DOMContentLoaded', (e) => {
    criaNavbar();
});
