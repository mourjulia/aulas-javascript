// Exemplo 1: objeto com dados de uma pessoa
const pessoa = {
    nome: "Chaves",
    idade: 10,
    cidade: "São Paulo",
    estado: "SP"
};

console.log(pessoa);

// acessando determinadas propriedades
console.log(`O ${pessoa.nome} possui ${pessoa.idade} anos e mora em ${pessoa.cidade}`);


// Exemplo 2: objeto com array
const livro = {
    titulo: "Senhor do anéis",
    autor: "J.R.R. Tolkien",
    volumes: [
        "A Sociedade do Anel",
        "As Duas Torres",
        "O Retorno do Rei"
    ]
};

// exibindo a estrutura
console.log(livro);

// Acesso usando o nome da prop. e índice do array desta prop.
console.log(livro.volumes[1]);

// Exemplo 3: array dos objetos 
const livros = [
    {
        titulo: "Harry Potter",
        autor: "J.K Rolwling"
    },
    {
        titulo:"Senhor dos Anéis",
        autor: "J.R.R. Tolkien"
    },
    {
        titulo: "1984",
        autor: "George Orwell"
    },
];

// acesssando atráves de índice a prop
console.log(livros[1].autor);

/* 1) Crie um objeto chamado "aluno" contendo os seguintes dados:

--Nome Completo
--Data de Nascimento
--Lista de telefones (fixo e celular)

2) (DESAFIO: use um OBJETO nesta propriedade) Endereço contendo (separadamente): 

--rua 
--número
--bairro

Mostre no console o nome do aluno, o telefone celular e o bairro em que mora */

   
    
    const aluno = {
        nome: "Julia Moura",
        Nascimento: "17/05/2007",
        telefones: [
           "11 2081-4480",
           "11 95228-0604"
        ],
        endereco: {
          rua: "Rua Alto Munin",
          numero: "101",
          bairro: "Jardim Campos"
        }
      };
      
      console.log("Nome do Aluno:", aluno.nome);
      console.log("Telefone Celular:", aluno.telefones[1]);
      console.log("Bairro:", aluno.endereco.bairro);
      
      console.log(`O aluno ${aluno.nome} cujo o telefone é ${aluno.telefones[1]}, mora no bairro ${aluno.endereco.bairro}.`);
      