import React, { InputHTMLAttributes, useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
}

const InputPassword: React.FC<InputProps> = ({
    label,
    name,
    ...rest
}) => {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="input-block">
            <label htmlFor={name}>
                {label}
            </label>
            <input type={showPassword ? 'text' : 'password'} id={name} {...rest} />
            {showPassword
                ? <FiEyeOff size={20} onClick={() => { setShowPassword(!showPassword) }} />
                : <FiEye size={20} onClick={() => { setShowPassword(!showPassword) }} />
            }
        </div>
    );
}
export default InputPassword;