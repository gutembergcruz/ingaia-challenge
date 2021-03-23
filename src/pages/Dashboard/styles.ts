import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;

    div{
        padding-top: 25px;
    }

    input{
        background-color: transparent;
        border: solid 2px #fff;
        border-radius: 5px;
        width: 196px;
        height: 42px;
        padding: 0 10px;
        color: #fff;
        transition: 0.5s;

        &:focus{
            background-color: rgba(255,255,255,0.1);
        }
    }

    button{
        background-color: transparent;
        border: solid 2px #fff;
        border-radius: 5px;
        height: 42px;
        color: #fff;
        padding: 0px 10px;
        margin-left: 10px;
        transition: 0.5s;
        cursor: pointer;

        &:hover{
            background-color: rgba(255,255,255,0.5)
        }
    }
`;