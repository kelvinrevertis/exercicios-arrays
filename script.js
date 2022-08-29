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