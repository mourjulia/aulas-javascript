//Declarando um array

let alunos = ["Alana", "Júlia", "Nathalya", "Clara"];
 
//Exibindo a estrutura do array
console.log(alunos);
 
//Acessando um elemento específico do array
console.log(`${alunos[2]} é o vocalista da banda Slayer!`)

// mini exercicios 

/* 1) crie um novo array contendo 7 nomes de coisas que vc gosta (artistas, música, livro, comida...
inventa)

2) em seguida mostre no console uma frase personalizada indicando o nome do segundo, quinto e do [
setimo elemento do array. Use concatenação ou template string */
 
let gostos = ["Grimes", "Cálifornia", "1984", "Cinnamon Roll",
            "Suco de Laranja", "Jon Bovi", "Grécia"];

console.log(gostos)

console.log(`minha música preferida é, ${gostos[1]} da Lana del rey, minha bebida preferida
é ${gostos[4]}, mas tem que ser natural, o país dos meus sonhos é ${gostos[6]}, mas no verão`)

/*Array como matriz de 2 dimensões*/

const tecnologias = [
    ["HTML5", "CSS3", "JavaScript"],
    ["Figma", " Photoshop"],
    ["PHP", "Node.js", "SQL", "Express", ["Apache", "IIS"]]
];


// console.log(tecnologias); 
console.log(tecnologias[2][4][0]);/*Apache */
console.log(tecnologias[0][2]);/*JavaScript */
console.log(tecnologias[1][0]);/* Figma*/
console.log(tecnologias[2][3]);/*Express */
console.log(tecnologias[0][0]);/*HTML5 */