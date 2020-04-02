import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Register() {
    const [nome, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUF] = useState('');
    const history = useHistory();
    async function handleRegister(e){
        e.preventDefault();
        const data = {
            nome,email,whatsapp,city,uf,
        }
        try{
            const response = await api.post('ongs', data);
            console.log(response);
            alert(response.data.id);
            history.push('/');
        } catch(err){
            alert('fudeo de vez');
        }
    }
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero" />
                    <h1>Cadastro</h1>
                    <p>Texto do cadastro</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para o Logon
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input type="text" placeholder="Nome da ONG" 
                           value={nome} onChange={e => setName(e.target.value)} />
                    <input type="email" placeholder="E-mail da ONG"
                           value={email} onChange={e => setEmail(e.target.value)} />
                    <input type="text" placeholder="Whatsapp da ONG" 
                           value={whatsapp} onChange={e => setWhatsapp(e.target.value)} />
                    <div className="input-group">
                        <input type="text" placeholder="Cidade da ONG" 
                           value={city} onChange={e => setCity(e.target.value)} />
                        <input type="text" placeholder="UF da ONG" style={{width: 80}}
                           value={uf} onChange={e => setUF(e.target.value)} />
                    </div>
                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}