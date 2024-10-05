//Teste Rankeadas
function calcularNivel(vitorias, derrotas) {

    let saldoDeVitorias = vitorias - derrotas;
    let nivel = "";

    if (saldoDeVitorias < 0) {
        nivel = "Ferro"; 
    } else if (saldoDeVitorias >= 0 && saldoDeVitorias <= 10) {
        nivel = "Ferro";
    } else if (saldoDeVitorias >= 11 && saldoDeVitorias <= 20) {
    nivel = "Bronze";
    } else if (saldoDeVitorias >= 21 && saldoDeVitorias <= 50) {
    nivel = "Prata";
    } else if (saldoDeVitorias >= 51 && saldoDeVitorias <= 80) {
    nivel = "Ouro";
    } else if (saldoDeVitorias >= 81 && saldoDeVitorias <= 90) {
    nivel = "Diamante";
    } else if (saldoDeVitorias >= 91 && saldoDeVitorias <= 100) {
    nivel = "Lendario";
    } else if (saldoDeVitorias >= 101) {
        nivel = "Imortal";
    }

        return { saldoDeVitorias, nivel };        
}

let vitorias = 68; 
let derrotas = 17;
let resultado = calcularNivel(vitorias, derrotas);

console.log("A quantidade de partidas ganhas pelo o Heori foi de " + vitorias);
console.log("E seu nivel é " + resultado.nivel);