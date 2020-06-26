const alunosDaTurmaA = [
    {
        nome: "Mayk",
        nota: 0
    },
    {
        nome: "Diego",
        nota: 0
    },
    {
        nome: "Dimayk",
        nota: 0
    },
    {
        nome: "Diana",
        nota: 4
    }
];

const alunosDaTurmaB = [
    {
        nome: "Wagner",
        nota: 10
    },
    {
        nome: "Ale",
        nota: 10
    },
    {
        nome: "Thiago",
        nota: 10
    }
];

function calculaMedia(aluno) {
    // return(aluno[0].nota + aluno[1].nota + aluno[2].nota) / 3;
    let alunos = aluno.length
    let notas = 0
    for(let i = 0; i < alunos; i++) {
        notas += aluno[i].nota
    }
    return notas / alunos
};

function mostraMensagem(media, turma) {
    if(media > 5) {
        console.log(`A média da turma ${turma} foi de ${media} :). Parabéns!`);
    } else {
        console.log(`A média da turma ${turma} é menor que 5!\nA média foi de ${media}:(`);
    }
}

const mediaAlunosDaTurmaA = calculaMedia(alunosDaTurmaA);
const mediaAlunosDaTurmaB = calculaMedia(alunosDaTurmaB);

mostraMensagem(mediaAlunosDaTurmaA, "A");