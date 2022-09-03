/*var signos = [
    { nome: "Aquário",       descricao: "Inovação, originalidade e independência" },
    { nome: "Peixes",        descricao: "Solidariedade, intuição e desapego" },
    { nome: "Áries",         descricao: "Espontaneidade, coragem e energia" },
    { nome: "Touro",         descricao: "Persistência, sensualidade e teimosia" },
    { nome: "Gêmeos",        descricao: "Curiosidade, inteligência e liberdade" },
    { nome: "Câncer",        descricao: "Sensibilidade, carinho e família" },
    { nome: "Leão",          descricao: "Criatividade, autoestima e nobreza" },
    { nome: "Virgem",        descricao: "Objetividade, humanidade e organização" },
    { nome: "Libra",         descricao: "Vaidade, empatia e diplomacia" },
    { nome: "Escorpião",     descricao: "Intensidade, mistério e intuição" },
    { nome: "Sagitário",     descricao: "Otimismo, liberdade e movimento" },
    { nome: "Capricórnio",   descricao: "Responsabilidade, ambição e persistência"}
];


var signo = {
    nome: "Gêmeos",
    descricao: "Curiosidade, inteligência e liberdade"
};

console.log(signos[11].descricao)
console.log(signo.nome)*/
/*var tecnologias = [
    "JavaScript",
    "PHP",
    "Python",
    "Java",
    "Delphi"
];

var novas_tecnologias = [
    "TypeScript",
    "Dart"
];
tecnologias[2] = novas_tecnologias[1];
tecnologias[4] = novas_tecnologias[0];
// A troca entre os valores de um array deve ser feita aqui:
console.log(tecnologias);*/

/*var colecao_series_programacao = [
    { nome: "Breaking Bad",           horario: "21h",     sinopse: "Um professor de química se transforma quando descobre ter um câncer terminal. Daí ele usa suas habilidades a favor do crime"},
    { nome: "Fargo",                  horario: "22h",     sinopse: "Uma sequência de crimes saem errado e são investigados por uma detetive."},
    { nome: "Lost",                   horario: "20h",     sinopse: "Um avião cai em uma ilha deserta e logo um grupo de passageiros precisa lutar para sobreviver." },
    { nome: "Prison Break",           horario: "23h",     sinopse: "Um homem cria um plano para tirar o irmão sentenciado à morte por um suposto assassinato do vice-presidente dos EUA"},
    { nome: "Black Mirror",           horario: "23h",     sinopse: "Contos de ficção científica que refletem o lado negro da tecnologia, mostrando que nem toda novidade traz só benefícios." },
    { nome: "Pessoa de interesse ",   horario: "20h",     sinopse: "Um ex-agente da CIA, dado como morto pelo governo dos EUA, é recrutado por um milionário, para um projeto ultrassecreto."},
    { nome: "Dark",                   horario: "22h",     sinopse: "O desaparecimento de crianças na cidade alemã de Winden remete a acontecimentos idênticos ocorridos há 33 anos e 66 anos."}
];

var data_atual = new Date();

var dia_semana = data_atual.getDay();

var serie_do_dia = colecao_series_programacao[dia_semana]

var nome_serie = serie_do_dia.nome;
var horario_serie = serie_do_dia.horario;
var sinopse_serie = serie_do_dia.sinopse;

console.log("Hoje é dia de " + nome_serie + " às " + horario_serie);
console.log("A seguir uma visão geral da série: " + sinopse_serie);*/

/*var generos_musicais = [
    "samba",
    "funk",
    "rock",
    "pop",
    "hip hop"
];

console.log(generos_musicais[4])
;

generos_musicais[1] = "rap"
;
console.log(generos_musicais)*/

/*var colecao_animes = [
    { id: 1, titulo: "Naruto",      episodios: 673 },
    { id: 2, titulo: "Bleach",      episodios: 366 },
    { id: 3, titulo: "One Piece",   episodios: 931 }
];

var primeiro_anime = colecao_animes[0];

console.log(primeiro_anime)

console.log("Id do anime: " + primeiro_anime.id);
console.log("Título do anime: " + primeiro_anime.titulo);
console.log("Total de episódios do anime: " + primeiro_anime.episodios);

console.log(colecao_animes.length)

console.log(colecao_animes[2])*/

/*var times_rj = [
    "Bangu",
    "Boavista",
    "Botafogo",
    "Flamengo",
    "Fluminense",
    "Madureira",
    "Nova Iguaçu",
    "Resende",
    "Vasco",
    "Volta Redonda"
];

// 1º RESULTADO
console.log(times_rj[0]);

// 2º RESULTADO
console.log(times_rj[6]);

// 3º RESULTADO
console.log(times_rj[9]);*/

