//Primera parte
/*function DevolucionColor(arrayOne,arrayTwo){
    for(let i = 0; i < arrayOne.length;i++){
        for(let j = 0; j < arrayTwo.length;j++){
            if(arrayOne[0] ===  arrayTwo[2]);
            return arrayTwo[2];
            break;
        }
    }
}

let array1 = ['rojo','amarillo','azul'];
let array2 = ['blanco','negro','rojo'];

let coincidencia = [DevolucionColor(array1,array2)];
console.log(array1);
console.log(array2);
console.log(coincidencia);*/


//Segunda parte
function DevolucionIgual(array3,array4){
    const coincidentes = [];
    for(let i = 0; i < array3.length;i++){
        for(let j = 0; j < array4.length;j++){
            if (array3[i] === array4[j]) {
                coincidentes.push(array3[i]);
                break; 
            }
        }
    }
    return coincidentes
}

let array3 = [4, 3, true, 'manzana'];
let array4 = ['pera', 3, false, true, 3, true];
console.log(array3);
console.log(array4);
console.log(DevolucionIgual(array3,array4));

