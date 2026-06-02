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
    arr[0][0] = 5;

    console.log(arr1);
    console.log(arr2);