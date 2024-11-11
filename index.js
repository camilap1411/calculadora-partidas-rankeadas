function calcularSaldoDeVitorias(vitorias, derrotas) {
    var saldo = vitorias - derrotas;
    return saldo;
}

function calcularNivel(saldo) {
    if(saldo < 10) {
        return "Ferro";
    }

    if(saldo > 10 && saldo <= 20) {
        return "Bronze"
    }

    if(saldo > 20 && saldo <= 50) {
        return "Prata"
    }

    if(saldo > 50 && saldo <= 80) {
        return "Ouro"
    }

    if(saldo > 80 && saldo <= 90) {
        return "Diamante"
    }

    if(saldo > 90 && saldo <= 100) {
        return "Lendário"
    }

    return "Imortal"
}

var saldoDeVitorias = calcularSaldoDeVitorias(67, 13);
var nivel = calcularNivel(saldoDeVitorias)


console.log("O Herói tem de saldo de " + saldoDeVitorias + " e está no nível " + nivel)