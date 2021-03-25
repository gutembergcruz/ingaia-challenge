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

export const Listagem = styled.section`
    max-width: 1000px;
    margin: 0 auto;
    margin-top: 30px;
    display: flex; 
    align-items: center; 
    justify-content: space-around; 
    flex-wrap: wrap;

    a {
        width: 225px;
        height: 225px;
        overflow: hidden;
        margin: 1%;
        position: relative;
        border-radius: 5px;
        filter: grayscale(100%);
        border: 2px solid transparent;

        img{
            width: 100%;
        }
        div{
            display: block;
            position: absolute;
            width: 100%;
            background-color: rgba(0,0,0,0.5);
            bottom: 0;
            padding: 5px 10px;

            p{
                font-weight: 700;
                font-size: 20px;
                color: #fff;
            }
            span{
                font-size: 12px;
                font-weight: 400;
                color: #fff;
            }
        }
    }
    .found{
        filter: grayscale(0);
        border: 2px solid #CBD736;
        transition: 0.3s;

        &:hover{
            border: 2px solid #9AD736;
        }
    }
    .found-d{
        display: none;
    }
`;