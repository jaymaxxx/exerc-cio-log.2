var n1 = parseFloat(prompt("Digite a nota do 1° bim: "));
var n2 = parseFloat(prompt("Digite a nota do 2° bim: "));

var media = (n1 + n2) / 2

if ((media > 7) && (media < 9)){
    alert("A média do aluno é de " + media + " aluno APROVADO")
} else if (media < 7) {
    alert("A média do aluno é de " + media + " aluno REPROVADO")
} else if (media = 10) {
    alert("A média do aluno é de " + media + " aluno APROVADO COM DISTINÇÃO")
}