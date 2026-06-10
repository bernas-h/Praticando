const arr1 = [[1, 2], 3, 4];

const copiaArray = (arr) => {
    const copia = [];
    arr.forEach((elem) => {
        if (Array.isArray(elem)) {
            copia.push(copiaArray(elem));
        } else {
            copia.push(elem);
        }
    });
    return copia;
};
    const arr2 = copiaArray(arr1);
    arr1[0][0] = 5;

    console.log(arr1);
    console.log(arr2);

    const cpfs = ["12345678901", "10987654321", 12312312312, "32132132132", 45645645645];

    const result = cpfs.map(cpf =>{
    /* Reduzido fica assim:

    typeof cpf === "string" ? cpf : cpf.toString())
    
    */

        if(typeof cpf === "string"){
            return cpf;
        }else{
            return cpf.toString();
        }
    })
    console.log(result);