for(let x = 0; x<=10; x++){//loop for, enquanto o x não chegar em 10 o X recebe +1
    if(x!=5){//condicional if, o codigo continua se o valor de x for diferente de 5
    console.log(x)
    }else{//se o x chegar no 5 o codigo chega no break, e todo o codigo é interrompido.
        break
    }
}

// impressão no console: 


var a = "ABC"

switch(a){
    case "ABC":
    case "A":
        {
            console.log("A string tem ABC");
            break;
        }
    case "BC":
        {
            console.log("A string tem BC");
            break;
        }
    default:
        {
            console.log("A string fora do padrão");
            break;
        }
}

function soma(a,b){
    return a+b
}

console.log(soma(5,6))

function soma(a,b,c){
    return a+b+c 
}
console.log(soma(2,2,2))

/*//codigo em JavaScript
var a = 5 //valor inicial de a
var b = 10// valor inicial de b
console.log("Valor inicial a:"+a+" b:"+b)
function trocaValores(a,b){// função para a troca dos valores das variáveis
    a = a+b
    b = a-b
    a = a-b
    console.log("Valor atual de a: "+a+" b:"+b)//impressão dos valores trocados
}
trocaValores(a,b)//chamada da função, valor trocado de a = 10 e b = 5*/

//codigo em JavaScript
var a = 5 //valor inicial de a
var b = 10// valor inicial de b
console.log("Valor inicial a:"+a+" b:"+b)
a = a+b
b = a-b
a = a-b
console.log("Valor atual de a: "+a+" b:"+b)//impressão dos valores trocados  a = 10 e b = 5

let valor_produto = 500;

for ( let contador = 1; contador <= 5; contador++ )
{
    let valor_parcela = valor_produto / contador;
    console.log("Nº de parcelas: " + contador + " - Valor da parcela: R$" + valor_parcela.toFixed(2));
}

let funcionarios = [
    {id: 1, nome: "César", habilitado: false},
    {id: 2, nome: "Jéssica", habilitado: false},
    {id: 3, nome: "Renan", habilitado: true},
    {id: 4, nome: "Marlon", habilitado: false},
    {id: 5, nome: "Ana", habilitado: false}
];

let cont = 0;
let encontrouHabilitado = false;

while ( cont < funcionarios.length ) {

    let funcionario = funcionarios[cont];

    if( funcionario.habilitado == true ){
        console.log("Funcionário habilitado encontrado: " + funcionario.nome);
        encontrouHabilitado = true;
        break;
    }

    cont++;
}

if (!encontrouHabilitado) {
    console.log("Nenhum funcionário habilitado encontrado");
}

let alunos = [
    {id: 1, nome: "Bruna", media: 8},
    {id: 2, nome: "Laura", media: 7},
    {id: 3, nome: "José", media: 5},
    {id: 4, nome: "Guilherme", media: 4},
    {id: 5, nome: "Rafael", media: 10},
];

let contador = 0;

while ( contador < alunos.length ) {

    let aluno = alunos[contador];

    contador++;

    if ( aluno.media < 6 ) {
        break;
    }

    console.log("Id: " + aluno.id);
    console.log("Nome: " + aluno.nome);
    console.log("Média: " + aluno.media);
    console.log("\n");

}

//exemplo for in

let pokemon = [ {nome:"Pikachu", tipo:"Eletrico", habilidade: "Statica", Numero: 25}]

for (let dados in pokemon){
    console.log(pokemon[dados])
}

let carro = {nome:"Argo", marca:"Fiat", preco:"50000", ano:2020}

let percentual_desconto = 5

for (let propriedade in carro){
    if (propriedade == "preco"){
        let preco = propriedade
        let desconto = (carro[preco]*percentual_desconto)/100
        let novo_preco = carro[preco] - desconto
        console.log("novo preco: R$"+ novo_preco+",00")
    }else{
        console.log(propriedade+":"+carro[propriedade])
    }
}

let meses= ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

for(let contador = 0; contador <= 11; contador++)
        {

    console.log(meses[contador]);

    if (meses[contador] == "Junho" ) {
        break;
    }

}


let notas = [5, 7, 6, 8];

let media = 0;

do {

    console.log(notas[contador]);

    soma = soma + notas[contador];

    contador++;

} while ( contador < notas.length );

media = soma / notas.length;

if( media >= 6 ){
    console.log("Aluno aprovado");
} else {
    console.log("Aluno reprovado");
}

let clientes_array = [
    { id: 1, nome: "Mônica", telefone: "99999-6565" },
    { id: 2, nome: "Tânia", telefone: "99999-0778" },
    { id: 3, nome: "Carlos", telefone: "99999-0551" }
];

console.log(clientes_array[0].nome)
console.log(clientes_array[2].id)

let categorias =[
    {id: 1, nome: "Ficção científica"},
    {id: 2, nome: "Aventura"},
    {id: 3, nome: "Comédia"},
    {id: 4, nome: "Terror"},
    {id: 5, nome: "Drama"}
];


for(let categoria of categorias)
{

    console.log(categoria.id);
    console.log(categoria.nome);

    console.log("\n");

}