/******************* 
                Lista de Exercícios 
*******************/

//Dada matriz abaixo, faça um programa em JavaScript que exiba ao usuario os elementosda sua diagonal principal

// |  3  5  8  |
// |  1  9  2  |
// |  7  1  4  |


var matriz = [
    [3, 5, 8],
    [1, 9, 2],
    [7, 1, 4],
];

console.log("***********************");

console.table(matriz);
var matriz = [
    [3, 5, 8],
    [1, 9, 2],
    [7, 1, 4],
  ];
  
  console.log("-------------------------------");
  
  console.table(matriz);
  
  for (let linha = 0; linha < matriz.length; linha++) {
    for (let coluna = 0; coluna < matriz[0].length; coluna++) {
      console.log(
        `Matriz [${linha[0][1][2]}][${coluna[0][1][2]}] = ${
          matriz[linha[0][1][2]][coluna[0][1][2]]}
        }`
      );
    }
  }