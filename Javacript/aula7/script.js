let numeros = [1,2,3,4,5,6,7,8,9,10]


// Reduce reduz o nosso array em um resultado final

let maior = numeros.reduce((acumulador,num)=>{
    if(acumulador < num){
        acumulador = num

    }
    
    return acumulador  
})
console.log(soma)
