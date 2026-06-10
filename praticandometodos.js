/*Mostrando o segundo item da lista de compras e alterando o último*/

const listaDeCompras = ['arroz', 'feijão', 'macarrão', 'tomate'];
 
console.log("Segundo item da lista:", listaDeCompras[1]);
 
listaDeCompras[listaDeCompras.length - 1] = 'fruta';
/*Como o índice do array começa em 0, para acessar o último elemento usamos o .length - 1 */

console.log("Lista após modificação:", listaDeCompras);

/*Colocando os valores das despesas de casa num array e somando seus valores para conseguir o total.*/

const despesas = [120, 80, 45.5, 200, 60];
 
let total = 0;
 
for (let i = 0; i < despesas.length; i++) {
  total += despesas[i];
}
 
console.log(`Total de despesas: R$ ${total}`);

/* Inserindo o nome dos estudantes no array e mostrando-os com for...of */

const estudantes = ['Carla', 'João', 'Marina', 'Lucas', 'Beatriz'];

for (const nome of estudantes) {
  console.log("Estudante:", nome);
}

/* Utilizando o forEach para mostrar as mensagens */

const mensagens = ['Pedido confirmado', 'Pagamento aprovado', 'Produto enviado'];

mensagens.forEach(msg => {
  console.log("Notificação:", msg);
});

/* Criando uma lista de tarefas e utilizando os métodos push e pop para adicionar e remover tarefas. */

const tarefas = ['Estudar', 'Lavar roupa', 'Fazer compras'];

tarefas.push('Pagar boletos');
console.log("Lista após adicionar:", tarefas);

tarefas.pop();
console.log("Lista após remover a última tarefa:", tarefas);

