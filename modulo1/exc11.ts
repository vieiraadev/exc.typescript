let usuario: any = {
    perfil: {
        endereco: {
            rua: "Rua das Flores"
        }
    }
};

let rua = usuario?.perfil?.endereco?.rua;
console.log(rua); // "Rua das Flores"
