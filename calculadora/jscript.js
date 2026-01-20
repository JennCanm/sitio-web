const pantalla = document.getElementById("pantalla");
const botones = document.querySelectorAll("button");

let operacion = "";

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const valor = boton.textContent;

        if (valor === "C") {
            operacion = "";
            pantalla.value = "";
        } 
        else if (valor === "=") {
            try {
                operacion = eval(operacion);
                pantalla.value = operacion;
            } catch {
                pantalla.value = "Error";
                operacion = "";
            }
        } 
        else {
            operacion += valor;
            pantalla.value = operacion;
        }
    });
});