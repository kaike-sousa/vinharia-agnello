// Marcielle

var nomeColaborador = prompt("Olá, digite seu nome: ");
while (!nomeColaborador || nomeColaborador.trim() === "") {
    nomeColaborador = prompt("Por favor, digite um nome válido: "); 
}

var nomeVinho = prompt("Digite o nome do vinho: ");
while (!nomeVinho || nomeVinho.trim() === "") {
    nomeVinho = prompt("Por favor, digite um nome de vinho válido: ");
}

var tipoVinho = prompt("Digite o tipo do vinho: Ex.: Branco, tinto, rosé, etc.");
while (!tipoVinho || tipoVinho.trim() === "") {
    tipoVinho = prompt("Por favor, digite um tipo de vinho válido: ");
}

var safra = prompt("Digite a safra: ");
while (!safra || safra.trim() === "") {
    safra = prompt("Por favor, digite uma safra válida: ");
}

var garrafasEstoque = prompt("Digite a quantidade de garrafas em estoque: ");
while (!garrafasEstoque || garrafasEstoque.trim() === "") {
    garrafasEstoque = prompt("Por favor, digite uma quantidade válida: ");
}

// Gabriel

alert("Cadastro realizado! Veja os detalhes no console.")

var classificacao;
if (parseInt(safra) >= 2020) {
    classificacao = 'Vinho jovem';
} else if (parseInt(safra) >= 2015 && parseInt(safra) < 2020) {
    classificacao = 'Vinho amadurecido';
} else {
    classificacao = 'Vinho antigo';
}

console.table({
    'Colaborador':nomeColaborador, 
    'Vinho':nomeVinho,
    'Tipo':tipoVinho,
    'Safra':safra,
    'Classificação':classificacao,
    'Estoque':garrafasEstoque
});

if (parseInt(garrafasEstoque) < 5) { console.log('** ATENÇÃO ** ESTOQUE BAIXO!'); }