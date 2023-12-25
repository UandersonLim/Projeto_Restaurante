import { Card } from "./style.jsx";

const Cards = (props) => {
  return (
    <Card className="lastCard">
      <figure>
        <img src={props.imagem} />
      </figure>
      <h2>{props.nome}</h2>
      <p>{props.categoria}</p>
      <p>{props.descricao}</p>
      <div className="price">
        <span>R$ {props.preco}</span>
      </div>
    </Card>
  );
};

export default Cards;
