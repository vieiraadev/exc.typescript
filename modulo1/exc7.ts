class Banco {
    private saldo: number = 0;

    depositar(valor: number): void {
        this.saldo += valor;
    }

    sacar(valor: number): void {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente");
        }
    }

    consultarSaldo(): number {
        return this.saldo;
    }
}

