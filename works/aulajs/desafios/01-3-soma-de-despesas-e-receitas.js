function pulaLinha(texto) {
    console.log(`\n #################### ${texto} #################### \n`)
}

const usuarios = [
    {
        nome: "Salvio",
        receitas: [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9]
    },
    {
        nome: "Marcio",
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0]
    },
    {
        nome: "Lucia",
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
    },
    {
        nome: "Anderson",
        receitas: [150, 200, 100, 150],
        despesas: [50, 20, 10, 30]
    }
];
// calcula a soma de receitas
// calcula a soma de despesas de usuarios
// retorna saldo (receitas - despesas)
function calculaSaldo(receitas, despesas){
    const somaReceitas = somaNumeros(receitas)
    const somaDespesas = somaNumeros(despesas)

    return somaReceitas - somaDespesas
}

function somaNumeros(numeros) {
    let soma = 0;
    for(let number of numeros) {
        soma += number
    }

    return soma
}

pulaLinha("DESAFIO")
for(let users of usuarios) {
    const saldo = calculaSaldo(users.receitas, users.despesas)
    
    const saldoPositivo = saldo >= 0
    
    let positivoOuNegativo;
    if(saldoPositivo) {
        positivoOuNegativo = "POSITIVO"
    } else {
        positivoOuNegativo = "NEGATIVO"
    }
    console.log(`${users.nome} possui o saldo ${positivoOuNegativo} de R$ ${saldo.toFixed(2)}`)
}
console.log("\n")
//////////////////////////////////////////////////// FIM

pulaLinha("TRABALHANDO COM ARRAYS E 'FOR OF'")

let contador = 1
for(let theUser of usuarios){
    let totalReceita = 0
    let totalDespesa = 0
    let saldo = 0
    
    for(receita of theUser.receitas){
        totalReceita += receita
    }

    for(despesa of theUser.despesas) {
        totalDespesa += despesa
    }
    saldo = totalReceita - totalDespesa

    console.log(`${contador}º) Total de receita/${theUser.nome} (${theUser.receitas.join(" + ")}) = ${totalReceita.toFixed(2)}`)
    
    console.log(`${contador}º) Total de despesa/${theUser.nome} (${theUser.despesas.join(" + ")}) = R$ ${totalDespesa.toFixed(2)}`)
    
    console.log(`${contador}º) Saldo/${theUser.nome} (R$ ${totalReceita.toFixed(2)} - R$ ${totalDespesa.toFixed(2)}) = R$ ${saldo.toFixed(2)}\n`)
    
    contador++
}

/* ### IMPRIMINDO O ARRAY RECEITAS COM O RESULTADO DA SOMA NA MESMA LINHA "FOR OF" DENTRO DE "FOR OF": */
pulaLinha("TRABALHANDO COM ARRAYS E 'FOR OF' II")
contador = 1
for(let theUsers of usuarios){
    let totalReceitas = 0;
        //Imprimindo e somando arrays de receitas
    for(numeros of theUsers.receitas) {
        totalReceitas += numeros
    }
    console.log(`${contador++}º) Receita/${theUsers.nome} (${theUsers.receitas.join(" + ")}) = ${totalReceitas.toFixed(2)}`);
}
    
        // Imprimindo e somando arrays de despesas
console.log(` ------------------------------------- `)
contador = 1        
for(let theUsers of usuarios) {
    let totalDespesas = 0
    for(numeros of theUsers.despesas) {
        totalDespesas += numeros
    }
    console.log(`${contador++}º) Despesa/${theUsers.nome} (${theUsers.despesas.join(" + ")}) = ${totalDespesas.toFixed(2)}`)
}

pulaLinha("FIM")
