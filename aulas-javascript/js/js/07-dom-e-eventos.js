/* Funções de acesso e manipulação do DOM

-- querySelector()  É uma função apara selecionar  UM ÚNICO elemento na página (DOM)
-- querySelectorAll () È uma função para seçecionar VÁRIOS elementos na pãgina (DOM)

Nos dois casos, a seleção é feita usando seletores comuns ao que fazem no CSS.*/


/* Exemplos  */
const titulo = document.querySelector("h1");
const textoDom = document.querySelector(".texto-dom");
const subtitulos = document.querySelectorAll("h2");
const varios = document.querySelectorAll("p, img, buttom");
console.log(varios);


/* Modificando elementos do DOM  */
titulo.textContent = "Olá JavaScript!"
textoDom.innerHTML = "<i>Estou perdida</i>"

/* selecionar todos os links da lista de referencias e colocar neles o atributo 
target valendo _blank */

const listas = document.querySelectorAll(".lista-de-referencias a");

for (const lista of listas) {
    lista.setAttribute("target", "_blank")
};
/* 👆👆versão 1 (moderna, vale para qualquer atriuto */

/* versão 2 (usando atributo via propriedade) 
mais antiga, vale para atributos nativos do HTML

lista.target = "_blank";*/

// console.log(listas);
listas[0].setAttribute("target", "_blank")



/* Manipulação Eventos */

const ex1 = document.querySelector("#exemplo01")
const msg = document.querySelector("#mensagem")
const pagina = document.querySelector("body")

/* poderiamos tb usar a função getElementBYld em vez do querySelector.
A diferença é que ela so funciona para seleção Através do ID,
obs: ao usa-lá NÃO COLOQUE # */
// const msg = document.getElementById("exemplo1")


/* Ouvinte de evento (Event Listener) 
Aplicado ao elemento ALVO do evento desejado ("click") e uma função para executar as ações
a partir de evento obs: esta função é considerada do tipo "anônima" e é comhecida como 
"callback"*/

ex1.addEventListener("click", function () {
    // acessamos o p vazio e colocamos um texto dentro dele
    msg.innerHTML = "Olá 🌍";

    // modififcar pagina 
    pagina.style.fontFamily = "Verdana";
})

/* Ouvinte de evento parab voltar ao normal (sem texto no 
paragrafo e com fonte padrão da pagina). o evento ocorrerá ao clicar DUAS VEZES no 
paragráfo da mensagem.*/
msg.addEventListener("dblclick", function () {
    msg.innerHTML = ""; /* removendo o conteúdo do paragráfo */
    pagina.style.fontFamily = "initial"; /*  voltando para fone padrão */
});

/* Exemplo 02: modo noturno */
const botaoAtivar = document.querySelector("#ativar");
botaoAtivar.addEventListener("click", function () {
    /* Usamos o toggle do classList para alternar a aplicação/remoção da classe
    "noturno". na prática vira um liga/desliga */
    pagina.classList.toggle("noturno")


    /* DESAFIO: FAÇA AQUI MESMO: trocar o texto do botão, Se a pagina estiver com classe 
"noturno" aplicada, o botão deve mostrar a palavra desativar. Caso contrario deve mostrar
a palavra "ativar", use if/else*/


    if (pagina.classList.contains("noturno")) {
        console.log("ativado");
        botaoAtivar.textContent = "desativar"

    } else {
        console.log("desativado");
        botaoAtivar.textContent = "ativar"
    }
})

/*  Sobre o duplo e triplo sinal de igual */

let a = 10;
let b = 10;
let resultado = a == b;
console.log(resultado);

// == compara VALORES
// === compara VALORES E TIPOS DE DADO 