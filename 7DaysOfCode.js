// Dia 1 - Operações Booleanas

let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';


if (numeroUm == stringUm) {
    console.log(`As variáveis ${numeroUm} e ${stringUm} tem o mesmo valor, mas tipos diferentes`);
} else {
    console.log(`As variáveis ${numeroUm} e ${stringUm} 
    não tem o mesmo valor`);
}

if (numeroTrinta === stringTrinta) {
    console.log(`As variáveis ${numeroTrinta} e ${stringTrinta} tem o mesmo valor, mas tipos diferentes`);
} else {
    console.log(`As variáveis ${numeroTrinta} e ${stringTrinta} não tem o mesmo valor`);
}

if (numeroDez == stringDez) {
    console.log(`As variáveis ${numeroDez} e ${stringDez} tem o mesmo valor, mas tipos diferentes`);
} else {
    console.log(`As variáveis ${numeroDez} e ${stringDez
    } não tem o mesmo valor`);
}


// Dia 2 - Variáveis

let nome = prompt("Qual seu nome?");
let idade = prompt("Quantos anos você tem?");
let linguagem = prompt("Qual linguagem de programação você está aprendendo?");

console.log(`Olá ${nome}, você tem ${idade} anos e já está aprendedo ${linguagem}!`);

let resposta = prompt(`Você está gostando de aprender ${linguagem}? Responda com número 1 para SIM ou 2 para NÃO.`);

if (resposta == 1) {
    console.log("Muito bom! Continue estudando e você terá muito sucesso.");
} else if (resposta == 2) {
    console.log("Ahh que pena... Já tentou aprender outras linguagens?");
} else { 
    console.log("Resposta inválida! Tente novamente.");
}

// Dia 3 - Fluxo de Decisão

let escolhaArea = prompt("Você deseja seguir na área de Front-End ou Back-End? (Digite 'Front-End' ou 'Back-End')");
let escolhaTecnologia = '';

if (escolhaArea ==='Front-End') {
    let tecnologiaFront = prompt("Ótima Escolha! Você quer aprender React ou Vue?");
    escolhaTecnologia = tecnologiaFront;
    console.log(`Você escolheu ${escolhaTecnologia} para Front-End.`);
} else if (escolhaArea ==='Back-End') {
    let tecnologiaBack = prompt("Ótima Escolha! Você quer aprender C# ou Java?");
    escolhaTecnologia = tecnologiaBack;
    console.log(`Você escolheu ${escolhaTecnologia} para Back-End.`);
} else {
    console.log("Opção de área inválida. Por favor, recarregue a página e tente novamente.");   
} 

let escolhaCarreira = prompt("Você deseja seguir se especializando na área escolhida (digite 1) ou se desenvolver para se tornar Fullstack (digite 2)?");

if (escolhaCarreira === '1') {
    console.log("Ótimo, focar em uma área é uma excelente estratégia!");
} else if (escolhaCarreira === '2') {
    console.log("Perfeito! Ser Fullstack abre muitas portas, é importante saber um pouco de tudo.");
} else {
    console.log("Opção de caminho de carreira inválida. Por favor, recarregue a página e tente novamente.");
}

let novaTecnologia = prompt("Quais são as tecnologias que você deseja se especializar?");

while (novaTecnologia != 'não') {
    console.log(`Aprender ${novaTecnologia} é muito importante `);
    novaTecnologia = prompt("Tem mais alguma tecnologia que você gostaria de aprender?");
}

console.log('Muito bem! Continue se esforçando nos seus estudos.');


// Dia 4 - Mais Loops e Randomização

function gerarNumeroAleatório() {
    return Math.floor(Math.random() * (10 - 0));
}

let numeroSecreto = gerarNumeroAleatório();
let respostaNumero = '';

for(let numeroTentativas = 0; numeroTentativas < 3; numeroTentativas++) {
    respostaNumero = prompt('Adivinhe o número de 0 a 10: ');
    if (respostaNumero == numeroSecreto) {
        alert(`Parabéns! você acertou o número secreto ${numeroSecreto}.`);
        break;
    } else if (respostaNumero != numeroSecreto) {
        alert("Errou!");
    }
}

console.log(`Infelizmente suas chances acabaram, o número secreto era ${numeroSecreto}.`);

// Dia 5 - 

