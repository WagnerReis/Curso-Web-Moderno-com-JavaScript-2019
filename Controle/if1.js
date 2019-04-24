function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('Aprovado com ' + nota)
    }else{
        console.log('Reprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(4.1)

function seForVerdade(valor){
    if(valor){
        console.log('É verdade....' + valor)
    }
}

seForVerdade()
seForVerdade(null)
seForVerdade(undefined)
seForVerdade(NaN)
seForVerdade('')
seForVerdade(0)
seForVerdade(-1)