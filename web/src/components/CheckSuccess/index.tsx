import React from 'react';

import './styles.css';
import succesBackground from '../../assets/images/success-background.svg';
import checkDone from '../../assets/images/icons/check-done.svg';

interface CheckSuccessProps {
    title: string;
    subtitle: string;
}

const CheckSuccess: React.FC<CheckSuccessProps> = ({ title, subtitle, children }) => {

    return (
        <div id="page-success-container">
            <div className="success-block">
                <img src={checkDone} alt="Tarefa feita" />
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                {children}
            </div>
        </div>
    );
}

export default CheckSuccess;