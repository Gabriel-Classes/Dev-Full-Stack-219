//              0           1         2       3
let convidados = ["Gabriel","Leonardo","Diego","Samuel","Tchimbalaanga",]

// acrescenta no final do meu array
// convidados.push("Milton Leite")

// convidados.pop()// remove o último elemento

console.log(convidados)

let nome = "Gabriel"
// IndexOf --> Para decobrir o índice
let indice = convidados.indexOf(nome)
console.log(indice)
// splice() --> deletar e atualizar
convidados.splice(3,0,"gabriel novo")
console.log(convidados)

let fatiamentoSliced = convidados.slice(start=2,end=5)
console.log(fatiamentoSliced)