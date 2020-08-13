import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './styles.css';
import checkDone from '../../assets/images/icons/check-done.svg';

export interface PageSucessProps {
    title: string;
    subtitle: string;
    link: string;
    link_path: string;
}

function PageSuccess() {

    const { state } = useLocation();
    const {
        title,
        subtitle,
        link,
        link_path
    } = state as PageSucessProps;

    return (
        <div id="page-success-container">
            <div className="success-block">
                <img src={checkDone} alt="Tarefa feita" />
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <Link to={link_path}>{link}</Link>
            </div>
        </div>
    );
}

export default PageSuccess;