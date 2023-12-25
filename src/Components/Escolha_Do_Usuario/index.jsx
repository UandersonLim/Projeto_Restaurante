import Entrada from "../../../public/Assets/entrada.png";
import Massa from "../../../public/Assets/massa.png";
import Carne from "../../../public/Assets/carne.png";
import Bebidas from "../../../public/Assets/bebidas.png";
import Saladas from "../../../public/Assets/salada.png";
import Sobremesa from "../../../public/Assets/sobremesa.png";
import {
  filtrarProduto,
  renderBusca,
  handleFiltrarComida,
  botaoSelecionado,
} from "../../Services";
import { useState } from "react";
import Main from "../Main";
import {
  Caixa_botao,
  Caixa_Input,
  Buscar_Input,
  Container_Escolha,
} from "./style";

const EscolhaDoUsuario = (props) => {
  const [escolha, setEscolha] = useState("Entradas");
  const [busca, setBusca] = useState("");
  const [valor, setValor] = useState();
  renderBusca(busca);
  filtrarProduto(escolha);

  return (
    <Container_Escolha>
      <Caixa_botao>
        <button
          className={botaoSelecionado(escolha, props.entradas)}
          onClick={() => (setEscolha(props.entradas), setValor(""), setBusca())}
        >
          <img src={Entrada} alt="Imagem Entradas" />
          {props.entradas}
        </button>
        <button
          className={botaoSelecionado(escolha, props.massas)}
          onClick={() => (setEscolha(props.massas), setValor(""), setBusca())}
        >
          <img src={Massa} alt="Imagem Massas" />
          {props.massas}
        </button>
        <button
          className={botaoSelecionado(escolha, props.carnes)}
          onClick={() => (setEscolha(props.carnes), setValor(""), setBusca())}
        >
          <img src={Carne} alt="Imagem Imagem" />
          {props.carnes}
        </button>
        <button
          className={botaoSelecionado(escolha, props.bebidas)}
          onClick={() => (setEscolha(props.bebidas), setValor(""), setBusca())}
        >
          <img src={Bebidas} alt="Imagem Bebidas" />
          {props.bebidas}
        </button>
        <button
          className={botaoSelecionado(escolha, props.saladas)}
          onClick={() => (setEscolha(props.saladas), setValor(""), setBusca())}
        >
          <img src={Saladas} alt="Imagem Saladas" />
          {props.saladas}
        </button>
        <button
          className={botaoSelecionado(escolha, props.sobremesas)}
          onClick={() => (
            setEscolha(props.sobremesas), setValor(""), setBusca()
          )}
        >
          <img src={Sobremesa} alt="Imagem Sobremesa" />
          {props.sobremesas}
        </button>
      </Caixa_botao>
      <Caixa_Input>
        <Buscar_Input
          value={valor}
          type="text"
          onChange={(event) =>
            setBusca(
              handleFiltrarComida(event.target.value),
              setEscolha(renderBusca(busca)),
              setValor()
            )
          }
          placeholder="Pesquise aqui um dos pratos do nosso cardápio"
        />
        <h3>Cardápio</h3>
      </Caixa_Input>
      <Main entrada={escolha} entradaInput={renderBusca(busca)} />
    </Container_Escolha>
  );
};

export default EscolhaDoUsuario;
