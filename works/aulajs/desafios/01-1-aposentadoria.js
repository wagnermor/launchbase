//Cálculo de aposentadoria ********************
const nome = "Rosana";
const sexo = "f";
const idade = 48;
const contribuicao = 23;

const calculoAposentadoria = idade + contribuicao;

const podeAposentar = `${nome}, você pode se aposentar!`;
const naoPodeAposentar = `${nome}, você ainda não pode se aposentar!`;


if(sexo === "M" || sexo === "m") {
    if(contribuicao >= 35 && calculoAposentadoria >= 95){
        console.log(podeAposentar);
    } else {
        console.log(naoPodeAposentar);
    }
} else if(sexo === "F" || sexo ==="f") {
    if(contribuicao >= 30 && calculoAposentadoria >= 85) {
        console.log(podeAposentar);
    } else {
        console.log(naoPodeAposentar);
    }
}

console.log(`\nSegundo código:`)

/* ****************************************************************************** */

    //Quando atribuimos as mesmas condições a uma variável, a variável passa a receber o valor true.
const homemPodeAposentar = (sexo === "M" || sexo === "m") && contribuicao >= 35 && idade + contribuicao >= 95;
const mulherPodeAposentar = (sexo === "F" || sexo === "f") && contribuicao >= 30 && idade + contribuicao >= 85;
    
//Nessa condicional estamos verificando se uma das variáveis possui o valor true
if(homemPodeAposentar || mulherPodeAposentar) {
    console.log(`${nome}, você pode se aposentar!`);/* Nesse caso dispensamos o uso da variável "podeAposentar", pois não há repetição da mensagem */
} else {
    console.log(`${nome}, você ainda não pode se aposentar!`);
}