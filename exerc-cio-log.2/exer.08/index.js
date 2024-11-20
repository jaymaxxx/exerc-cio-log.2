var produto1 = parseFloat(prompt("Digite o valor do primeiro produto: "));
var produto2 = parseFloat(prompt("Digite o valor do segundo produto: "));
var produto3 = parseFloat(prompt("Digite o valor do terceiro produto: "));


if (produto1 < produto2 && produto1 < produto3) {
    alert("Produto 1 é o item mais barato custando R$" + produto1)
} else if (produto2 < produto1 && produto2 < produto3) {
    alert("Produto 2 é o item mais barato custando R$" + produto2)
} else if (produto3 < produto1 && produto3 < produto2){
    alert("Produto 3 é o item mais barato custando R$"+produto3)
}else{
    alert("Todos os preços são iguais")
}