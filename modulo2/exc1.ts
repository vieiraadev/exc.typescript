function identidade<T>(arg: T): T {
    return arg;
}

let numero = identidade<number>(5);
let texto = identidade<string>("Hello");

