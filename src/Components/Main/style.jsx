import styled from "styled-components";

export const Style_Cards = styled.main`
  display: flex;
  width: 75%;
  margin: 0 2rem 3rem 2rem;
  padding: 2rem;
  flex-wrap: wrap;
  gap: 3rem;
  background-color: #dcdcdc;
  border-radius: 8px;

  .lastCard:nth-last-child(-n + 2) {
    flex-grow: 1;
    max-width: 50%;
  }

  @media (max-width: 1440px) {
    width: 95%;
  }

  @media (max-width: 968px) {
    .lastCard:nth-last-child(2) {
      flex-grow: 0;
      /* max-width: 100%; */
    }

    .lastCard:nth-last-child(1) {
      flex-grow: 1;
      max-width: 100%;
    }
  }

  @media(max-width: 768px){
    .lastCard:nth-last-child(2) {
    flex-grow: 0;
    max-width: 100%;
  }
  }
`;

export const Box_Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
`;
