import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

interface Props {
    title: string;
    description?: string;
    profile?: boolean;
}

const PageHeader: React.FC<Props> = ({
    title,
    description,
    profile,
    children,
}) => {
    return (
        <header className="page-header" style={profile ? { height: '330px' } : {}}>
            <div className="top-bar-container">
                <Link to="landing">
                    <img src={backIcon} alt="Voltar" />
                </Link>
                <img src={logoImg} alt="Proffy" />
            </div>
            <div className="header-content">
                <strong>{title}</strong>
                {description && <p>{description}</p>}
                {children}
            </div>
        </header >
    );
}

export default PageHeader;