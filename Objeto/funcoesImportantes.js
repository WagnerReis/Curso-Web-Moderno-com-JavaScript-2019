const pessoa = {
   nome: 'Rebeca',
   idade: 2,
   peso: 13
}

console.log(Object.keys(pessoa)) // pega todas as chaves do objeto
console.log(Object.values(pessoa))  // pega todos os valores do objeto
console.log(Object.entries(pessoa))   // pega as chaves e os valores o objeto

Object.entries(pessoa).forEach(({chave, valor}) => {  //destructuring
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,   // sera listada
    writable: false,  // nao sera modificada
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScrip 2015)
const dest = { a: 1}
const o1 = { b: 2 }
const o2 = { c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)  // concatena valores de outros objetos

Object.freeze(obj)
obj.c = 1234
console.log(obj)
