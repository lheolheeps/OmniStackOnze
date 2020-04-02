import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();
    async function handleNewIncident(e) {
        e.preventDefault();
        const data = {
            title, description, value,
        }
        try {
            await api.post('incidents', data, { headers: { Authorization: ongId, } });
            history.push('/profile');
        } catch (err) {
            alert('fudeo de vez');
        }
    }
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero" />
                    <h1>Cadastro novo Caso</h1>
                    <p>Texto do cadastro</p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para Home
                    </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input type="text" placeholder="Titulo do Caso"
                        value={title} onChange={e => setTitle(e.target.value)} />
                    <textarea placeholder="descricao"
                        value={description} onChange={e => setDescription(e.target.value)} ></textarea>
                    <input type="text" placeholder="Valor"
                        value={value} onChange={e => setValue(e.target.value)} />
                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}