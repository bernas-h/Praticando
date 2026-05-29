function potencia(num, pow){
  let resultado = 1;
  for(let i = 0; i < pow; i++){
    resultado *= num;
  }
  return resultado;
}
    console.log(potencia(4, 3));

    const fatorial = function fatorial(num){
        if(num===0 || num===1) return 1;
        return num * fatorial(num - 1);
    }
        console.log(fatorial(5))

