import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100%;
    max-width: 980px;
    margin: 0 auto;
    padding: 50px 0;
    background: #eee;
    text-align: center;

    div.empty {
        font-size: 32px;
        color: 999;
        font-weight: bold;
        margin: 300px auto;
        width: 100%;
        max-width: 300px;
    }

    ul {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 30px;
        margin-top: 50px;

        li {
            display: flex;
            flex-direction: column;

            img {
                max-width: 100%;
                border-radius: 5px 5px 0 0;
            }

            footer {
                flex: 1;
                background: #fff;
                border: 1px solid #ddd;
                padding: 15px 20px;
                text-align: left;
                border-radius: 0 0 5px 5px;

                strong {
                    font-size: 16px;
                    color: #333;
                }

                p {
                    font-size: 14px;
                    line-height: 20px;
                    color: #666;
                    margin-top: 5px;
                }
            }
        }
    }
`;

export const ButtonBox = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 100%;
    align-items: 100%;
    justify-content: space-between;

    button {
        margin-top: 10px;
        height: 50px;
        width: 140px;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.15);
        border-radius: 4px;
        background: #fff;

        &:hover {
            img {
                transform: translateY(-5px);
                transition: all 0.2s;
            }
        }
    }
`;
