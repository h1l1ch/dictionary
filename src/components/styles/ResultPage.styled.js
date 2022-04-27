import styled from 'styled-components';

export const StyledResultPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(209,62,62);
    color: white;
    width: 100%;
    height: 100vh;
    font-size: 20px;

        @media (max-width: ${({ theme }) => theme.mobile}) {
            font-size: 16px;
        }
    
    h1 {
        color: white;
        display: inline-block;
        font-size: 50px;
        margin: 5px 0;

        @media (max-width: ${({ theme }) => theme.mobile}) {
            font-size: 36px;
        }
    }

    button {
        color: rgb(209,62,62);
        margin-top: 5px;
        padding: 2px 10px;
        border-radius: 10px;
        border: none;
        font-size: 20px;

        @media (max-width: ${({ theme }) => theme.mobile}) {
            font-size: 16px;
        }

        &:hover  {
            cursor: pointer;
            background-color: rgb(231,233,235);
            opacity: 0.9;
            transform: scale(0.98);
        }
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        div {
            display: inline-block;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: white;
            padding: 0 10px;
            border-radius: 5px;
            margin: 5px 0;
            color: rgb(209,62,62);
            width: 600px;
    
            @media (max-width: ${({ theme }) => theme.mobile}) {
                width: 400px;
            }
    
            p {
                display: inline-block;
                margin: 0 10px 0 0;
                padding: 2px 2px; 
            }
    
            button {
                display: inline-flex;
                align-items: center;
                color: white;
                background-color: rgb(209,62,62);
                box-sizing: border-box;
                border: none;
                border-radius: 5px;
                box-shadow: none;
                margin: 2px 2px 2px 0;
    
                &:hover  {
                    cursor: pointer;
                    opacity: 0.9;
                    transform: scale(0.98);
                    background-color: rgb(209,62,62);
                }
            };
        }

    }
`