var lado1;
var lado2;
var lado3;

lado1 = parseFloat(prompt("Digite o primeiro valor"));
lado2 = parseFloat(prompt("Digite o segundo valor"));
lado3 = parseFloat(prompt("Digite o terceiro valor"));

if(lado1 == 0 || lado2 == 0 || lado3 == 0){
    console.log("Números errados.")
}else if(lado1 == lado2 & lado2 == lado3){
    console.log("Triangulo equilatero")
}else if(lado1 == lado2){
    console.log("triangulo isosceles")
}else if(lado1 == lado3){
    console.log("triangulo isosceles")
}else{
    console.log("triangulo escaleno")
}