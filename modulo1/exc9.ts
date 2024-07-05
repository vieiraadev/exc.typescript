function ehString(valor: any): valor is string {
    return typeof valor === "string";
}

let valor: any = "Olá";
if (ehString(valor)) {
    console.log(valor.toUpperCase()); // Autocompletar reconhece valor como string
}
