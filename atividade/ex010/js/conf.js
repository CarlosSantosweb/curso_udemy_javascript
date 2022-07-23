function calcularAreaTerreno (largura, comprimento){
    var area = largura * comprimento
    return area
}
var largura = prompt('Digite a largura do terreno em metros.')
var comprimento = prompt('Digite a comprimento do terreno em metros.')

largura = parseFloat(largura)
comprimento = parseFloat(comprimento)

var area = calcularAreaTerreno(15, 25)

document.write(`O terrono possui ` + area + ` metros quadrados.`) 