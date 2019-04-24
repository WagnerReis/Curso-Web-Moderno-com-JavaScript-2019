const escola = "Cod3r"

console.log(escola.charAt(4))  // retorna a letra do indice 4
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))  
console.log(escola.indexOf('3'))   // busca o indice da letra passada

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola '+ (escola) + ("!")) // operador + tambem concatena 
console.log(escola.replace(3, 'e'))    // altera o valor do indice passado

console.log('Ana,Maria,Pedro'.split(',')) //converte string para Array