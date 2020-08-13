import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
}

const Checkbox: React.FC<InputProps> = ({ label, name, ...rest }) => {
    return (
        <div className="field-checkbox">
            <input type="checkbox" id={name} />
            <label htmlFor={name}>{label}</label>
        </div>
    );
}
export default Checkbox;