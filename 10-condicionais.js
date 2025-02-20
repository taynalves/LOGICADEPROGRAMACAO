// Condicional simples com IF
var anoNascimento = 2003;

if(anoNascimento>2003){
    console.log("A pessoa nasceu depois de 2003.");
}

if(anoNascimento < 2003){
    console.log("A pessoa nasceu ante de 2003.");
}

if (anoNascimento == 2003) {
    console.log("A pessoa nasceu em 2003.");
}

// Condições simples com If-Else
var anoNascimento = 2005;
if(anoNascimento > 2000){
    console.log("A pessoa nasceu depois de 2000.")
} else {
    console.log("A pessoa nasceu em 2000 ou antes");
}

// Condições compostas com If
const login = "admin";
const senha = "12345";

var loginUser = "admin";
var senhaUser = "12345";

if(loginUser == login && senhaUser == senha){
    console.log("Acesso permitido!");
}else{
    console.log("Acesso negado!");
}

// Desvio condicional aninhado - IF-ELSEIF-ELSE
var semaforo = "vermelho";

if(semaforo == "verde"){
    console.log("Siga");
}else if(semaforo == "amarelo") {
    console.log("Atenção!");
}else {
    console.log("Pare!");
}

// Desvio condicional IF com bloco de comandos
var idade = 19

if (idade <=18){
    console.log("Entrei no if...")
idade++;
console.log("Incrementei a idade...");
console.log("A nova idade é", idade);
console.log("Agora estou saindo do bloco if");
}
console.log("Terminei");

// Criando variáveis locais com "let" (só existe dentro do bloco onde foram citadas)
var mes = "Agosto"
var dia = 15;

if(dia == 15 && mes == "Agosto"){
    let mensagem = "Hoje é dia 15 de Agosto";  
    console.log(mensagem)
}
console.log("Tentando acessar a variável local fora do bloco, vai dar erro!");
// console.log(mensagem); 


// Criando uma função com desvio condicional IF 
const desconto = (valorCompra) => {
    let desconto = 0;
    if(valorCompra >= 1000) {
        desconto = valorCompra * 12 / 100;
    }
    return desconto;
};

var totalCompra = 950;
console.log("Valor total da compra: R$",totalCompra,": : : Desconto: R$",desconto(totalCompra));

var totalCompra = 1800;
console.log("Valor total da compra: R$",totalCompra,": : : Desconto: R$",desconto(totalCompra));


// Desvio condicional IF inline (ternário)
// condição ? expressão se verdadeiro : expressão se falso 
var preco = 500;
var resultado = preco <= 100 ? "Tá barato!" : "Vish, ta muito caro!";


// O operador acima é o mesmo que escrever:
// if(preco <=100){
//     resultado = "Tá barato!"
// }else{
//     resultado = "Vish, ta muito caro!"
// }
console.log("Preço: R$", preco, "-", resultado);

//If ternário com somente uma expressão 
// condição && expressão 
var logado = true;
logado && console.log("Usuário está logado!");
