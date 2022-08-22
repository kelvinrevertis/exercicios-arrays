/*import entradaDados from 'readline-sync'

let nome =entradaDados.question('Digite seu nome: ')
console.log("Olá "+nome)

let x = entradaDados.question("Digite um valor "+nome+": ")
let y = entradaDados.question("Digite um segundo valor: ")

let soma = Number(x) + Number(y)

console.log("Resutado da soma dos valores é: "+soma)

let a = entradaDados.question("Informe o valor de a: ");
let b = entradaDados.question("Informe o valor de b: ");

let subtracao = a - b;

console.log("\nResultado: "+subtracao);*/

import rl_sync from 'readlineSync';

let nome = rl_sync.question("Informe seu nome: ");

console.log("Olá, "+nome+"!");