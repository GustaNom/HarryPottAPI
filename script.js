const lista = document.getElementById("lista-personagens");
const totalItens = document.getElementById("total-itens");
const campoBusca = document.getElementById("campoBusca");
const botoesCasas = document.querySelectorAll(".menu-lista a");


let personagens = [];
let personagensFiltrados = [];


function createCard(personagem) {


    const foto = personagem.image && personagem.image.trim() !== ""
        ? personagem.image
        : "./img/placeholder.png";

    return `
        <div class="card hp-card">
            <header class="card-header">
                <p class="card-header-title">${personagem.name}</p>
            </header>

            <div class="card-image">
                <figure class="image is-4by3">
                    <img src="${foto}" alt="${personagem.name}">
                </figure>
            </div>

            <div class="card-content">
                <div class="content">
                    <p><strong>Idade:</strong> ${personagem.yearOfBirth || "Desconhecida"}</p>
                    <p><strong>Casa:</strong> ${personagem.house || "Sem casa"}</p>
                    <p><strong>Descrição:</strong> ${personagem.alive ? "Vivo(a)" : "Falecido(a)"}</p>
                    <p><strong>Ator:</strong> ${personagem.actor || "Desconhecido"}</p>
                </div>
            </div>
        </div>
    `;
}


function renderizar(listaFinal) {
    lista.innerHTML = listaFinal.map(createCard).join(""); 
    totalItens.textContent = listaFinal.length;
}


async function carregar() {
    const res = await fetch("https://hp-api.onrender.com/api/characters");
    personagens = await res.json();
    personagensFiltrados = personagens;
    renderizar(personagens);
}
carregar();


campoBusca.addEventListener("input", () => {
    const texto = campoBusca.value.toLowerCase();

    const filtrados = personagensFiltrados.filter(p =>
        p.name.toLowerCase().includes(texto)
    );

    renderizar(filtrados);
});

botoesCasas.forEach(btn => {
    btn.addEventListener("click", () => {
        const casa = btn.dataset.casa;

        personagensFiltrados = 
            casa === "todas"
            ? personagens
            : personagens.filter(p => p.house === casa);

        renderizar(personagensFiltrados);
    });
});
