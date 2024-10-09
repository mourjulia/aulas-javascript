# aulas-javascript

introdução ao JavaScript para uso básico.

## Sobre a linguagem

-JavaScript **NÃO É** Java!
-JavaScript= JS = EcmaScript
-É uma linguagem voltada principalmente para o front end, mas tambem pode ser usada no back-end através de plataformas como Node.js por exemplo
-Até mesmo no nicho de apps Mobile, o JS também pode ser usado 
(React, Next.js, React Native etc).

## Onde usar o JS dentro do Front-end? 
 
-Funcionalidades de menu responsivo
-Galeria de fotos
-Carousel/slider de conteudo
-Recursos avançados de formulários (validação, integração com API,)
-interações avançadas(manipulação de mouse, teclado, gestos, toque etc)

## Como Implementar?

### Interna 

Programação feita dentro da própria página HTML, usando a tag script, `<script>`, usadas principalmente quando são scripts mais simples ou pequenos.

### Externas 

Programaçao feitas dentro de arquivos JavaScript exclusivos
(possuem a extensão **.js**), usadas principalmente quando queremos reutilizar 
scripts entre páginas HTML diferentes. Aligação entre os arquivos JavaScript e a página HTML também éfeitas usando a tag `<script>`. É a forma mais recomendada.

***Obs.:** normalmente a programação é feita (ou ligada) **NO FINAL** da página HTML 
portanto, poucos antes do fechamento `</body>`


**NO FINAL** da página HTML, portanto, pouco antes do fevhamento '</body>'
 
---
 
## Sobre Arrays
 
Arrays são estruturas de dados **indexados**, também conhecidos comos **vetores** ou **matrizes**.
 
Na prática, um array é uma lista de dados sequenciais, e cada dado é armazenado em uma posição/índice do arry.
tem menu de contexto

tem menu de contexto

**obs.:** A contagem de elementos doa array **sempre inicia do zero**

-----

## Sobre Objetos 

objetos também são estruturas de dados so que **não-indexados**, 
ou seja, o acesso aos dados é feito de forma diferente do que vimos nos arrays. No objeto, acessamos através de **propriedades** e **valores** declarados dentro do objetos.

Normalmente, o objeto é programado de acordo com algum contexto relacionado ao mundo real


## Sobre condicionais

São estruturas/comandos que permitem analisar uma ou mais condições dentro de uma aplicação.

de acordo com o resultado desta análise, podendo ser **verdadeira/true** ou **falsa/false**, a aplicação poderá fazer ações diferentes.

###  Opeeradores relacionais

Ao trabalhar com condicionais, é comum utilizar operações relacionais para comparações dentro das condições.
Os operadores mais comuns são:

- Maior que          >
- Menor que          <
- Maior ou Igual     >=
- Menor ou Igual     <=
- igualdade          ==
- Diferença          !=

## Sobre Comandos de Repetição 

São estruturas/comandos que permitem a execução repetida vezes de uma ou mais ações/comandos/operações. Também conhecida como **loops** ou **laços de repetição**.

A quantidade de vezes do loop será executado dependerá de alguma lógica ou condição definida pelo seu programador ou pelo sistema/aplicação. Também é comum que, para que o loop pare de exucutar, seja definida uma variável de controle de repetição 