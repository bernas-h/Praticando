let contador=0;
for(let i =1; i<=30; i++){
    const numero = Math.floor(Math.random() * (50-1+1) + 1);
    if(numero%5===0){
        continue;
    }
    contador++;
} 
    console.log(contador);

    
const texto='arara';

console.log(texto.length);

let textoInvertido='';

for(let i = texto.length-1; i>=0; i--){
    textoInvertido+=texto[i];
}
const result = texto===textoInvertido ? `${texto} é um palíndromo` : `${texto} não é um palíndromo`;
console.log(result);


for(let i=1; i<=20; i++){
    if(i===10){
        console.log("Número proibido encontrado. Encerrando...");
        break;
    }
    console.log(i);
}