# HarryPottAPI
atividade do curso

🧙‍♂️ Harry Potter API Explorer

Este projeto é uma aplicação que consome uma API de Harry Potter para exibir informações sobre personagens, suas casas e patronos.
O objetivo é permitir que fãs do universo criado por J.K. Rowling explorem os detalhes do mundo bruxo de forma interativa e organizada.

✨ Funcionalidades

📜 Listar todos os personagens da série

🏰 Exibir a casa de cada personagem (Grifinória, Sonserina, Corvinal ou Lufa-Lufa)

🐾 Mostrar o patrono associado ao personagem (quando disponível)

🔍 Permitir filtragem e busca por nome, casa ou patrono

💡 Interface simples e responsiva (caso haja frontend)

🧩 Estrutura do Projeto
harry-potter-api-explorer/
│
├── src/
│   ├── api/
│   │   └── harryPotterAPI.js     # Lida com as requisições HTTP
│   ├── components/
│   │   └── CharacterCard.js      # Exibe informações de um personagem
│   ├── pages/
│   │   └── Home.js               # Página principal da aplicação
│   └── utils/
│       └── helpers.js            # Funções auxiliares
│
├── public/
│   └── index.html
│
├── package.json
├── README.md
└── .env                          # Contém variáveis de ambiente (ex: URL da API)

⚙️ Tecnologias Utilizadas

JavaScript

Node.js e Express (para backend, se aplicável)

React ou Vue.js (para frontend, se aplicável)

Axios ou Fetch API (para consumo da API)

HTML5 / CSS3 / Tailwind

🚀 Como Executar o Projeto
1. Clone o repositório
git clone https://github.com/seuusuario/harry-potter-api-explorer.git
cd harry-potter-api-explorer

2. Instale as dependências
npm install

3. Configure o arquivo .env

Crie um arquivo .env na raiz do projeto e adicione a URL da API:

API_URL=https://hp-api.onrender.com/api

4. Execute o projeto
npm start


A aplicação ficará disponível em:
👉 http://localhost:3000

🔗 API Utilizada

Este projeto utiliza a HP-API
 — uma API pública gratuita com dados sobre o universo de Harry Potter.

Exemplo de endpoint:

GET https://hp-api.onrender.com/api/characters

🧙 Exemplos de Retorno
[
  {
    "name": "Harry Potter",
    "house": "Gryffindor",
    "patronus": "Stag",
    "actor": "Daniel Radcliffe"
  },
  {
    "name": "Hermione Granger",
    "house": "Gryffindor",
    "patronus": "Otter",
    "actor": "Emma Watson"
  }
]

🧠 Possíveis Extensões Futuras

Exibir detalhes de varinhas e animais mágicos

Adicionar favoritos e histórico de busca

Implementar autenticação para usuários

Criar gráficos de distribuição de casas e patronos

📜 Licença

Este projeto é distribuído sob a licença MIT.
Sinta-se livre para usar, modificar e compartilhar.

💬 Créditos

Desenvolvido por Gustavo 🪄
Inspirado no universo mágico de Harry Potter criado por J.K. Rowling.