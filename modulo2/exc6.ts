abstract class Forma {
    abstract area(): number;
}

class Quadrado extends Forma {
    lado: number;

    constructor(lado: number) {
        super();
        this.lado = lado;
    }

    area() {
        return this.lado * this.lado;
    }
}

const quadrado = new Quadrado(4);
console.log(quadrado.area()); // 16
