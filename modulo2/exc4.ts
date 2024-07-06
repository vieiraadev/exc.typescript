interface Pessoa {
    nome: string;
    idade: number;
}

type ChavesDePessoa = keyof Pessoa; // "nome" | "idade"
