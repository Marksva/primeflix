import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Moovie from "./pages/Moovie";

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/moovie/:id" element={<Moovie />} />
            </Routes>
        </BrowserRouter>

    )
}

export default RoutesApp;