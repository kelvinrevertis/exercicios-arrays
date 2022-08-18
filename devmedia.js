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
var tecnologias = [
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
console.log(tecnologias);
