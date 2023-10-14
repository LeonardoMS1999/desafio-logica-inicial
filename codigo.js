var nomeDoHeroi = prompt("Por favor, insira o nome do Herói:");

var nivelDoHeroi = prompt("Agora, insira o nível do Herói:");
nivelDoHeroi = parseInt(nivelDoHeroi);

if (nivelDoHeroi <= 1000) {
    console.log("O Herói de nome " + nomeDoHeroi + " está no nível de Ferro");
} else if (nivelDoHeroi >= 1001 && nivelDoHeroi <= 2000) {
    console.log("O Herói de nome " + nomeDoHeroi + " está no nível de Bronze");
} else if (nivelDoHeroi >= 2001 && nivelDoHeroi <= 5000) {
    console.log("O Herói de nome " + nomeDoHeroi + " está no nível de Prata");
} else if (nivelDoHeroi >= 5001 && nivelDoHeroi <= 7000) {
    console.log("O Herói de nome " + nomeDoHeroi + " está no nível de Ouro");
} else if (nivelDoHeroi >= 7001 && nivelDoHeroi <= 8000) {
    console.log("O Herói de nome " + nomeDoHeroi + " está no nível de Platina");
} else if (nivelDoHeroi >= 8001 && nivelDoHeroi <= 9000) {
    console.log("O Herói de nome " + nomeDoHeroi + " está no nível de Ascendente");
} else if (nivelDoHeroi >= 9001 && nivelDoHeroi <= 10000) {
    console.log("O Herói de nome " + nomeDoHeroi + " está no nível de Imortal");
} else {
    console.log("O Herói de nome " + nomeDoHeroi + " está no nível de Radiante");
}
