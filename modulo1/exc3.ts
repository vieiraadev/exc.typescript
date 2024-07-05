class Animal {
    fazerSom(): void {
        console.log("Som genérico");
    }
}

class Cachorro extends Animal {
    fazerSom(): void {
        console.log("Au Au");
    }
}
