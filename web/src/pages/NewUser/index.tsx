import React, { useState, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';
import backIcon from '../../assets/images/icons/back.svg';
import Input from '../../components/Forms/Input/index';
import InputPassword from '../../components/Forms/InputPassword';

function NewUser() {
    const history = useHistory();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    function handleMakeLogin(event: FormEvent) {
        event.preventDefault();

        history.push({
            pathname: '/page-success',
            state: {
                title: 'Cadastro concluído',
                subtitle: 'Agora você faz parte da plataforma da Proffy. Tenha uma ótima experiência.',
                link: 'Fazer login',
                link_path: 'login',
            }
        });

        console.log({
            login,
            password,
        });

    }

    return (
        <div id="new-user" className="container">
            <header>
                <Link to="/login">
                    <img src={backIcon} alt="Voltar" />
                </Link>
            </header>
            <div className="new-user-form">
                <main>
                    <fieldset>
                        <legend>
                            Cadastro
                        <p>
                                Preencha os dados abaixo para começar.
                        </p>
                        </legend>
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
                            <button type="submit">
                                Enviar
                        </button>
                        </form>
                    </fieldset>
                </main>
            </div>
        </div>
    );
}
export default NewUser; 