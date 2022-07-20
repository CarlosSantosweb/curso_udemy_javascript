//END *&&*
/*//true && true && false = false
if(2 == 2 && 3 >= 1 && 'a' == 'b') {
    document.write(`Verdadeiro`)
}else {
    document.write(`Falso`)
}*/

/*//OU *||*
//true || true || false = true
if(2 == 2 || 3 >= 1 || 'a' == 'b') {
    document.write(`Verdadeiro`)
}else {
    document.write(`Falso`)
}*/

/*//NEGAÇÃO *!*
//false = false
if(! (4 == 2)) {
    document.write(`Verdadeiro`)
}else {
    document.write(`Falso`)
}*/

var nota = prompt(`Digite a nota do aluno: `)
var faltas = prompt(`Digite a quantidade de faltas: `)

var media = 7
var faltas_maximas = 15

/*if(nota >= media && faltas <= faltas_maximas) {
    document.write(`Aprovado!!`)
    //lógico
} else {
    document.write(`Reprovado!!`)
    //lógico
}*/

//Operadores Termário
var resultado = (nota >= media && faltas <= faltas_maximas) ? 'Aprovado' : 'Reprovado'
document.write(resultado)