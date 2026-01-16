function mostrarAlerta(){
    alert("Hola bienvenido al sitio web")
}
function suma(){
    let valor1 =5;
    let valor2= 10;
    let resultado = valor1 + valor2;
    console.info("la suma es igual a" +resultado);
}
function sumaParam(valor1, valor2){
    console.info("el valor 1"+valor1)
    console.info("el valor 2"+valor2)

}
function sumarInput(){
    let val1=document.getElementById("val1").value;
    let val2=document.getElementById("val2").value;
    let res= parseFloat(val1)+parseFloat(val2);
    console.info("el resultado de la suma es:"+ res);

    if (res>10){
        document.getElementById("mensaje").value="numero mayor a 10 ";

    }else{
        document.getElementById("mensaje").value="numero menor ";
    } 

}
