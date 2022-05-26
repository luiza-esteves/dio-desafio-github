const alunos = [
    {
        nome: 'Luiza',
        nota: 20,
        turma: '3a'
    },
    {
        nome: 'Maria',
        nota: 80,
        turma: '3a'
    },
]
function alunosAprovados(arr, media){
    let aprovados = [];
    for (let i=0; i<arr.lenght;i++){
        const {nota, nome} = arr[i];
        if(nota>=media){
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 30))