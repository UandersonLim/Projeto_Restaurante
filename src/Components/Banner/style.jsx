import styled from "styled-components";

const Figure = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  /* @media (max-width: 1440px) {
    width: 100%;
  } */
`;

const Header = styled.header`
  width: 75%;
  height: 70vh;
  background-image: url("Assets/banner.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #ff8000;

  h1 {
    color: #fff;
    text-align: center;
    font-size: 63px;
    text-shadow: 0 -1px 4px #fff, 0 -2px 10px #ff0, 0 -10px 20px #ff8000,
      0 -18px 40px #f00;
  }

  p {
    color: #daa520;
    font-family: "Dancing Script", sans-serif;
    font-size: 43px;
    text-align: center;
  }

  @media(max-width: 1440px){
    width: 100%;
  }

  @media(max-width: 750px){
    height: 45vh;

    h1{
      font-size: 50px;
    }

    p{
      font-size: 25px;
    }
  }

  @media(max-width: 480px){
    height: 30vh;

    h1{
      font-size: 20px;
    }

    p{
      font-size: 18px;
      /* background-color: #fff; */
    }
  }
`;

export { Figure, Header };
