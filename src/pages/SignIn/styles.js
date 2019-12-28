import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100%;
    width: 100%;
    padding: 180px 0;
    background: #eee;
`;

export const Content = styled.div`
    margin: 0px auto;
    width: 100%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    form {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        width: 100%;

        input {
            border: 1px solid #ddd;
            border-radius: 4px;
            height: 48px;
            padding: 0 20px;
            font-size: 16px;
            color: #444;

            &::placeholder {
                color: #999;
            }
        }

        button {
            margin-top: 10px;
            border-radius: 4px;
            height: 48px;
            font-size: 16px;
            font-weight: bold;
            background: #df4723;
            color: #fff;
            transition: background 0.2s;

            &:hover {
                background: red;
            }
        }
    }
`;
