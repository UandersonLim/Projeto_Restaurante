import { Style_Cards, Box_Main } from "./style";
import Cards from "../Menu";
import { produtos } from "../../Data_Collection";


const Main = (props) => {


  return (
    <Box_Main>
      <Style_Cards>
        {console.log(props.entradaInput)}
        {produtos.map((produto) =>
          produto.categoria === props.entrada || produto.nome === props.entradaInput ? (
            <Cards
              key={produto.id}
              nome={produto.nome}
              categoria={produto.categoria}
              descricao={produto.descricao}
              preco={produto.preco}
              imagem={produto.imagem}
            /> 
            ) : null
        )}
      </Style_Cards>
      
    </Box_Main>
  );
};

export default Main;
