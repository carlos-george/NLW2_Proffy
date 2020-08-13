import React, { InputHTMLAttributes, useState } from 'react';

import './styles.css';
import monetaryIcon from '../../../assets/images/icons/monetary.svg';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
    monetary?: boolean;
}

const Input: React.FC<InputProps> = ({
    label,
    name,
    monetary,
    ...rest
}) => {

    return (
        <div className="input-block">
            <label htmlFor={name}>
                {label}
            </label>
            <input type="text" id={name} {...rest} style={
                monetary
                    ? { padding: '0 1.6rem 0 3.4rem' }
                    : {}
            } />
            {monetary &&
                <img src={monetaryIcon} alt="R$" />
            }
        </div>
    );
}
export default Input;