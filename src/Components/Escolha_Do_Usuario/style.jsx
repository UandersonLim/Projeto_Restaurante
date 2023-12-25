import styled from "styled-components";

const Container_Escolha = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    
    
`

const Caixa_botao = styled.div`
  display: flex;
  align-items: center;
  margin: 3rem 0;
  width: 75%;
  justify-content: space-between;
  

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    padding: 15px 50px;
    border: none;
    cursor: pointer;
    background-color: #dcdcdc;
    border-radius: 5px;
    font-weight: 600;
  }

  button:hover {
    background-color: #daa520;
    transition: all 0.3s;
  }

  img {
    width: 25px;
    margin-right: 10px;
  }

  .cor_botao {
    background-color: #daa520;
  }

  @media(max-width: 1768px){
    button{
      padding: 15px 35px;
    }
  }

  @media(max-width: 1440px){
    width: 95%;

    button{
      padding: 15px 27px;
    }

  }

  @media(max-width: 1024px){
    flex-wrap: wrap;
    gap: 5px;

    button:nth-last-child(-n+2){
        flex-grow: 1;
    }

    button{
      padding: 15px 45px;
      font-size: 12px;
    }
  }
  

  @media(max-width: 768px){
    justify-content: center;

    button{
      font-size: 12px;
      width: 40%;
    }

    button:nth-last-child(-n+2){
        flex-grow: 0;
    }

  }
`;

// INPUT

const Caixa_Input = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 200px;

  h3 {
    font-family: "Dancing Script", sans-serif;
    color: #daa520;
    font-weight: 600;
    font-size: 46px;
    margin-bottom: 1rem;
  }

 
`;

const Buscar_Input = styled.input`
  background-image: url("public/Assets/lupa.png");
  background-repeat: no-repeat;
  background-size: 40px;
  background-position: 10px;

  border-radius: 50px;
  width: 76%;
  height: 60px;
  padding-left: 4rem;
  font-size: 20px;
  font-weight: 600;

  @media(max-width: 1440px){
    width: 97%;
  }

  @media(max-width: 768px){
    font-size: 80%;
  }

  @media(max-width: 480px){
    font-size: 65%;
  }
`;

export { Caixa_botao, Caixa_Input, Buscar_Input, Container_Escolha };
