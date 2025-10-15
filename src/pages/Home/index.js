import { use, useEffect, useState } from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom';
import './home.css';

function Home() {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [offset, setOffset] = useState(1);

    useEffect(() => {
        document.title = "Primeflix";
        loadMovies();

    }, [offset]);

    async function loadMovies() {
        const response = await api.get("movie/now_playing", {
            params: {
                language: 'pt-BR',
                page: offset
            }
        })
        const listMovies = [...movies, ...response.data.results];
        setMovies(listMovies);
        setLoading(false);
    }

    function handleMore() {
        setOffset(offset + 1);
    }

    if (loading) {
        return (
            <div className='loading'>
                <h2>Carregando filmes...</h2>
            </div>
        )
    }

    return (
        <div className='container'>
            <div className='list-movies'>
                {movies.map((movie) => {
                    return (
                        <article key={movie.id}>
                            <strong>{movie.title}</strong>
                            <Link to={`/movie/${movie.id}`} className="image-wrapper">
                                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                            </Link>
                            <Link to={`/movie/${movie.id}`} className='go'>Acessar</Link>
                        </article>
                    )
                })}
            </div>
            <button className='more' onClick={handleMore}>
                Carregar mais...
            </button>
        </div>
    )
}

export default Home;