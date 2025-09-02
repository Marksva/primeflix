import { use, useEffect, useState } from 'react'
import api from '../../services/api'

function Home() {

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        async function loadMovies() {
            const response = await api.get("movie/now_playing",{
                params: {
                    language: 'pt-BR',
                    page: 1
                }
            })

            console.log(response.data.results);
        }

        loadMovies();
    }, [])




    return (
        <div>
            <h1>Bem vindo a Home</h1>
        </div>
    )
}

export default Home;