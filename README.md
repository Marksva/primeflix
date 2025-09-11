# PrimeFlix

PrimeFlix é uma aplicação web para explorar e favoritar filmes, utilizando a API do The Movie Database (TMDb).

## Deploy
Acesse a demo do projeto online:
👉 [https://primeflix-black-five.vercel.app/](https://primeflix-black-five.vercel.app/)
<img width="1209" height="911" alt="image" src="https://github.com/user-attachments/assets/99e3eef9-7f0e-45f1-8ac4-5131ce1a52f5" />



## Funcionalidades
- Autenticação de usuário com Firebase
- Listagem dos filmes populares
- Visualização de detalhes de cada filme
- Adição e remoção de filmes favoritos
- Página de erro personalizada

## Tecnologias Utilizadas
- ReactJS
- Axios
- TMDb API
- Firebase (Autenticação e Banco de Dados)

## Estrutura do Projeto
```
public/
  index.html
  ...
src/
  App.js
  index.js
  index.css
  routes.js
  components/
    Header/
      index.js
      header.css
  pages/
    Home/
      index.js
      home.css
    Movie/
      index.js
      movie-info.css
    Favorites/
      index.js
      favorites.css
    Erro/
      index.js
      erro.css
  services/
    api.js
    firebaseConnection.js
  hooks/
    useAuth.js
```



## Como executar
1. Clone o repositório:
   ```powershell
   git clone <url-do-repositorio>
   ```
2. Instale as dependências:
   ```powershell
   npm install
   ```
3. Crie um arquivo `.env` na raiz do projeto e adicione sua chave da API TMDb:
   ```env
   REACT_APP_API_KEY=<sua_api_key>
   REACT_APP_FIREBASE_API_KEY=SEU_FIREBASE_API_KEY_AQUI
   REACT_APP_FIREBASE_AUTH_DOMAIN=SEU_FIREBASE_AUTH_DOMAIN_AQUI
   REACT_APP_FIREBASE_PROJECT_ID=SEU_FIREBASE_PROJECT_ID_AQUI
   REACT_APP_FIREBASE_STORAGE_BUCKET=SEU_FIREBASE_STORAGE_BUCKET_AQUI
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=SEU_FIREBASE_MESSAGING_SENDER_ID_AQUI
   REACT_APP_FIREBASE_APP_ID=SEU_FIREBASE_APP_ID_AQUI
   REACT_APP_FIREBASE_MEASUREMENT_ID=SEU_FIREBASE_MEASUREMENT_ID_AQUI
   ```
4. Inicie o projeto:
   ```powershell
   npm start
   ```

## Configuração da API
A aplicação utiliza a API do TMDb. Para funcionar corretamente, obtenha uma chave de API em https://www.themoviedb.org/settings/api e insira no arquivo `.env` conforme mostrado acima.
Além disso, é necessário configurar o Firebase para autenticação e banco de dados. Crie um projeto no Firebase e obtenha as configurações necessárias para o arquivo .env

## Licença
Este projeto é apenas para fins educacionais.

