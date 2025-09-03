import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './movie-info.css';
import api from "../../services/api";
import { toast } from "react-toastify";

function Movie() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function LoadMovie() {
            await api.get(`/movie/${id}`, {
                params: {
                    language: "pt-BR"
                }
            }).then((response) => {
                setMovie(response.data);
                document.title = "Primeflix - " + response.data.title;
                setLoading(false);
            }).catch(() => {
                navigate("/", { replace: true });
                return;
            })
        }

        LoadMovie();

        return () => {
            console.log("Componente desmontado");
        }

    }, [navigate, id]);
    
    function saveMovie() {
        const myList = localStorage.getItem("@primeflix");
        let savedMovies = JSON.parse(myList) || [];

        const hasMovie = savedMovies.some((savedMovie) => savedMovie.id === movie.id)

        if (hasMovie) {
            toast.warn("Você já possui esse filme salvo!");
            return;
        } 

        savedMovies.push(movie);

        localStorage.setItem("@primeflix", JSON.stringify(savedMovies));
        toast.success("Filme salvo com sucesso!");
    }

    if (loading) {
        return (
            <div className="movie-info">
                <h1>Carregando detalhes...</h1>
            </div>
        )
    }

    return (
        <div className="movie-info">
            <h1>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
            <h3>Sinopse</h3>
            <span>{movie.overview}</span>
            <strong>Avaliação: {movie.vote_average} / 10</strong>

            <div className="area-buttons">
                <button onClick={saveMovie}>Salvar</button>
                <button>
                    <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${movie.title} Trailer`}>Trailer</a>
                </button>
            </div>
        </div >
    )
}

export default Movie;