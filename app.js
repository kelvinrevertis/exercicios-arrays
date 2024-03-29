/*
  01

  - Gere um novo array com apenas os números ímpares do array abaixo e exiba 
    o novo array no console.

  Dica: pesquise por remainder operator (%).
*/

/*const randomNumbers = [10, 30, 15, 25, 50, 40, 5]

const numbersImpares = randomNumbers.filter(num => num % 2 === 1)

console.log(numbersImpares)*/
/*
  02

  - Exiba no console quantos números abaixo de 501 o array abaixo possui.
*/

const crazyNumbers = [937, 5, 395, 402, 501, 333, 502, 781, 3, 691]
/*versão extendida
const numbersLessThan501 = crazyNumbers.reduce((accumulate,num)=>{
  if(num < 501){
    return accumulate + 1 
  }
  return accumulate 
},0) */

//versão simplificada
const numbersLessThan501 = crazyNumbers.reduce((accumulate,num)=> num < 501 ? accumulate + 1 : accumulate,0)

console.log(numbersLessThan501)

/*
  03

  - Gere um novo array com cada um dos números abaixo elevados ao quadrado e 
    exiba o novo array no console.
  
  Dica: pesquise por exponentiation operator (**).
*/

const numbers = [5, 7, 3]

const roots = numbers.map(num =>  num ** 2
)
console.log(roots)

/*
  04

  - Utilizando o array abaixo, gere um novo array com apenas os filmes 
    lançados antes do ano 2000;
  - Exiba o novo array no console.
*/

const tarantinoMovies = [
  { name: 'Bastardos inglórios', release: 2009 },
  { name: 'Pulp Fiction', release: 1994 },
  { name: 'Kill Bill: Volume 2', release: 2004 },
  { name: 'Quatro Quartos', release: 1995 },
  { name: 'Sin City', release: 2005 },
  { name: 'Era uma Vez em... Hollywood', release: 2019 },
  { name: 'Django Livre', release: 2012 },
  { name: 'Cães de Aluguel', release: 1992 },
  { name: 'À Prova de Morte', release: 2007 },
  { name: 'Kill Bill: Volume 1', release: 2003 }
]

const before2000 = tarantinoMovies.filter(year =>year.release < 2000)

console.log(before2000)

/*
  05

  - Gere um novo array que contém apenas os nomes das séries abaixo;
  - Exiba o novo array no console.    
*/

const tvShows = [
  { name: 'Breaking Bad', releaseYear: 2008 },
  { name: 'Mr. Robot', releaseYear: 2015 },
  { name: 'True Detective', releaseYear: 2014 },
  { name: 'Hannibal', releaseYear: 2013 },
  { name: 'The Handmaid\'s Tale', releaseYear: 2017 },
  { name: 'House M.D.', releaseYear: 2004 },
  { name: 'Watchmen', releaseYear: 2019 }
]

const onlyName = tvShows.map(names => names.name)

console.log(onlyName)

/*const onlyName = tvShows.reduce((accumulate,names)=>accumulate + names.name + ', ',0)

console.log(onlyName.slice(1,-1))

/*
  06

  - Exiba no console uma lista dos nomes dos jogos do array abaixo;
  - A lista deve ter a formatação exemplificada abaixo do array, considerando 
    inclusive o traço e o espaço antes de cada nome.
  
  Dica: para quebrar linha, você pode usar dentro da string o caractere 
  especial \n.
*/

const cart = [
  { name: 'Dark Souls III', price: 95.03 },
  { name: 'Shadow of the Tomb Raider', price: 101.19 },
  { name: 'Sekiro: Shadows Die Twice', price: 179.99 },
  { name: 'Resident Evil 2', price: 119.90 },
  { name: 'Death Stranding', price: 149.99 }
]

const listGames = cart.reduce((accumulate,games) =>{
  return accumulate +'\n - ' + games.name 
},'')

console.log(listGames)
/*
- Nome 1
- Nome 2
- Nome 3
*/

let text = "Usando length"
let fraseCompleta = `       "${text}" Essa frase contem ${text.length} caracteres`

console.log(fraseCompleta)

