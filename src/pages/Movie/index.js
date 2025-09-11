import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './movie-info.css';
import api from "../../services/api";
import { toast } from "react-toastify";
import { useAuth } from "../../hooks/useAuth.js";
import { doc, setDoc, collection, getDoc } from "firebase/firestore";
import { auth, db } from "../../services/firebaseConnection";

function Movie() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);

    const { user, userDetail } = useAuth();

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


    }, [navigate, id]);

    async function saveMovie() {

        if (!user) {
            toast.warn("Você precisa estar logado para salvar filmes.");
            return;
        }

        const userDocRef = doc(db, "users", userDetail.uid);

        const favoritesColRef = collection(userDocRef, "favorites");

        const movieDocRef = doc(favoritesColRef, String(movie.id));

        const docSnap = await getDoc(movieDocRef);
        if (docSnap.exists()) {
            toast.warn("Você já possui esse filme salvo!");
            return;
        }

        await setDoc(movieDocRef, {
            id: movie.id,
            title: movie.title,
            poster_path: movie.poster_path,
            overview: movie.overview,
            vote_average: movie.vote_average,
            backdrop_path: movie.backdrop_path,
            createdAt: new Date()
        }).then(() => {
            toast.success("Filme salvo com sucesso!");
        }).catch((error) => {
            toast.error("Erro ao salvar filme!");
            console.log(error);
        })

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