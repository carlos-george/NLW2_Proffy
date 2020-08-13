import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import BeatLoader from 'react-spinners/BeatLoader';

import './styles.css';
import logoImg from '../../assets/images/logo.svg';

function ProffyIntro() {

    const history = useHistory();
    const [isLoading, setIsloading] = useState(false);

    useEffect(() => {
        setIsloading(true);

        const token = localStorage.getItem('token');

        setTimeout(() => {
            if (token !== null) {

                history.replace('landing');
            } else {

                history.replace('login');
            }
        }, 3000);

    }, []);

    return (
        <div id="page-intro">
            <div className="page-intro-logo">
                <img src={logoImg} alt="Proffy" />
                <h3>Sua plataforma de
                    <br />
                    estudos on-line.
                </h3>
                <div className="page-intro-spinner">
                    <BeatLoader
                        size={30}
                        color={"#fcfcfc"}
                        loading={isLoading}
                    />
                </div>
            </div>
        </div>
    );
}

export default ProffyIntro;