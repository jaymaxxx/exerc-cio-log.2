var num1 = parseInt(prompt("Digite um número: "));
var num2 = parseInt(prompt("Digite um segundo número: "));
var num3 = parseInt(prompt("Digite um terceiro número: "));

if ((num1 > num2) && (num1 > num3)) {
    alert("O maior número é o " + num1)
} else if ((num2 > num1) && (num2 > num3)) {
    alert("O maior número é o " + num2)
} else if ((num3 > num1) && (num3 > num2)) {
    alert("O maior número é o " + num3)
} else {
    alert("Todos os números são iguais")
}