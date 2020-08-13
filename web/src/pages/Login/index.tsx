import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import Input from '../../components/Forms/Input/index';
import Checkbox from '../../components/Forms/Checkbox/index';
import InputPassword from '../../components/Forms/InputPassword/index';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

function Login() {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    function handleMakeLogin(event: FormEvent) {
        event.preventDefault();

        console.log({
            login,
            password
        })
    }

    return (
        <div id="page-login-form">
            <main>
                <fieldset>
                    <legend>Fazer login</legend>
                    <form onSubmit={(event) => handleMakeLogin(event)}>
                        <Input
                            name="login"
                            label="E-Mail"
                            value={login}
                            onChange={(e) => { setLogin(e.target.value) }}
                        />
                        <InputPassword
                            name="password"
                            label="Senha"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                        <div className="login-remember-forget">
                            <Checkbox
                                name="remember"
                                label="Lembrar-me"
                            />
                            <Link to="forget-pass">Esqueci minha senha</Link>
                        </div>
                        <button type="submit">
                            Entrar
                        </button>
                    </form>
                </fieldset>

                <footer>
                    <div className="new-user">
                        <p>
                            Não tem cadastro? <br />
                        </p>
                        <Link to="new-user">Cadastre-se</Link>
                    </div>
                    <span className="login-purple-heart">
                        É de graça <img src={purpleHeartIcon} alt="Coração roxo" />
                    </span>
                </footer>
            </main>
        </div>
    );
}

export default Login; 