let upperText = text.toUpperCase()
let lowerText = text.toLocaleLowerCase()
console.log(upperText)
console.log(lowerText)

let trimmed = fraseCompleta.trim()

console.log(trimmed)

console.log(text.padStart(20,"-  ")+"Teste 1")
console.log(fraseCompleta.padStart(20, "....") +" TEste2")
let label_aluno = "Aluno";
let valor_aluno = "Edmilson";

let label_grau = "Grau de escolaridade"
let valor_grau = "Ensino Médio Completo";

console.log(label_aluno.padStart(20, " ") + ": " + valor_aluno);

console.log(label_grau.padStart(20, " ") + ": " + valor_grau);

console.log(text.padEnd(30,".")+" Teste 3")

let replacedText = label_grau.replace("escolaridade","temperatura")
console.log(replacedText)

console.log(replacedText.substring(8,19))

console.log(replacedText.substr(8,11))

replacedText += "..."

console.log(replacedText)

console.log(replacedText.indexOf("temperatura"))

const randomWords = "Vacuo Zero Origem Maçã Espaço Regras Estrada Tempo"

const createArray = randomWords.split(" ")

console.log(createArray)

console.log("O simbolo da marca apple é uma "+createArray[3]+" com uma mordida")


let nome = "Jackeline";

let texto = nome+ " é muito legal!";

let novo_texto = texto.replace("legal","simpática");

console.log(novo_texto);
console.log(novo_texto.length)

let cores = "verde azul branco amarelo preto";

let array_cores = cores.split(" ");

for ( const cor of array_cores ){

    if( cor.length > 5 ){
        console.log(" A cor " +cor+" tem mais que 5 caracteres" );
    } else {
console.log(" A cor " +cor+" não tem mais que 5 caracteres" );
    }

}


let tecnologias = "PHP, JavaScript, C#, Python, Java";

console.log(tecnologias.substr(5, 10));

let frase = "Acredite em si próprio e chegará um dia em que os outros não terão outra escolha senão acreditar com você.";
let posicao = frase.indexOf("esperança");

console.log(posicao);

let frasez = "Estou aprendendo JavaScript na DevMedia";

let resultado = frasez.substr(17,10);

console.log(resultado);

/*let conteudo = "Neste artigo de JavaScript veremos como utilizar o método substring() para extrair uma sequência de caracteres de uma string.";

let tamanho = conteudo.length;
let resumo = "";

if(tamanho>100){
 resumo = conteudo.substring(0, 97);
  resumo += "...";
  console.log(resumo)
} 
else{
 resumo = conteudo;
  console.log(resumo)
}*/

let paises_string = "Brasil Espanha Canadá Irlanda Suíça";

let paises_array = paises_string.split(" ");


console.log(paises_array); // (5) ["Brasil", "Espanha", "Canadá", "Irlanda", "Suíça"]


let programador_1= "FLÁVIA";
let programador_2 = "flávia";

if(programador_1 == programador_2.toUpperCase()){
    console.log("iguais");
} else {
    console.log("diferentes");
}


let atores = "Will Smith;Brad Pitt;Adam Sandler;Tom Cruise";

let array_atores = atores.
split(";")
;

for(const ator of array_atores)
{
    console.log(ator);
}


const randomNumbers = [0,0,0,1,001]

console.log(randomNumbers.length)

const filterNumbers = randomNumbers.filter(num=> num==0,0,1)
console.log(filterNumbers)




/*const filterNumbers = randomNumbers.reduce((accumulate,num)=> num==001? accumulate: accumulate,0)
console.log(filterNumbers)*/


/*/*const crazyNumbers = [937, 5, 395, 402, 501, 333, 502, 781, 3, 691]
/*versão extendida
const numbersLessThan501 = crazyNumbers.reduce((accumulate,num)=>{
  if(num < 501){
    return accumulate + 1 
  }
  return accumulate 
},0) */

//versão simplificada
/*const numbersLessThan501 = crazyNumbers.reduce((accumulate,num)=> num < 501 ? accumulate + 1 : accumulate,0)

console.log(numbersLessThan501)*/