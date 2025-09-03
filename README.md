# PrimeFlix

PrimeFlix é uma aplicação web para explorar e favoritar filmes, utilizando a API do The Movie Database (TMDb).

## Funcionalidades
- Listagem dos filmes populares
- Visualização de detalhes de cada filme
- Adição e remoção de filmes favoritos
- Página de erro personalizada

## Tecnologias Utilizadas
- ReactJS
- Axios
- TMDb API

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
```

## Deploy
Acesse o projeto online:
👉 [https://primeflix-black-five.vercel.app/](https://primeflix-black-five.vercel.app/)

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
   ```
4. Inicie o projeto:
   ```powershell
   npm start
   ```

## Configuração da API
A aplicação utiliza a API do TMDb. Para funcionar corretamente, obtenha uma chave de API em https://www.themoviedb.org/settings/api e insira no arquivo `.env` conforme mostrado acima.

## Licença
Este projeto é apenas para fins educacionais.

