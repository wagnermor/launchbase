/* Intro >> Crie um programa para realizar operações bancárias na conta de um usuário.
>> Comece criando um objeto com o nome do usuário, suas transações e saldo.
>> As transações (transactions) devem iniciar como um array vazio [] e o saldo (balance) em 0 (zero).*/
const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
}
//=====================================================
/* Adicionar transações >> Crie uma função createTransaction para adicionar uma nova transação no array de transações de um usuário, essa função deve receber como parâmetro um objeto de transação que tem o seguinte formato: 
{
    type: 'credit',
    value: 50.5
}
>> O type pode ser credit para créditos e debit para débitos da conta do usuário.
>> Quanto uma transação for do tipo credit ela deve também somar o valor do crédito no saldo (balance) do usuário.
>> Se for uma transação do tipo debit ela deve subtrair o valor do débito no saldo (balance) do usuário.
>> Dica.: Você pode usar o método user.transactions.push(transaction) para adicionar um novo item no array de transações.*/
function createTransaction(newTransaction) {
    //
}
