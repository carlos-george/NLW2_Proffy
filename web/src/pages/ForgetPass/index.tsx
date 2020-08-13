import React, { useState, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';
import Input from '../../components/Forms/Input/index';
import backIcon from '../../assets/images/icons/back.svg';

function ForgetPass() {
    const history = useHistory();
    const [login, setLogin] = useState('');

    function handleMakeLogin(event: FormEvent) {
        event.preventDefault();

        console.log({
            login
        });

        history.push({
            pathname: '/page-success',
            state: {
                title: 'Redefinição enviada!',
                subtitle: 'Boa, agora é só checar o e-mail que foi enviado para você redefinir sua senha e aproveitar os estudos.',
                link: 'Voltar ao login',
                link_path: 'login',
            }
        });
    }

    return (
        <div id="forget-pass" className="container">
            <header>
                <Link to="/login">
                    <img src={backIcon} alt="Voltar" />
                </Link>
            </header>
            <div className="forget-pass-form">
                <main>
                    <fieldset>
                        <legend>
                            Eita, esqueceu <br />
                            sua senha?
                        <p>
                                Não esquenta, vamos dar um jeito nisso.
                        </p>
                        </legend>
                        <form onSubmit={(event) => handleMakeLogin(event)}>
                            <Input
                                name="login"
                                label="E-Mail"
                                value={login}
                                onChange={(e) => { setLogin(e.target.value) }}
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

export default ForgetPass; 