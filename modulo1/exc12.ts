function executarCallback(callback: () => void): void {
    console.log("Antes do callback");
    callback();
    console.log("Depois do callback");
}

executarCallback(() => console.log("Executando o callback"));
