//Map-------------------------------------------------------------------------------------------------------------------------
const numbers = [1,9,4,49,69,84,6,12,44,91]

let raiz = numbers.map((num) => {
    return Math.sqrt(num)})

console.log(raiz)

let show = numbers.map((num)=>{
    return num
})

console.log(show)

//filter-------------------------------------------------------------------------------------------------------------------------
let maiorque40 = numbers.filter(num => {return num >= 40})

console.log(maiorque40)

const pokemon = [
    {nome:'pikachu', tipo:'eletrico', forca:45},
    {nome:'Raichu', tipo:'eletrico', forca:60},
    {nome:'Manetrik', tipo:'eletrico', forca:40},
    {nome:'Charizard', tipo:'Fogo Voador', forca: 80},
    {nome:'Empoleon', tipo:'Agua Metal', forca:78},
    {nome:'Sceptyle', tipo:'Grama', forca:70}
]

const eletricType =pokemon.filter(pkn =>{
    return pkn.tipo == 'eletrico'
})

console.log(eletricType)

// Checa palindromo-------------------------------------------------------------------------------------------------------------------------
let reverso = numbers.map((num)=>{
    return num
})

reverso.reverse()


const testando =()=>{
    if(reverso === numbers){
    console.log("São iguais")
}else{
    console.log("Não são iguais")
}
}

testando()


console.log(numbers)
console.log(reverso)

// Reduce-------------------------------------------------------------------------------------------------------------------------
//forma extensa
retornaNomes = (nomes,pokemons)=>{
    return nomes+pokemons.nome+','
}

let juntaPokemon = pokemon.reduce(retornaNomes,'')

console.log(juntaPokemon.slice(0,-1))

//simplificada
let juntaPokemon2 = pokemon.reduce((accumulator,nomes)=>{
    return accumulator + nomes.nome + ','

},0)

console.log(juntaPokemon2.slice(1,-1))

//soma de numeros
let somaNumbers = numbers.reduce((accumulate,number) => { return accumulate + number},0)

console.log(somaNumbers)
//soma de numeros em um array de objetos
let somaForca = pokemon.reduce((accumulate,pokemon)=>{
    return accumulate + pokemon.forca
},0)

console.log(somaForca)
// soma de valores especificos de um array de objetos
let somaForcaEletrico = pokemon.reduce((accumlate,pokemon) =>{
    if(pokemon.tipo== 'eletrico'){
        return accumlate + pokemon.forca
    }
    return accumlate
},0)

console.log(somaForcaEletrico)

let item = (item)=>{
    return item +1
}

console.log(item(8))

//---------------------------------------------------------------------------------------------------------------------------------------