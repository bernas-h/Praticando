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

const produto = {
    nome: "Fone de ouvido" ,
    preco: 100,
    disponivel: true,
}

console.log(produto);

const configuracao = {
    tema: "Escuro",
    idioma: "PT-BR",
    notificacoes: true,
}
console.log("Tema: ",configuracao.tema);
console.log("Idioma: ", configuracao["idioma"]);

const receita = {
    nome: "Bolo de Chocolate",
    ingredientes: ["chocolate", "farinha", "açúcar", "ovos", "leite"],
    tempoPreparo: 60,
}
console.log(receita.ingredientes[2]);
receita.ingredientes.push("fermento");
console.log(receita.ingredientes);

const carro = {
  marca: 'Toyota',
  modelo: 'Corolla',
  ano: 2022,
  modeloAntigo: 'Corolla XEi'
};
delete carro.modeloAntigo;
console.log(carro);

const dispositivos = [
  { nome: 'Impressora', status: 'ativo' },
  { nome: 'Scanner', status: 'inativo' },
  { nome: 'Projetor', status: 'ativo' }
];

for (const dispositivo of dispositivos) {
  console.log(`Dispositivo: ${dispositivo.nome} | Status: ${dispositivo.status}`);
}

const maquina = {
  nome: 'Esteira Transportadora',
  funcionando: true,
    exibirStatus: function() {
        if(this.funcionando==true){
            console.log(`A máquina ${this.nome} está funcionando.`);
        }else{
            console.log(`A máquina ${this.nome} está parada.`);
        }
    }
};

maquina.exibirStatus();

function montarObjeto(arrPares) {
    const resultado = {};
 
    for (const [chave, valor] of arrPares) {
        resultado[chave] = valor;
    }
 
    return resultado;
}
 
const dados = [

    ['nome', 'João'],
    ['idade', 30],
    ['cidade', 'Curitiba']
];
 
console.log(montarObjeto(dados));

const relatorio = {
  temperatura: 50,
  vibracao: 40,
  pressao: 50,
  nivelRuido: 30
};

const categorias = Object.keys(relatorio);
const valores = Object.values(relatorio);
const entradas = Object.entries(relatorio);

console.log("Categorias avaliadas:", categorias);
console.log("Valores registrados:", valores);

console.log("\nDetalhamento:");
for (let [chave, valor] of entradas) {
  const status = valor > 50 ? "alerta" : "ok";
  console.log(`${chave}: ${valor} (${status})`);
}

const manutencao = {
  jan: 2,
  fev: 0,
  mar: 5,
  abr: 4,
  mai: 0,
  jun: 7
};

let totalDias = 0;
let mesesComParada = 0;

for (let mes in manutencao) {
  const dias = manutencao[mes];
  totalDias += dias;

  if (dias > 0) {
    mesesComParada++;
  }
}

console.log(`Total de dias parados: ${totalDias}`);
console.log(`Meses com manutenção registrada: ${mesesComParada}`);

if (totalDias > 20) {
  console.log("Status: Atenção! Acima do limite anual.");
} else {
  console.log("Status: Dentro do limite anual");
}

const curso = {
  titulo: "JavaScript Intermediário",
  estudantes: [
    { nome: "Bernardo", progresso: 85 },
    { nome: "Paulo", progresso: 40 },
    { nome: "Joao", progresso: 72 },
    { nome: "Bruna", progresso: 60 }
  ],

  gerarRelatorio: function () {
    let totalProgresso = 0;

    for (let estudante of this.estudantes) {
      const situacao = estudante.progresso >= 70 ? "Aprovado" : "Em andamento";
      console.log(`Estudante: ${estudante.nome} | Progresso: ${estudante.progresso}% | Situação: ${situacao}`);
      totalProgresso += estudante.progresso;
    }

    const media = (totalProgresso / this.estudantes.length).toFixed(2);

    console.log(`\nTotal de estudantes: ${this.estudantes.length}`);
    console.log(`Média geral da turma: ${media}%`);
  }
};

curso.gerarRelatorio();