function somar(a: number, b: number): number;
function somar(a: string, b: string): string;
function somar(a: any, b: any): any {
    return a + b;
}

console.log(somar(5, 3)); // 8
console.log(somar("Olá, ", "Mundo!")); // "Olá, Mundo!"
