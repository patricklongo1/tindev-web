/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import itsamatch from '../../assets/itsamatch.png';

import { Container } from './styles';

export default function HasMatch({ handleClose, matchDev }) {
    return (
        <Container>
            <img src={itsamatch} alt="Deu Match!" />
            <img className="avatar" src={matchDev.avatar} alt="avatar" />
            <strong>{matchDev.name}</strong>
            <p>{matchDev.bio}</p>
            <button type="button" onClick={() => handleClose()}>
                FECHAR
            </button>
        </Container>
    );
}

HasMatch.propTypes = {
    handleClose: PropTypes.func.isRequired,
    matchDev: PropTypes.object.isRequired,
};
