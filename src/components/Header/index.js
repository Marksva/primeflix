import './header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <Link className='logo text-primary' to="/">PrimeFlix</Link>
            <div className='area-buttons-header'>
                <Link className='movies btn btn-secondary bold' to="/favorites">Meus filmes 🍿</Link>
                <Link className='bold btn btn-primary text-light' to="/auth">Entrar</Link>
            </div>
        </header>
    )

}

export default Header;