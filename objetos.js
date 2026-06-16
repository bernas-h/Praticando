const pessoa = {
    nome: "Bernardo",
    nascimento: "01/01/2000",
    cpf: "123.456.789-00",
    pontuacao: 1000,
    trofeus: ["speedrunner", "indie"]
};

    pessoa.trofeus[2]="explorer";
console.log(pessoa.nome);
console.log(pessoa.trofeus[0]);
console.log(pessoa.trofeus[2]);

delete pessoa.cpf;
console.log(pessoa);


