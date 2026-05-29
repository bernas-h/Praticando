const calculaJuros=(valor, juros, tempo)=>{
  let taxaJuros = (juros/100)+1;
  return valor * Math.pow(taxaJuros, tempo);
}
    console.log(calculaJuros(1000, 5, 2));
