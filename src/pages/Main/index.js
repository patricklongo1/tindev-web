/* eslint-disable no-underscore-dangle */
/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import like from '../../assets/like.svg';
import dislike from '../../assets/dislike.svg';
import Header from '../../components/Header';
import api from '../../services/api';

import { Container, ButtonBox } from './styles';

export default function Main({ match }) {
    const [devs, setDevs] = useState([]);

    useEffect(() => {
        async function loadDevs() {
            const response = await api.get('devs', {
                headers: {
                    user: match.params.id,
                },
            });
            setDevs(response.data);
        }
        loadDevs();
    }, [match.params.id]);

    async function handleLike(id, name) {
        await api.post(`/devs/${id}/likes`, null, {
            headers: { user: match.params.id },
        });

        setDevs(devs.filter(dev => dev._id !== id));
        toast.success(`Voce deu LIKE em ${name}`);
    }

    async function handleDislike(id, name) {
        await api.post(`/devs/${id}/dislikes`, null, {
            headers: { user: match.params.id },
        });

        setDevs(devs.filter(dev => dev._id !== id));
        toast.error(`Voce deu DISLIKE em ${name}`);
    }

    return (
        <>
            <Header />
            <Container>
                {devs.length > 0 ? (
                    <ul>
                        {devs.map(dev => (
                            <li key={dev._id}>
                                <img src={dev.avatar} alt="Avatar" />
                                <footer>
                                    <strong>{dev.name}</strong>
                                    <p>{dev.bio}</p>
                                </footer>
                                <ButtonBox>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleLike(dev._id, dev.name)
                                        }
                                    >
                                        <img src={like} alt="like" />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleDislike(dev._id, dev.name)
                                        }
                                    >
                                        <img src={dislike} alt="dislike" />
                                    </button>
                                </ButtonBox>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className="empty">Acabou :(</div>
                )}
            </Container>
        </>
    );
}

Main.propTypes = {
    match: PropTypes.object.isRequired,
};
