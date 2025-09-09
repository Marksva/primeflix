
import { useState } from "react";
import './login.css'


function AuthForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            alert(`Login em desenvolvimento`);
        } else {
            alert(`Cadastro em desenvolvimento`);
        }
    };
    return (
        <div className="container-login">
            <h1>{isLogin ? "Entrar" : "Criar conta"}</h1>
            <form className='form-login' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <div className="input-group">
                        <span className="input-group-text">@</span>
                        <input
                            type="email"
                            className="form-control bg-dark text-white"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                    <button className="btn btn-primary bold" type="submit">
                        {isLogin ? "Entrar" : "Cadastrar"}
                    </button>
                </div>

                <div className="text-center">
                    {isLogin ? (
                        <button
                            type="button"
                            className="btn btn-link text-light"
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
            </form>

        </div>
    )
}

export default AuthForm;