// Construção e impressão de objetos ***********************************
const empresa ={
    nome: "Rocketseat",
    cor: "Roxo",
    Foco: "Programação",
    endereco:{
        rua: "Rua Guilherme Gembala",
        numero: 260
    }
}


const usuario = {
    nome: "Diego",
    empresa: {
        nome: "Rocketseat"
    }
}

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}.\n`)

console.log(`O nome do usuário é ${usuario.nome}.`)