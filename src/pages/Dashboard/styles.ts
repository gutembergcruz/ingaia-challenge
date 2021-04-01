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

export const Modal = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.5);

    display: flex;
    align-items: center;
    justify-content: center;

    article{
        width: 800px;
        height: 500px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #000;

        aside{
            width: 300px;
            height: 500px;
            position: relative;
            border-radius: 10px 0px 0px 10px;
            

            div.imgFundo{
                position: absolute;
                width: 100%;
                height: 500px;  
                overflow: hidden;
                border-radius: 10px 0px 0px 10px;
                img{
                    width: 100%;
                    height: 500px;
                    filter: blur(25px);
                    border-radius: 10px 0px 0px 10px;
                }
            }

            div.imgCard{
                position: absolute;
                top: 50px;
                left: -100px;
                width: 300px;
                height: 400px;
                border-radius: 10px;
                

                img{
                    width: 300px;
                    height: 400px;
                    border-radius: 10px;
                    border: 1px solid #ccc;
                }
                span{
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        background: #1B1B1B;
                        height: 60px;
                        width: 100%;
                        border-radius: 0px 0px 10px 10px;
                        padding: 10px;  
                        border: 1px solid #ccc;
                        border-top-color: transparent;
                        h4{
                            font-weight: 700;
                            font-size: 20px;
                            color: #fff;
                         }
                         p{ 
                            font-size: 12px;
                            font-weight: 400;
                            color: #fff;
                          }
                    }
            }
        }
        main{
            width: 500px;
            div{
                    margin-bottom: 40px;
                    padding: 0 40px;
                h3{
                    color: #CBD736;
                    text-transform: uppercase;
                    font-weight: 300;
                    font-size: 13px;
                    letter-spacing: 10px;
                }
                p{
                    font-weight: 300;
                    color: #f1f1f1;
                    font-size: 11px;
                    letter-spacing: 2px;
                }
                span{
                    font-size: 11px;
                    color: #666;
                    font-weight: 300;
                }
                h4{
                    font-size: 20px;
                    color: #fff;
                    font-weight: 400;
                }
                p{

                }
            }
        }  
    }

`;