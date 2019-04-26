const sequencia = {
   _valor: 1,  // conven��o
   get valor(){ return this._valor++},
   set valor(valor) {
       if( valor > this._valor) {
           this._valor = valor
       }
   }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor) // se tentar atribuir valor menor do que o ja existente sera ignorado
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)
