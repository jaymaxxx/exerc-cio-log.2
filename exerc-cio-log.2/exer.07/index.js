var num1 = parseInt(prompt("Insira um número: "));
var num2 = parseInt(prompt("Insira um segundo número: "));
var num3 = parseInt(prompt("Insira um terceiro número: "));

if (num1 > num2 && num1 > num3 && num2 < num1 && num2 < num3) {
    alert("O maior número é " + num1 + " e o menor número é o " + num2)
} else if (num1 > num2 && num1 > num3 && num3 < num1 && num3 < num2) {
    alert("O maior número é " + num1 + " e o menor número é o " + num3)
} else if (num2 > num1 && num2 > num3 && num1 < num2 && num1 < num3) {
    alert("O maior número é " + num2 + " e o menor número é o " + num1)
} else if (num2 > num1 && num2 > num3 && num3 < num2 && num3 < num1) {
    alert("O maior número é " + num2 + " e o menor número é o " + num3)
} else if (num3 > num1 && num3 > num2 && num1 < num2 && num1 < num3) {
    alert("O maior número é " + num3 + " e o menor número é o " + num1)
} else if (num3 > num1 && num3 > num2 && num2 < num1 && num2 < num3) {
    alert("O maior número é " + num3 + " e o menor número é o " + num2)
}else{
    alert("Todos os números são iguais")
}