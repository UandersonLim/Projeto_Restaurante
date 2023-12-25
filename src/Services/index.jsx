import { produtos } from "../Data_Collection/index.jsx";

export const botaoSelecionado = (escolha, botao) => {
  return escolha === botao ? "cor_botao" : null;
};

export const filtrarProduto = (categoria) => {
  produtos.filter((produto) =>
    produto.categoria === categoria ? categoria : null
  );
};

export const handleFiltrarComida = (categoria) => {
  return produtos.filter((produto) =>
    produto.nome.toLocaleLowerCase().includes(categoria.toLocaleLowerCase())
  );
};

export const renderBusca = (busca) => {
  for (let i in busca) {
    return busca[i].nome;
  }
};
