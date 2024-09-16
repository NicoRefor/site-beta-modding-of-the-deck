const imageUrls = [
    'leonclassico.jpg',
    'godzin.jpg',
    '2017-01-19-resident-evil-7-biohazard-artwork-004.webp',
    'images (1).jpg',
    'hollow knight.jpg',
    'mine.jpg',
    'Resident_Evil_3_-_North-american_cover.jpg',
    '7119464d0906b86e5d4f9cd51784f3f4628425a83f72ad9e33962b35ca531be4_600.webp',
    'gta5.jpg',
    'bloons.jpg',
];

function getRandomImages() {
    const shuffled = imageUrls.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
}

function updateSuggestionImages() {
    const [img1, img2, img3] = getRandomImages();
    const suggestionImages = document.querySelectorAll('.suggestion-image');
    const spinnerContainer = document.querySelector('.spinner-container');

    // Mostrar o spinner
    spinnerContainer.classList.remove('hidden');

    suggestionImages.forEach((img, index) => {
        img.classList.remove('fade-in');
        img.classList.add('fade-out');

        // Após a animação de fade-out, trocar a imagem e iniciar a animação de fade-in
        img.addEventListener('transitionend', function onTransitionEnd() {
            img.src = [img1, img2, img3][index];
            img.onload = function() {
                // Ocultar o spinner quando a imagem for carregada
                if (index === suggestionImages.length - 1) {
                    spinnerContainer.classList.add('hidden');
                }
            };
            img.classList.remove('fade-out');
            img.classList.add('fade-in');
            img.removeEventListener('transitionend', onTransitionEnd);
        });
    });
}


// Alternar imagens a cada 10 segundos
function startImageRotation() {
    updateSuggestionImages(); // Atualiza as imagens inicialmente
    setInterval(updateSuggestionImages, 10000); // Altera as imagens a cada 10 segundos
}

// Inicializar as imagens das sugestões ao carregar a página
document.addEventListener('DOMContentLoaded', startImageRotation);


// Função para abrir o modal de login
function openLoginModal() {
    document.getElementById('loginModal').style.display = 'flex';
}

// Função para fechar o modal de login
function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}

// Fechar o modal se clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById('loginModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme');

    // Verifica o tema salvo e aplica ao carregar a página
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.checked = true;
    } else {
        document.body.classList.remove('dark-mode');
        themeToggle.checked = false;
    }

    // Adiciona um ouvinte de evento para alternar o tema
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });
});

// Função para abrir o navigation drawer
function openDrawer() {
    document.getElementById('drawer').classList.add('drawer-open');
    document.getElementById('drawer-overlay').style.display = 'block';
}

// Função para fechar o navigation drawer
function closeDrawer() {
    document.getElementById('drawer').classList.remove('drawer-open');
    document.getElementById('drawer-overlay').style.display = 'none';
}

// Adicionar evento ao botão do menu
document.querySelector('.drawer-toggle').addEventListener('click', openDrawer);