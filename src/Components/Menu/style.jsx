import styled from "styled-components";


export const Card = styled.div`
    border: 1px solid #daa520;
    width: 30.8%;
    border-radius: 5px;


    img{
        width: 100%;
        border-radius: 5px;
        height: 250px;
    }

    h2{
        font-weight: 600;
        font-size: 1.2rem;
        margin: 10px;
    }

    p{
        font-size: 18px;
        padding: 0 1rem 1rem 1rem;
    }

    .price{
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: end;
        align-items: center;
        padding-right: 1rem;
    }

    /* RESPONSIVO */
    @media(max-width: 1700px){
        width: 30.1%;
    }

    @media(max-width: 1280px){
        width: 30%;
    }

    @media(max-width: 1100px){
        width: 29.5%;

        p{
            font-size: 14px;
        }
    }

    @media(max-width: 968px){
        width: 46%;
    }

    @media(max-width: 765px){
        width: 100%;
    }
`