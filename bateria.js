const bateria = 10;
 
const statusBateria = (bateria < 20) 
  ? "Crítica" 
  : (bateria <= 80) 
    ? "Moderada" 
    : "Cheia";
 
console.log(statusBateria);