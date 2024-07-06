function saudacao(nome: string, saudacao: string = "Olá") {
    return `${saudacao}, ${nome}!`;
}

console.log(saudacao("Vitor")); // "Olá, Vitor!"
