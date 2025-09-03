import { useEffect, useState } from "react";
import './favorites.css';
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Favorites() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        document.title = "Primeflix - Meus Filmes";
        const myList = localStorage.getItem("@primeflix");
        setMovies(JSON.parse(myList) || []);
    }, [])

    function handleDelete(id) {
        let filterMovies = movies.filter((item) => item.id !== id);
        setMovies(filterMovies);
        localStorage.setItem("@primeflix", JSON.stringify(filterMovies));
        toast.success("Filme removido com sucesso!");
    }

    return (
        <div className="container">
            <h1>Meus Filmes</h1>
            {movies.length === 0 && <span className="empty">Você não possui nenhum filme salvo :(</span>}
            <div className="list-movies">
                {movies.map((movie) => (
                    <article key={movie.id}>
                        <strong>{movie.title}</strong>
                        <Link to={`/movie/${movie.id}`} className="image-wrapper">
                            <img src={movie.poster_path ? `https://image.tmdb.org/t/p/original/${movie.poster_path}` : 'https://via.placeholder.com/300x450?text=Sem+Imagem'} alt={movie.title} />
                        </Link>
                        <div className="actions">
                            <Link to={`/movie/${movie.id}`} className='details'>Ver detalhes</Link>
                            <button className="delete" onClick={() => handleDelete(movie.id)}>Excluir</button>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}

export default Favorites;