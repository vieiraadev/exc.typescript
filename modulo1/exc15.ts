function esperarUmSegundo(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Terminou de esperar!");
        }, 1000);
    });
}

async function executar(): Promise<void> {
    let mensagem = await esperarUmSegundo();
    console.log(mensagem);
}

executar();
