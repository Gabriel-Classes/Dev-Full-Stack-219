let area = 22
// 1 ---> 108m2
// 1 --> 22m2

let consumoLitrosTinta = area / 6

// console.log(consumoLitrosTinta)
// console.log(consumoLitrosTinta.toFixed(2))

let latasTinta = consumoLitrosTinta / 18

// console.log(latasTinta)
// console.log(Math.ceil(latasTinta))

let custoLata = Math.ceil(latasTinta) * 80

// console.log(custoLata)


let galoesTinta = (consumoLitrosTinta / 3.6)
// console.log(galoesTinta)

let custoGaloes = galoesTinta * 25
// console.log(custoGaloes)

// regra de 3 
// // Ceil arredonda para cima
// console.log(Math.ceil(5.4))
// // floor arrendonda para baixo 
// console.log(Math.floor(5.4))
// // trunc so mostra a parte inteira
// console.log(Math.trunc(5.8))

// console.log(latasTinta)
console.log(consumoLitrosTinta%18)

