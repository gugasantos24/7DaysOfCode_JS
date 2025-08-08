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
    return Math.floor(Math.random() * (10 - 0 + 1) + 0);
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

// Dia 5 - Arrays e coleções + Dia 6 - Remoção de Arrays


let laticinios = [];
let congelados = [];
let doces = [];
let frutas = [];
let adicionarMais = 'sim';


while (adicionarMais != 'não') {
    adicionarMais = prompt("Você deseja adicionar ou remover mais item a lista de compras? Responda 'sim', 'não' ou ' remover.");
    
    while (adicionarMais != 'sim' && adicionarMais != 'não' && adicionarMais != 'remover') {
        alert("Resposta inválida!");
        adicionarMais = prompt("Você deseja adicionar ou remover mais item a lista de compras? Responda 'sim', 'não' ou ' remover.");
    } if (adicionarMais === 'não') {
        alert("Obrigado pelo preferência.");
        break;
    } 
    if (adicionarMais == 'sim'){
        item = prompt("Qual comida você quer adicicionar?");
        categoria = prompt("Em qual categoria ele pertence: laticinios, congelados, doces ou frutas?");

        if (categoria === 'laticinios') {
            laticinios.push(item);
        } else if (categoria === 'congelados') {
            congelados.push(item);
        } else if (categoria === 'doces') {
            doces.push(item);
        } else if (categoria === 'frutas') {
            frutas.push(item);
        } else {
            alert("Resposta inválida!");
        }
    } else if (adicionarMais === 'remover') {
        
        if (laticinios.length === 0 && congelados.length === 0 && doces.length === 0 && frutas.length === 0);
            alert("O carrinho de compras esta vazio.");
        } else {
            remover = prompt(`Seu carrinho de compras possui:\n Laticínios:${laticinios}\n Congelados:${congelados}\n Doces:${doces}\n Frutas:${frutas}, qual item você deseja remover?`);
        
        if (laticinios.indexOf(remover) != -1) {
            laticinios.splice(laticinios.indexOf(remover), 1);
            alert(`O item ${remover} foi removido.`);
        } else if (congelados.indexOf(remover) != -1){
            congelados.splice(congelados.indexOf(remover), 1);
            alert(`O item ${remover} foi removido.`);
        } else if (doces.indexOf(remover) != -1) {
            doces.splice(doces.indexOf(remover), 1);
            alert(`O item ${remover} foi removido.`);
        } else if (frutas.indexOf(remover) != -1) {
            frutas.splice(frutas.indexOf(remover), 1);
            alert(`O item ${remover} foi removido.`);
        } else {
            alert("Esse item não foi encontrado no seu carrinho!");
        }   
    }
}


console.log(`Seu carrinho de compras possui:\n Laticínios:${laticinios}\n Congelados:${congelados}\n Doces:${doces}\n Frutas:${frutas}`);


// Dia 7 - Funções em JavaScript


function soma(numeroUm, numeroDois) {
    return Number(numeroUm) + Number(numeroDois);
}

function subtracao(numeroUm, numeroDois) {
    return Number(numeroUm) - Number(numeroDois);
}

function multiplicacao(numeroUm, numeroDois) {
    return Number(numeroUm) * Number(numeroDois);
}

function divisao(numeroUm, numeroDois) {
    return Number(numeroUm) - Number(numeroDois);
}

let numeroUm;
let numeroDois;
let operacao = '';

do {
    operacao = prompt("Qual operação você deseja realizar: 'soma', 'subtração', 'multiplicação', 'divisão'?");
    while (operacao != 'soma'&& operacao != 'subtração'&& operacao != 'multiplicação' && operacao != 'divisão');
    alert("Operação inválida!");
    operacao = prompt("Qual operação você deseja realizar: 'soma', 'subtração', 'multiplicação', 'divisão'?");
}

numeroUm = prompt("Digite o primeiro número:\n");
numeroDois = prompt("Digite o segundo número:\n");

switch(operacao) {
    case 'soma':
        console.log(`O resultado da soma entre ${numeroUm} e ${numeroDois} é igual a ${soma(numeroUm, numeroDois)}`);
        break;
    case 'subtração':
        console.log(`O resultado da subtração entre ${numeroUm} e ${numeroDois} é igual a ${subtracao(numeroUm, numeroDois)}`);
        break;
    case 'multiplicação':
        console.log(`O resultado da multiplicação entre ${numeroUm} e ${numeroDois} é igual a ${multiplicacao(numeroUm, numeroDois)}`);
        break;
    case 'divisão':
        console.log(`O resultado da divisão entre ${numeroUm} e ${numeroDois} é igual a ${divisao(numeroUm, numeroDois)}`);
        break;
}


console.log("Até a proxima!");


