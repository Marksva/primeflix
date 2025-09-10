
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './login.css'
import { auth } from '../../services/firebaseConnection';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

function AuthForm() {
    const navigate = useNavigate();
    
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const [userDetail, setUserDetail] = useState({});
    const [user, setUser] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isLogin) {
            await login();
        } else {
            await register();
        }
    };

    async function login() {
        await signInWithEmailAndPassword(auth, email, password)
            .then((value) => {
                setUserDetail({
                    uid: value.user.uid,
                    email: value.user.email
                })
                toast.success(`Bem-vindo! ${value.user.email}  🙂`)
                setUser(true);
                navigate("/");
            })
            .catch((error) => {
                toast.warn("Erro ao tentar fazer login! 😓" + error);
                console.log("Erro ao tentar fazer login" + error);
            })
    }

    async function register() {
        await createUserWithEmailAndPassword(auth, email, password)
            .then((value) => {
                toast.success("Cadastro realizado com sucesso! 🙂")
                setPassword("")
                setIsLogin(true)
            })
            .catch((error) => {
                if (error.code === 'auth/weak-password') {
                    toast.warn("Senha muito fraca! 😓")
                } else if (error.code === 'auth/email-already-in-use') {
                    toast.warn("Email já cadastrado! 😓")
                } else if (error.code === 'auth/invalid-email') {
                    toast.warn("Email/senha Inválidos! 😓")
                } else if (error.code === 'auth/missing-password') {
                    toast.warn("Senha inválida! 😓")
                }
                console.log('Erro: ' + error)
            })
    }

    return (
        <div className="container-login">
            <h1>{isLogin ? "Entrar" : "Criar conta"}</h1>

            <form
                className={`form-login ${isLogin ? "fade show" : "fade"}`}
                style={{ display: isLogin ? "block" : "none" }}
                onSubmit={handleSubmit}
            >
                <div className="mb-3">
                    <div className="input-group">
                        <span className="input-group-text">@</span>
                        <input
                            type="email"
                            className="form-control bg-dark text-white"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className="mb-3">
                    <div className="input-group">
                        <input
                            type={showPassword ? "text" : "password"}
                            className="form-control bg-dark text-white"
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? "🙈" : "👁️"}
                        </button>
                    </div>
                </div>

                <div className="d-grid mb-3">
                    <button className="btn btn-primary bold height" type="submit">
                        Entrar
                    </button>
                </div>
            </form>

            <form
                className={`form-login ${!isLogin ? "fade show" : "fade"}`}
                style={{ display: !isLogin ? "block" : "none" }}
                onSubmit={handleSubmit}
            >
                <div className="mb-3">
                    <div className="input-group">
                        <span className="input-group-text">@</span>
                        <input
                            type="email"
                            className="form-control bg-dark text-white"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className="mb-3">
                    <div className="input-group">
                        <input
                            type={showPassword ? "text" : "password"}
                            className="form-control bg-dark text-white"
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? "🙈" : "👁️"}
                        </button>
                    </div>
                </div>

                <div className="d-grid mb-3">
                    <button className="btn btn-primary bold height" type="submit">
                        Cadastrar
                    </button>
                </div>
            </form>

            <div className="text-center">
                {isLogin ? (
                    <button
                        type="button"
                        className="btn btn-link text-light "
                        onClick={() => setIsLogin(false)}
                    >
                        Criar uma conta
                    </button>
                ) : (
                    <button
                        type="button"
                        className="btn btn-link text-light"
                        onClick={() => setIsLogin(true)}
                    >
                        Já tenho conta
                    </button>
                )}
            </div>
        </div >
    )
}

export default AuthForm;