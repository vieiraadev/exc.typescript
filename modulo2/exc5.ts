type TipoCondicional<T> = T extends string ? "É uma string" : "Não é uma string";

type Teste1 = TipoCondicional<string>; // "É uma string"
type Teste2 = TipoCondicional<number>; // "Não é uma string"
