numSecreto=8;
numAleat=0;
tentativas=0;

while(numSecreto!==numAleat){
    numAleat=Math.floor(Math.random()*(50-1+1)+1);
    tentativas++;
}
console.log(`O número secreto era ${numSecreto}. Foram necessárias ${tentativas} tentativas.`);

let numeroRandom;

do{
    numeroRandom=Math.floor(Math.random()*(50-1+1)+1);
    console.log(numeroRandom);
}while(numeroRandom%2!==0);

console.log(numeroRandom);


