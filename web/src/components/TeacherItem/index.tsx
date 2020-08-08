import React from 'react';

import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';

export interface Teacher {
    id: number;
    user_id: number
    name: string;
    avatar: string;
    bio: string;
    cost: number;
    whatsapp: string;
    subject: String;
}

export interface TeacherItemProps {
    teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {

    async function createNewConnection() {

        await api.post('/connections', {
            user_id: teacher.user_id,
        });

        console.log('Conexão criada com sucesso');
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name} />
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>
            <p>
                {teacher.bio}
            </p>
            <footer>
                <p>
                    Preço/Hora
                <strong>R$ {teacher.cost}</strong>
                </p>
                <a
                    onClick={createNewConnection}
                    href={`https://wa.me/${teacher.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em Contato
                </a>
            </footer>
        </article>
    );
}

export default TeacherItem;