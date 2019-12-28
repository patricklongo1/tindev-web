import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    min-height: 110%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.8);

    img.avatar {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        margin: 30px 0;
        border: 5px solid #eee;
        background: #999;
    }

    strong {
        font-size: 30px;
        color: #fff;
    }

    p {
        margin-top: 10px;
        font-size: 20px;
        line-height: 30px;
        max-width: 400px;
        color: rgba(255, 255, 255, 0.8);
    }

    button {
        width: 90px;
        height: 45px;
        background: none;
        font-weight: bold;
        color: rgba(255, 255, 255, 0.8);
        font-size: 18px;
        margin-top: 30px;
        transition: color 0.2s;
        border: 0.5px solid #eee;
        border-radius: 4px;

        &:hover {
            color: #fff;
        }
    }
`;
