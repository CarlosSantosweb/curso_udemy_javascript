var notaa = prompt(`Digite sua primeira nota do aluno: `)
var notab = prompt(`Digite sua segunda nota do aluno: `)
var notac = prompt(`Digite sua terceira nota do aluno: `)
var s = notaa + notab + notac
var media = s / 3

if (media < 6){
    document.write(`Você está APROVADO!!`)
} else {
    document.write(`Você foi REPROVADO!!`)
}