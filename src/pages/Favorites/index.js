import { use, useEffect, useState } from "react";
import './favorites.css';
import { Link } from "react-router-dom";

function Favorites() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const myList = localStorage.getItem("@primeflix");
        setMovies(JSON.parse(myList) || []);

    }, [])


    function handleDelete(id) {
        let filterMovies = movies.filter((item) => {
            return (item.id !== id)
        })

        setMovies(filterMovies);
        localStorage.setItem("@primeflix", JSON.stringify(filterMovies));
    }
    
    return (
        <div className="my-movies">
            <h1>Meus Filmes</h1>
            {movies.length === 0 && <span>Você não possui nenhum filme salvo :(</span>}
            <ul>
                {movies.map((movie) => {
                    return (
                        <li key={movie.id}>
                            <span>{movie.title}</span>
                            <div>
                                <Link to={`/movie/${movie.id}`}>Ver detalhes</Link>
                                <button onClick={()=> handleDelete(movie.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>

        </div>
    )
}

export default Favorites;