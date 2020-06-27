const classA = [
    {
        name: "Mayk",
        grade: 10
    },
    {
        name: "Diego",
        grade: 1
    },
    {
        name: "Dimayk",
        grade: 10
    },
    {
        name: "Diana",
        grade: 1
    },
    {
        name: "Rose",
        grade: 10
    },
    {
        name: "Jusiele",
        grade: 1
    }
];

const classB = [
    {
        name: "Wagner",
        grade: 10
    },
    {
        name: "Ale",
        grade: 1
    },
    {
        name: "Thiago",
        grade: 10
    }
];

function calculateAverage(student) {
    // return(student[0].grade + student[1].grade + student[2].grade) / 3;
    let students = student.length
    let grades = 0
    
    for(let i = 0; i < students; i++) {
        grades += student[i].grade
    }
    return grades / students
};

function sendMessage(average, turma) {
    if(average > 5) {
        console.log(`${turma} average: ${average.toFixed(1)} :). Congrats!`);
    } else {
        console.log(`${turma} average: ${average.toFixed(1)}. Is not good!`);
    }
}

const averageAlunosDaTurmaA = calculateAverage(classA);
const averageAlunosDaTurmaB = calculateAverage(classB);

function markAsFlunkeds(students) {
    student.flunked = false
    if(student.grade < 5) {
        student.flunked = true
    }
}

function sendMessageReprovado(student) {
    if(student.flunked) {
        console.log(`O(a) student(a) ${student.name} flunked!`)
    }
}

function studentsReprovados(students) {
    for(student of students) {
        markAsFlunkeds(student)
        sendMessageReprovado(student)
    }
}

sendMessage(averageAlunosDaTurmaA, "A");

studentsReprovados(classA)
