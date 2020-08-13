import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { FiCamera } from 'react-icons/fi';

import './styles.css';
import api from '../../services/api';
import warningIcon from '../../assets/images/icons/warning.svg';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Forms/Input';
import TextArea from '../../components/Forms/TextArea';

interface Schedule {
    week_day: number;
    from: string;
    to: string;
}

function Profile() {

    const history = useHistory();
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');


    function handleCreateClass(e: FormEvent) {
        e.preventDefault();

        console.log({
            name,
            email,
            whatsapp,
            bio,
        })

        // api.post('/classes', {
        //     name,
        //     email,
        //     whatsapp,
        //     bio,
        // }).then(res => {
        //     alert(res.data.message);
        //     history.push('landing');
        // }).catch(() => {
        //     alert('Erro no cadastro!!!');
        // });

        history.push({
            pathname: '/page-success',
            state: {
                title: 'Cadastro concluído',
                subtitle: 'Agora seu perfil está completo. Você poderá cadastrar algumas aulas.',
                link: 'Voltar a home',
                link_path: 'landing',
            }
        });

    }

    return (
        <div id="page-profile-form" className="container">
            <PageHeader
                title=""
                description=""
                profile
            >
                <div className="page-profile-header">
                    <img src="https://avatars2.githubusercontent.com/u/539098?s=460&u=057cb812c0d6d394c93a46a5f697dc85865b155c&v=4" alt="Avatar" />
                    <strong>Carlos George</strong>
                    <div className="input-avatar">
                        <FiCamera size={18} />
                    </div>
                </div>
            </PageHeader>
            <main>
                <form onSubmit={(event) => handleCreateClass(event)}>
                    <fieldset>
                        <legend>Seus Dados</legend>
                        <div className="profile-primary">
                            <Input
                                name="name"
                                label="Nome"
                                value={name}
                                onChange={(e) => { setName(e.target.value) }}
                            />
                            <Input
                                name="surname"
                                label="Sobrenome"
                                value={surname}
                                onChange={(e) => { setSurname(e.target.value) }}
                            />
                        </div>
                        <div className="profile-secundary">
                            <Input
                                name="email"
                                label="E-mail"
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                            />
                            <Input
                                name="whatsapp"
                                label="Whatsapp"
                                value={whatsapp}
                                onChange={(e) => { setWhatsapp(e.target.value) }}
                            />
                        </div>
                        <TextArea
                            name="bio"
                            label="Biografia"
                            value={bio}
                            onChange={(e) => { setBio(e.target.value) }}
                        />
                    </fieldset>
                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante" />
                            Importante! <br />
                            Preencha todos os dados
                        </p>
                        <button type="submit">
                            Salvar Cadastro
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    );
}

export default Profile;