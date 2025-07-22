
const prompt = require("prompt-sync")()
// for(let i = 0 ; i < 11; i+=1){
//     console.log(i)
// }















// Enquanto uma condição for verdadeira ele continua repetindo
// let contador = 0
// while(contador < 11){
//     console.log(contador)
//     contador +=1
// }

let numero = prompt("Digite um número")
//  Faça um looping que rode enquanto o número for igual a 5
while( numero != 5 ){
    console.log("Estou dentro do looping!")
    numero = prompt("Digite um novo número")
}
