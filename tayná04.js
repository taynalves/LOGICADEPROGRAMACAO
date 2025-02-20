/*******************************************************************
 * |          |             Lista de exercícios 04
 * *****************************************************************/
// 1. Crie e imprima um vetor com 5 elementos numéricos.
// 2. Imprima na tela o 3º elemento do vetor.
// 3. Faça uma cópia do vetor original.
// 4. Altere o conteúdo do vetor cópia para que seus valores sejam o dobro dos valores do vetor original.
// 5. Crie uma matriz 3x3.
// 6. Imprima os valores da diagonal principal.

// ******************ATIVIDADE 01*****************
var numeros = [1, 2, 3, 4, 5];
console.table(numeros);

// *****************ATIVIDADE 02******************
console.table(numeros[2]);

// *****************ATIVIDADE 03*****************
var copia = numeros.slice();
console.log("copiando um vetor!");
console.table(copia);

// *****************ATIVIDADE 04******************
copia[0] = numeros[0] * 2;
copia[1] = numeros[1] * 2;
copia[2] = numeros[2] * 2;
copia[3] = numeros[3] * 2;
copia[4] = numeros[4] * 2;
console.table(copia);

// *****************ATIVIDADE 05********************
var matriz = [
    [9, 0, 1],
    [7, 1, 2],
    [6, 2, 8],
];
console.table(matriz);

// ****************ATIVIDADE 06*********************
console.log(matriz[0][0], "|", matriz[1][1], "|", matriz[2][2]);
    
    
    
