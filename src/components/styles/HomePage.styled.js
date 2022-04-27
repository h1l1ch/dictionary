import styled from 'styled-components';

export const StyledHomePage = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(209,62,62);
    width: 100%;
    height: 100vh;
    padding: 2px 3px;

    h1 {
        color: white;
        display: inline-block;
        font-size: 50px;
        margin: 5px 0;

        @media (max-width: ${({ theme }) => theme.mobile}) {
            font-size: 36px;
        }
    }

    div {
        display: inline-flex;
        width: 400px;
        padding: 2px 5px;

        @media (max-width: ${({ theme }) => theme.mobile}) {
            width: 300px;
        }

        button {
            display: inline-flex;
            align-items: center;
            color: $backgroundColor;
            background-color: white;
            box-sizing: border-box;
            border: none;
            border-radius: 5px;
            box-shadow: none;
            margin-right: 2px;
            font-size: 20px;

            @media (max-width: ${({ theme }) => theme.mobile}) {
                font-size: 16px;
            }

            &:hover  {
                cursor: pointer;
                opacity: 0.9;
                transform: scale(0.98);
            }
        };

        input {
            display: inline-flex;
            width: 100%;
            color: rgb(209,62,62);
            border: 3px solid white;
            border-radius: 5px;
            font-size: 20px;

            @media (max-width: ${({ theme }) => theme.mobile}) {
                font-size: 16px;
            }

            &:focus  {
                outline: none;
                border: 3px solid rgb(204,204,204);
            }

            &::placeholder {
                color: $backgroundColor;
            }
        }
    }    
`