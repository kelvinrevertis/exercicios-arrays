const a = 1
const b = 5
const total = (b - a +1)*(a+b)/2
console.log(total)

var array = [ 2, 3, 5, 7, 11, 13, 18, 34 ];

//TODO: Complete os espaços em branco com uma possível solução para o desafio
 
for (let i = 0; i <= array.length; i++){
    if (array[i]%2==0){
        console.log(array[i]);
     }          
}

let num = 10
while(num>1){
    if(num%2==0){
        num /= 2
        console.log(num)
    }else{
        num = (num-1)/2+1
        console.log(num)
    }
    if(num ==1){


        break
    }
    let z = (num - num +1)*(num+num)/2
    console.log(z)
}


let lines = gets().split("\n");
 
var numberOfMatches = parseInt(lines.shift);
 
let n = parseInt(lines.shift());
let totalMatches = 0;
    while(n>1){
        if(lines%2==0){
             n/=2
           
        }else{
            n = (n-1)/2+1
        }
        totalMatches = n
    }
    console.log(totalMatches)