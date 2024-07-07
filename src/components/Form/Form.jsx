import React, {useEffect, useState} from 'react';
import './Form.css';
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {
    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('physical');

    const {tg} = useTelegram();

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, []);

    useEffect(() => {
        if (!street || !country) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [country, street]);

    return (
        <div className="form">
            <h3>Введите ваши данные</h3>

            <input
                className="input"
                type="text"
                placeholder="Страна"
                value={country}
                onChange={e => setCountry(e.target.value)}
            />

            <input
                className="input"
                type="text"
                placeholder="Улица"
                value={street}
                onChange={e => setStreet(e.target.value)}
            />

            <select
                className="select"
                value={subject}
                onChange={e => setSubject(e.target.value)}
            >
                <option value="physical">Физ. лицо</option>
                <option value="legal">Юр. лицо</option>
            </select>
        </div>
    );
};

export default Form;