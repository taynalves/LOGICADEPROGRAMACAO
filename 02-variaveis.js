// Criando variáveis com "var" (var nome_variavel = <valor>;) 
var nome = "Tibúrcio"; 
console.log("Meu nome é", nome); 
var idade = 23; 
console.log("Meu nome é", nome, ", e eu tenho ", idade, "anos"); 
idade = idade + 1; 
console.log("Meu nome é", nome, ", e agora eu tenho ", idade, "anos");
console.log("---------------------------------")

//JavaScript trabalha com sistema case sensitive (maiscula sao diferentes de minuculas)
console.log("Criando uma variavel Teste e tentando acessar como testE.")
let Teste = "variavel teste!"
// console.log(testE);
console.log(Teste);

//REGRAS PARA NOMEAR IDENTIFICADORES (VARIAVEIS)
//Podem iniciar com 'A' - 'Z','a' 'z' , '_' ou '$'
let MinhaVariavel = 10;
let OutraVariavel = 2.65;
const _minhaConstante = "uma constante qualquer"
var $minhaVariavel = -5;

//Variáveis lógicas (boolean)
var nome = "Tayná"
var rica = false;
var eBiomedica = true;
console.log("Nome:",nome, " | É biomédica?", eBiomedica, " | É rica?", rica);


