
let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
/*mas so estamos pegando o elemento nao valor se quisermos o valor fazemos;
 usamo o .value no caso so vai RECEBER o valor que o usuario mandar*/

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    /*nossa funcao com a atribuicao da variavel que recebeu o valor*/
    let qddTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qddTotalCerveja = cervejaPP(duracao) * adultos;
    let qddTotalbebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);
    console.log(qddTotalCarne);

    
    resultado.innerHTML = `<p>${qddTotalCarne / 1000} kg de carne</p>`
    resultado.innerHTML += `<p>${parseInt(qddTotalCerveja / 355)} latas de cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qddTotalbebidas / 2000)}pets 2l de bebidas</p>`
}

/*o argumento serve como valor para uma condicao ser um valor*/
function carnePP(duracao) {
  /*let carne = 400;
    if(duracao >= 6)
    carne = 650; */
    if(duracao >= 6) {
        return  650;
    } else {
        return 400;
    }
}

function bebidasPP(duracao) {
    if(duracao >= 6) {
        return  1500;
    } else {
        return 1200;
    }
}

  
function cervejaPP(duracao) {
    if(duracao >= 6) {
        return  2000;
    } else {
        return 1200;
    }
}

  
