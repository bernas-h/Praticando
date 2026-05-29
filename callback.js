function soma(a,b){
  return a + b;
};
function multiplica(a,b){
  return a * b;
};
function calcula(callback, ValorA,ValorB){
  return callback(ValorA,ValorB);
}
console.log(calcula(soma,2,3));
console.log(calcula(multiplica,2,3));

const userID = "12345";
const avisaUsuario = (userID) => {
  console.log(`A sessão de ${userID} está inativa.`);
};
setTimeout(() => avisaUsuario(userID), 3000);