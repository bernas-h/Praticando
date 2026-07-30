const user ={
 nome: "Bernardo H",
 nasc: "1999-12-12",
 cpf: "12345678900",
 pontuacao: 4566,
 trofeus ["speedrunner", "explorer", "collector"]
};
user.calculaIdade= function calculaIdade(){
    const anoNasc = parseInt(this.nasc.slice(0,4));
    const idade = new Date().getFullYear() - anoNasc;
}
user.calculaIdade()