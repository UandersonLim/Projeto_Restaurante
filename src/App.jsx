import GlobalStyled from "./GlobalStyle";
import Banner from "./Components/Banner";
import EscolhaDoUsuario from "./Components/Escolha_Do_Usuario";

function App() {
  return (
    <>
      <GlobalStyled />
      <Banner />
      <EscolhaDoUsuario
        entradas={"Entradas"}
        massas={"Massas"}
        carnes={"Carnes"}
        bebidas={"Bebidas"}
        saladas={"Saladas"}
        sobremesas={"Sobremesas"}
      />
    </>
  );
}

export default App;
