var n1 = parseFloat(prompt("Insira a primeira nota: "));
var n2 = parseFloat(prompt("Insira a segunda nota: "));
var media = parseFloat = (n1 + n2) / 2;

if (media <= 10 && media >= 9.0) {
    alert("Sua média foi "+media+", Nota A, você está APROVADO")
} else if (media >= 7.5 && media <= 9.0) {
    alert("Sua média foi "+media+", Nota B, você está APROVADO")
} else if (media >= 6.0 && media <= 7.5 ) {
    alert("Sua média foi "+media+", Nota C, você está APROVADO")
} else if (media >= 4.0 && media <= 6.0) {
    alert("Sua média foi "+media+", Nota D, você está REPROVADO")
} else if (media <= 4.0 && media >= 0) {
    alert("Sua média foi "+media+", Nota E, você está REPROVADO")
} else {
    alert("Digite uma nota válida para calculo da média")
}