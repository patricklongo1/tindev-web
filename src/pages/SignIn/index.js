/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import api from '../../services/api';
import logo from '../../assets/logo.svg';
import { Container, Content } from './styles';

export default function SignIn({ history }) {
    const [username, setUsername] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await api.post('/devs', { username });

            const { _id } = response.data;

            history.push(`/dev/${_id}`);
        } catch (error) {
            toast.error('Não foi possivel fazer Login. Verifique seu usuário');
        }
    }

    return (
        <Container>
            <Content>
                <img src={logo} alt="TinDev" />
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Digite seu usuário do GitHub"
                        value={username}
                        onChange={event => setUsername(event.target.value)}
                    />
                    <button type="submit">Entrar</button>
                </form>
            </Content>
        </Container>
    );
}

SignIn.propTypes = {
    history: PropTypes.object.isRequired,
};