/*var notas_aluno =[ 7, 6, 8, 5];

var total_notas = notas_aluno.length;

var soma_notas =
notas_aluno[0] + notas_aluno[1] + notas_aluno[2] + notas_aluno[3];

var media_aluno = soma_notas/total_notas;

console.log("Média do aluno: " + media_aluno);*/

/*var curiosidades_chuck_norris =[

    { titulo: "Cuidados com a higiene bucal",           conteudo: "Chuck Norris usa arame farpado como fio dental."},
    { titulo: "Fórmula para maratonar séries",          conteudo: "Chuck Norris pode assistir um episódio de 60 minutos em 22 segundos."},
    { titulo: "Suicida que não morre",                  conteudo: "Chuck Norris foi homem-bomba 34 vezes."},
    { titulo: "Olhos que tudo veem",                    conteudo: "Chuck Norris já viu o homem invisível."},
    { titulo: "Manipulando o tempo",                    conteudo: "Chuck Norris não usa relógio. Ele decide que horas são."},
    { titulo: "Praticando esportes radicais",           conteudo: "Chuck Norris faz bungee jump sem corda."},
    { titulo: "Não vale chorar",                        conteudo: "Chuck Norris faz cebolas chorarem."},
    { titulo: "Tempero de fogo",                        conteudo: "Chuck Norris usa pólvora como tempero."},
    { titulo: "Extinção dos dinossauros",               conteudo: "Chuck Norris encarou os dinossauros uma vez, apenas uma."},
    { titulo: "Contando sem parar",                     conteudo: "Chuck Norris contou até o infinito. Duas vezes."}
];

var tamanho_colecao
= curiosidades_chuck_norris.length;

var numero_sorteado = Math.floor(Math.random() * tamanho_colecao);

var curiosidade_escolhida = curiosidades_chuck_norris[numero_sorteado];

var titulo_curiosidade = curiosidade_escolhida.titulo;
var conteudo_curiosidade = curiosidade_escolhida.conteudo;

console.log("CURIOSIDADE SOBRE CHUCK NORRIS");
console.log("Título: " + titulo_curiosidade);
console.log("Conteúdo: " + conteudo_curiosidade);*/

//if ternario

/*var nota = 10

nota <= 7 ? console.log("reprovado"):console.log("aprovado")

var aprovado = 1// 1 = true(valor boleano)

aprovado&&console.log("parabens")*/

/*let hoje = new Date()

let mes = hoje.getMonth()
console.log(mes) //index do mes atual no caso agosto(mes 8) é 7*/

/*let produto = "Geladeira";
let retorno = "";

if(produto == "Geladeira")
{
    retorno = "desconto";
    console.log(retorno)
}
else
{
    retorno = "normal";
    console.log(retorno)
}

produto =(retorno)?console.log("desconto"):console.log("normal")
;*/

/*let 
sinal= "verde";

if
(sinal == "verde") {
    console.log("Siga");
}
else if
(
sinal== "amarelo") {
    console.log("Atenção");
}
else{
    console.log("Pare");
}*/


/*var numero = 26;

if (numero%2==0) {
    console.log("Par");
} else {
    console.log("Ímpar");
}*/

/*idade = 18
idade >= 18 ? resultado = "Maior de idade":resultado = "Menor de idade"

console.log(resultado)*/


/*let stat = false;
let resultado =! stat == "Aprovado";

console.log(resultado)

let stats = false;
let result = (stats) ? "Aprovado" : "Reprovado";

console.log(result)*/

/*let aprovado = true;

if(aprovado){
    let resultado = "Aprovado";
    console.log(resultado)
}*/

/*let resultado = aprovado&&"Aprovado"
console.log(resultado)

const nome = 'Ana';
switch(nome) {
    
case 'Ana':
    
default:
        console.log("Curso de JavaScript");
        
break;
}*/

/*let x = "20";

if(x === "20")
{
    console.log("X é igual a 20");
}
else
{
    console.log("X não é igual a 20");
}*/

/*class Person {
    constructor(name,lastName){
        this.name=name
        this.lastName=lastName
    }

    getFullName(){
        return this.name +""+this.lastName
    }

    static show(){
        console.log("Hello World")
    }

}

const kelvin = new Person("Kelvin","Revertis")
console.log(kelvin)
Person.show()*/

/*var meses = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro"
];

console.log(meses[0]);

console.log(meses[10])

var funcionarios = [
    "Carla",
    "Luana",
    "Rodrigo"
];

funcionarios[0] = 'Joana';

console.log(funcionarios);

var numero_1 = 5;
console.log(numero_1++);

var numero_2 = 5;
console.log(++numero_2);*/

let cidades= "Manaus-Salvador-Santos-Curitiba-Recife";

let array_cidades = cidades.split("-");

console.log(array_cidades[1])
