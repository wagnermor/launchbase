function pulaLinha() {
    console.log(`\n`)
}

const usuarios = [
    {nome: "Carlos", tecnologias: ["HTML", "CSS", "C#"]},
    {nome: "Jasmine", tecnologias: ["JavaScript", "CSS", "C++"]},
    {nome: "Tuane", tecnologias: ["HTML", "Node.js", "CSS"]},
    {nome: "Ramone", tecnologias: ["PHP", "Go", ".NET"]}
]
function checaUsuarioUsaCSS(users) {
    for(let tec of users.tecnologias) {
        encontrei = tec === "CSS"
        if(encontrei) {
            return true
        }
    }
    return false
}
pulaLinha()
for(let user of usuarios) {
    if(checaUsuarioUsaCSS(user)){
        console.log(`O(a) usuário(a) ${user.nome} trabalha com CSS`)
    }
}

pulaLinha()
for(i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaUsuarioUsaCSS(usuarios[i])
    if(usuarioTrabalhaComCSS) {
        console.log(`O(a) usuário(a) ${usuarios[i].nome} trabalha com CSS`)
    }
}