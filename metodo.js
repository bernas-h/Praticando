const user ={
 nome: "Bernardo H",
 nasc: "1999-12-12"
};
user.calculaIdade= function calculaIdade(){
    const anoNasc = parseInt(this.nasc.slice(0,4));
    const idade = new Date().getFullYear() - anoNasc;
    console.log(`a idade é ${idade}`);
}
user.calculaIdade()


//acesse um array de objetos e imprima no terminal os nomes e status de ativação de cada pessoa.

const clientes = [
    {
        nome : "Bernardo",
        ativo: true,
    },
    {
        nome: "Ana",
        ativo: false
    },
    {
        nome: "João",
        ativo: true
    }
]
for (const cliente of clientes) {
    const status = cliente.ativo ? "ativo" : "inativo";
    console.log(`Nome: ${cliente.nome}, Status: ${status}`);
}