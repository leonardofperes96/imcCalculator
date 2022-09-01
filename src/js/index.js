// Elementos selecionados

// const imcForm = $('#imcForm');
// const inputPeso = $('#inputPeso');
// const inputAltura = $('#inputAltura');
// const resultado = $('#resultado');

const imcForm = document.querySelector('#imcForm');
const inputPeso = document.querySelector('#inputPeso');
const inputAltura = document.querySelector('#inputAltura');
const resultado = document.querySelector('.resultado');

// Funções

const calculoImc = (pesoValue, alturaValue) => {
  const calculo = pesoValue / (alturaValue * alturaValue);
  let classificacao;

  if (calculo <= 18.5) {
    classificacao = 'Seu peso está baixo!';
  }

  if (calculo >= 18.5 && calculo <= 24.9) {
    classificacao = 'Seu peso está ideal!';
  }

  if (calculo >= 25 && calculo <= 29.9) {
    classificacao = 'Você está com sobrepeso!';
  }

  if (calculo >= 30 && calculo <= 34.9) {
    classificacao = 'Obesidade Grau I';
  }

  if (calculo >= 35 && calculo <= 39.9) {
    classificacao = 'Obesidade Grau II';
  }

  if (calculo >= 40) {
    classificacao = 'Obesidade Grau III';
  }

  resultado.innerHTML = `Seu IMC é : ${calculo} ${classificacao}`;

  inputPeso.value = '';
  inputAltura.value = '';
};

// Eventos

imcForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const pesoValue = +inputPeso.value;
  const alturaValue = +inputAltura.value;

  if ((pesoValue && alturaValue) != 0) {
    calculoImc(pesoValue, alturaValue);
  } else {
    return;
  }
});
