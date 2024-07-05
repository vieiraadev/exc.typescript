interface Produto {
    id: number;
    nome: string;
    preco: number;
    descricao: string;
}

type ProdutoBasico = Pick<Produto, "id" | "nome">;

let produto: ProdutoBasico = {
    id: 1,
    nome: "Notebook"
};
