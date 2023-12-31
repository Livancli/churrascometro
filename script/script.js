// Carne - 500g por pessoa + de 6 horas - 750
// Cerveja - 2200ml por pessoa + de 6 horas - 3000ml 
// Refrigerante/água - 1000ml por pessoa + de 6 horas 1500ml
//crianças valem por 0,5


let inputAdultos = document.getElementById('adultos');
let inputCriancas = document.getElementById('criancas');
let inputDuracao = document.getElementById('duracao');

let resultado = document.getElementById('resultado');


function calcular(){

  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;


  let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
  let qtdTotalCerveja = cervejaPP(duracao) * adultos;
  let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

  resultado.innerHTML = `<p>${qtdTotalCarne/1000}kg de Carne.</p>`
  resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja/355)} Latas de Cerveja (350ml).</p>`
  resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas/2000)} Pet's de Bebidas (Refrigerante/Suco).</p>`
}

function carnePP(duracao) {
  if(duracao >= 6){
    return 750;
  } else{
    return 500;
  }
}

function cervejaPP(duracao) {
  if(duracao >= 6){
    return 3000;
  } else{
    return 2200;
  }
}

function bebidasPP(duracao) {
  if(duracao >= 6){
    return 1500;
  } else{
    return 1000;
  }
}

