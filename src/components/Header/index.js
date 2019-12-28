import React from 'react';

import logo from '../../assets/logo.svg';
import history from '../../services/history';
import { Container, Content } from './styles';

export default function Header() {
    function handleLogout() {
        history.push('/');
    }

    return (
        <Container>
            <Content>
                <img src={logo} alt="TinDev" />
                <button type="button" onClick={handleLogout}>
                    LogOut
                </button>
            </Content>
        </Container>
    );
}
