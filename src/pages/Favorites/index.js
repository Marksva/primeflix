import { useEffect, useState } from "react";
import './favorites.css';
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../hooks/useAuth.js";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db, auth } from "../../services/firebaseConnection.js";

function Favorites() {
    const [movies, setMovies] = useState([]);

    const { user, userDetail } = useAuth();

    useEffect(() => {
        document.title = "Primeflix - Meus Filmes";

        async function fetchFavorites() {
            
            const user = auth.currentUser;

            if (!user) {
                return;
            }

            try {
                const userDocRef = doc(db, "users", user.uid);
                const favoritesColRef = collection(userDocRef, "favorites");
                const querySnapshot = await getDocs(favoritesColRef);

                const favMovies = querySnapshot.docs.map(doc => doc.data());
                setMovies(favMovies);
            } catch (error) {
                console.error(error);
            }
        }

        fetchFavorites();
    }, [user]);


    async function handleDelete(id) {
        const user = auth.currentUser;
        if (!user) return;

        try {
            const userDocRef = doc(db, "users", user.uid);
            const favoritesColRef = collection(userDocRef, "favorites");
            const movieDocRef = doc(favoritesColRef, String(id));

            await deleteDoc(movieDocRef);

            const updatedMovies = movies.filter(m => m.id !== id);
            setMovies(updatedMovies);
            toast.success("Filme removido com sucesso!");
        } catch (error) {
            console.error(error);
            toast.error("Erro ao remover filme!");
        }
    }

    return (
        <div className="container">
            <h1>Meus Filmes</h1>
            {!user && <span className="empty">Você precisa estar logado para ver seus filmes salvos.</span>}
            {user && movies.length === 0 && <span className="empty">Você não possui nenhum filme salvo :(</span>}
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