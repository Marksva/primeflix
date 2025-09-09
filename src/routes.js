import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Header from "./components/Header";
import Erro from "./pages/Erro";
import Favorites from "./pages/Favorites";
import AuthForm from "./pages/AuthForm";

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={< Home />} />
                <Route path="/movie/:id" element={<Movie />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/auth" element={<AuthForm />} />
                <Route path="*" element={<Erro />} />
            </Routes>
        </BrowserRouter>

    )
}

export default RoutesApp;