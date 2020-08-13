import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';
import api from '../../services/api';
import warningIcon from '../../assets/images/icons/warning.svg';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Forms/Input';
import TextArea from '../../components/Forms/TextArea';
import Select from '../../components/Forms/Select';

interface Schedule {
    week_day: number;
    from: string;
    to: string;
}

function TeacherForm() {

    const history = useHistory();
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [schedulesItems, setScheduleItems] = useState<Schedule[]>([
        { week_day: 0, from: '', to: '' },
    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...schedulesItems,
            { week_day: 0, from: '', to: '' },
        ])
    }

    function handleCreateClass(e: FormEvent) {
        e.preventDefault();

        // api.post('/classes', {
        //     subject,
        //     cost,
        //     schedule: schedulesItems,
        // }).then(res => {
        //     alert(res.data.message);
        //     history.push({
        //         pathname: '/page-success',
        //         state: {
        //             title: 'Cadastro concluído',
        //             subtitle: 'Agora seu perfil está completo. Você poderá cadastrar algumas aulas.',
        //             link: 'Voltar a home',
        //             link_path: 'landing',
        //         }
        //     });
        // }).catch(() => {
        //     alert('Erro no cadastro!!!');
        // });

        history.push({
            pathname: '/page-success',
            state: {
                title: 'Cadastro concluído',
                subtitle: 'Tudo certo, seu cadastro está na nossa lista de aulas. Agora é só ficar de olho no seu WhatsApp.',
                link: 'Voltar a home',
                link_path: 'landing',
            }
        });

    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updatedScheduleItems = schedulesItems.map((item, index) => {
            if (index === position) {
                return {
                    ...item,
                    [field]: value,
                };
            }
            return item;
        });

        setScheduleItems(updatedScheduleItems);
    }

    function monetaryMack(value: any) {

        let v = value.replace(/\D/g, '');
        v = (v / 100).toFixed(2) + '';
        v = v.replace(".", ",");
        v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
        v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
        setCost(v);
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que inclrível que você quer dar aulas."
                description="O primeiro passo é preencher esse formulário de inscrição."
            />
            <main>
                <form onSubmit={(event) => handleCreateClass(event)}>
                    <fieldset>
                        <legend>Sobre a aula</legend>
                        <div className="about-class">
                            <Select
                                name="subject"
                                label="Matéria"
                                value={subject}
                                onChange={(e) => { setSubject(e.target.value) }}
                                options={[
                                    { value: 'Artes', label: 'Artes' },
                                    { value: 'Biologia', label: 'Biologia' },
                                    { value: 'Ciências', label: 'Ciências' },
                                    { value: 'Educação Física', label: 'Educação Física' },
                                    { value: 'Física', label: 'Física' },
                                    { value: 'Geografia', label: 'Geografia' },
                                    { value: 'História', label: 'História' },
                                    { value: 'Matemática', label: 'Matemática' },
                                    { value: 'Portugues', label: 'Portugues' },
                                    { value: 'Química', label: 'Química' },
                                ]}
                            />
                            <Input
                                name="cost"
                                label="Custo da sua hora/aula"
                                monetary
                                maxLength={14}
                                value={cost}
                                onChange={(e) => { monetaryMack(e.target.value) }}
                            />
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários disponíveis
                        <button type="button" onClick={addNewScheduleItem}>
                                + Novo horário
                        </button>
                        </legend>
                        {schedulesItems.map((item, index) =>
                            (
                                <div key={item.week_day} className="schedule-item">
                                    <Select
                                        name="weekDay"
                                        label="Dia da semana"
                                        value={item.week_day}
                                        onChange={(e) => { setScheduleItemValue(index, 'week_day', e.target.value) }}
                                        options={[
                                            { value: '0', label: 'Domingo' },
                                            { value: '1', label: 'Segunda-Feira' },
                                            { value: '2', label: 'Terça-Feira' },
                                            { value: '3', label: 'Quarta-Feira' },
                                            { value: '4', label: 'Quinta-Feira' },
                                            { value: '5', label: 'Sexta-Feira' },
                                            { value: '6', label: 'Sábado' },
                                        ]}
                                    />
                                    <Input
                                        name="from"
                                        label="Das"
                                        type="time"
                                        value={item.from}
                                        onChange={(e) => { setScheduleItemValue(index, 'from', e.target.value) }}
                                    />
                                    <Input
                                        name="to"
                                        label="Até"
                                        type="time"
                                        value={item.to}
                                        onChange={(e) => { setScheduleItemValue(index, 'to', e.target.value) }}
                                    />
                                </div>
                            )
                        )}
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

export default TeacherForm;