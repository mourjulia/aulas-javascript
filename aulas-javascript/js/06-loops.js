/* Principais comandos de repetição
- while  --> ENQUANTO
- for    --> PARA

São comandos de uso geral, existem em praticamente
qualquer linguagem de programação*/

// Exemplo 1: while
let contador = 1;

while (contador <= 5) {
    console.log("Valor do contador é:" + contador);
    contador++; /*  ++ operador de incremento */
}

console.log("----=/n");

// Exemplo 2: for
for (let contador = 1; contador <= 10; contador++) {
    // alert("Oieee pela "+contador+" º vez");

    console.log("Oieee pela " + contador + " º vez");

}
console.log("Chega chato para caramba!!!")

/* Nomenclatura para variáveis de controle Embora possamos dar 
qualquer nome (como contador por exemplo), geralmente são usadas
as letras i, j ou k (ou outras letras se for necessário).  */

for (let i = 1; i <= 3; i++) {
    console.log("Valor de i é: " + i)
}

/* LOOPS exclusivos do JS para estruturas de dados*/

// for/of -> loop para arrays
const nomes = ["lana", "nathy", "clara", "ana", "leandra", "luisa"];


for (const nome of nomes) {
    console.log(nome);
}

console.log("-----");


// usanso o for tradicional 

// guardando o tamanho do array uma vez (fazendo cache array)

let quantidade = nomes.length
for (let i = 0; i < quantidade; i++) {

    // usamos i dentro dos colchetes como índice dinâmico do array
    console.log(nomes[i]);
}


// for/in  -> loop para objetos --- excluivo para objetos

const pessoa = {
    nome: "Fulaniho de beltrano",
    idade: 40,
    cidade: "São Paulo",
    estado: "SP",
    email: "fulaninho@gmail.com",
    time: "Vasco da gama",
}

for (const prop in pessoa) {
    // mostrar somente o nome da propriedade
    console.log(prop);

    // mostrar o valor da propriedade 
    console.log(pessoa[prop]);

}


console.log("------");

/*  Execícios

1) Faça um array chamado clientes contendo três objetos, cada um contendo
um "identificador" com valores 1, 2 e 3) e uma propriedade "nome" (com nomes
dos clientes: "Goku", "Naruto" e "Shiruy"

2) Faça um loop ()qualquer um do que vimos) e mostre no console os dados de 
cada cliente conforme a seguir:
-Cliente: Goku, id: 1
-Cliente: Naruto, id: 2
-Cliente: Shiryu, id: 3
*/





// let clientes = [
//         { 
//          nome: "Goku",
//          identificador: 1,
//         },
//         {
//         nome: "Naruto",
//         identificador: 2, 
//         },
//         {  
//         nome: "Shiryu",
//         identificador: 3, 
//         }
//   ];

//   for (const cliente of clientes) {
//     console.log(clientes);
// }



const clientes = [
    { 
        nome: 'Goku',
        identificador: 1
     },
    {
        nome: 'Naruto',
        identificador: 2
    },
    {
        nome: 'Shiryu',
        identificador: 3
        
    }
  ];

  for (const cliente of clientes) {
    //    console.log(cliente);
    //    👆👆👆fazer conexão para mostrar no console 
       

    console.log(`Cliente: ${cliente.nome}, id: ${cliente.identificador}`);
  }

