//Cálculo de IMC *****************************
const nomeImc = "Carlos";
const peso = 84;
const altura = 1.88;

const imc = peso / (altura * altura);

if(imc >= 30) {
    console.log(`${nomeImc} você está acima do peso`);
} else {
    console.log(`${nomeImc} você não está acima do peso\n`);
}