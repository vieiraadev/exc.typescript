interface Configuracao {
    usuario: string;
    senha: string;
    tempoExpiracao: number;
}

type ConfiguracaoOpcional = Partial<Configuracao>;

let config: ConfiguracaoOpcional = {
    usuario: "admin"
};
