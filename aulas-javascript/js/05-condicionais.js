/* Comandos condicionais mais comuns:
if    -> SE
else  ->SENÃO        */

// Exemplo 1: condicional simples

let numero = 5; 

if(numero > 10 ){
    console.log(numero);
}

// Exemplo 2: Condicional Composta 

let aluno = "Klaibert";
let idade = 45;

/*  Lógica: verificar se o aluno é menor de idade ou maior de idade */

if( idade < 18 ){
    console.log("É menor de idade");
    
} else {
    console.log("É maior de idade");
    
}

/* Exercícios (FAÇA AQUI) */

/* 1) Crie duas variáveis conforme a seguir:
Nota 1 (contendo um valor de 0 a 10)
Nota 2 (contendo outro valor de 0 a 10)

2) Crie uma variável chmada "média" que receberá um valor calculado da média das 
duas notas informadas. DICA: você deve somar as duas notas e DEPOIS dividir por 2

3) programe uma condicional que verifique o valor da média calculada, se a média 
for maior ou igual a 7, mostre "Aprovado", Caso contrário, mostre "reprovado"*/


let nota1 = 8; 
let nota2 = 2;

let media = (nota1 + nota2) /2 ;

if( media >= 7 ){
    console.log( "Aprovado" );   
} else {
    console.log( "Reprovado" );
}

/* (OUTRA OPÇÃO MAIS ABREVIADA👇👇👇)
ShortHand if/else "curto/abreviado"           
Usando o operador ternário   "?:"    */

let situacao = media >= 7 ? "Aprovado" : "Reprovado"
console.log(situacao);

