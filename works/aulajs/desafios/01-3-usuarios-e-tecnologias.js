const usuarios = [
    {nome: "Carlos", tecnologias: ["HTML", "CSS"]},
    {nome: "Jasmine", tecnologias: ["JavaScript", "CSS"]},
    {nome: "Tuane", tecnologias: ["HTML", "Node.js"]}
]
const contaUsuarios = usuarios.length

console.log(`\n ### Impressão com a função "join" ###`)
    // Com a função "join"
for(let i = 0; i < contaUsuarios; i++) {
    let tecnologias = usuarios[i].tecnologias.join(", ")
    console.log(`${usuarios[i].nome} trabalha com ${tecnologias}.`)
}

    // Sem a função "join"
console.log(`\n ### Impressão sem a função "join" ###`)

for (let y = 0; y < contaUsuarios; y++) {
    let tecnologias = usuarios[y].tecnologias
    console.log(`${usuarios[y].nome} trabalha com ${tecnologias}.`)
}

    // Sem a função "join" e adicionando espaço após a ","
console.log(`\n #### Sem a função "join" e corrigindo o espaço após a ","`)

for (let i = 0; i < usuarios.length; i++) {
    let tecs = ""
    for(let x = 0; x < usuarios[i].tecnologias.length; x++) {
        if(x == 0) {
            tecs += usuarios[i].tecnologias[x]
        } else {
            tecs += ", " + usuarios[i].tecnologias[x]
        }
    }
    console.log(`${usuarios[i].nome} trabalha com ${tecs}`)
}

for(let tec of usuarios){
    const busca = tec === "CSS"
    if(busca){
        console.log(buscaCSS.nome + "ENCONTRAMOS O Noje.js!!!!!!!!!!!")
    }
}


console.log(`*********************************`)

const carro = ["chevrolet", "volkswagen", "fiat", "renault", "pegeout", "fusca"]

for(let gordo of carro){
    const veiculo = gordo ==="fusca"
    if(veiculo) {
        console.log(`ANIMA MANO, JÁ ESTÁ MANJANDO A BASE PRINCIPAL`)
    }

}