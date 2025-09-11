import './header.css';
import { Link } from 'react-router-dom';
import { useAuth } from "../../hooks/useAuth.js";
import { auth } from '../../services/firebaseConnection';
import { signOut } from "firebase/auth";
function Header() {
    const { user, userDetail } = useAuth();

    async function handleLogout() {
        await signOut(auth);
    }
    
    return (
        <header>
            <Link className='logo text-primary' to="/">PrimeFlix</Link>
            <div className='area-buttons-header'>
                <Link className='movies btn btn-secondary bold' to="/favorites">Meus filmes 🍿</Link>
                {user ? (
                    <button
                        className="bold btn btn-danger text-light"
                        onClick={handleLogout}
                    >
                        Sair
                    </button>
                ) : (
                    <Link className="bold btn btn-primary text-light" to="/auth">
                        Entrar
                    </Link>
                )}
            </div>
        </header>
    )

}

export default Header;