

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoViagem(distancia, precoCombustivel) {
        return distancia * this.gastoMedioPorKm * precoCombustivel
    }
}

const uno = new Carro('Fiat', 'Prata', 1 / 12);
console.log(uno.calcularGastoViagem(70, 5));


const fusquinha = new Carro('Fiat', 'Azul', 1 / 10);
console.log(fusquinha.calcularGastoViagem(170, 5.60));