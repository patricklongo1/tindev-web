import styled from 'styled-components';

export const Container = styled.div`
    background: #fff;
    max-width: 100%;
    height: 60px;
    border-bottom: 1px solid #999;
    padding: 10px 0;
`;

export const Content = styled.div`
    max-width: 100%;
    height: 100%;
    margin: 0 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        border-radius: 4px;
        width: 80px;
        height: 38px;
        font-size: 14px;
        font-weight: normal;
        background: #df4723;
        color: #fff;
        transition: background 0.2s;

        &:hover {
            background: red;
        }
    }
`;
