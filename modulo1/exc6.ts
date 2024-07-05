function processarValor(valor: number | string): number | string {
    if (typeof valor === "number") {
        return valor * 2;
    } else {
        return valor.toUpperCase();
    }
}
