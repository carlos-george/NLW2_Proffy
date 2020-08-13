import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

import './styles.css';
import api from '../../services/api';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

function Landing() {
    const history = useHistory();
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('/connections').then((res) => {
            const { total } = res.data;
            setTotalConnections(total);
        })
    }, []);

    function handleProfile() {
        history.push('profile');
    }

    return (
        <div id="page-landing">
            <header>
                <div className="page-landing-profile" onClick={handleProfile}>
                    <img src="https://avatars2.githubusercontent.com/u/539098?s=460&u=057cb812c0d6d394c93a46a5f697dc85865b155c&v=4" alt="Avatar" />
                    <strong>Carlos George</strong>
                </div>
                <div className="page-landing-profile-off">
                    <FiLogOut size={20} onClick={() => { }} />
                </div>
            </header>
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Sua plataforma de estudos on-line.</h2>
                </div>

                <img src={landingImg} alt="Plataforma de Estudos" className="hero-image" />

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar" />
                        Estudar
                    </Link>
                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassIcon} alt="Dar Aulas" />
                        Dar Aulas
                    </Link>
                </div>
                <span className="total-connections">
                    Total de {totalConnections} {totalConnections === 1 ? 'conexão' : 'conexões'} já realizadas <img src={purpleHeartIcon} alt="Coração roxo" />
                </span>
            </div>
        </div>
    );
}

export default Landing;