interface Circulo {
    tipo: "circulo";
    raio: number;
}

interface Retangulo {
    tipo: "retangulo";
    largura: number;
    altura: number;
}

type Figura = Circulo | Retangulo;

function calcularArea(figura: Figura): number {
    switch (figura.tipo) {
        case "circulo":
            return Math.PI * figura.raio ** 2;
        case "retangulo":
            return figura.largura * figura.altura;
    }
}

let circulo: Circulo = { tipo: "circulo", raio: 10 };
let retangulo: Retangulo = { tipo: "retangulo", largura: 5, altura: 20 };

console.log(calcularArea(circulo)); // 314.1592653589793
console.log(calcularArea(retangulo)); // 100
