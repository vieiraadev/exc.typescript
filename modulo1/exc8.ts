type Parcial<T> = {
    [P in keyof T]?: T[P];
};

interface Usuario {
    nome: string;
    idade: number;
}

type UsuarioOpcional = Parcial<Usuario>;

