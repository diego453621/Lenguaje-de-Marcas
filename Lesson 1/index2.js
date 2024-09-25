const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");
const boton4 = document.getElementById("boton4");

const boton1o = document.getElementById("boton1");
const boton2o = document.getElementById("boton2");
const boton3o = document.getElementById("boton3");
const boton4o = document.getElementById("boton4");

const boton1top = document.getElementById("boton1top");
const boton2top = document.getElementById("boton2top");
const boton3top = document.getElementById("boton3top");
const boton4top = document.getElementById("boton4top");

function reset() {
    boton1.classList.remove("botonactivo");
    boton2.classList.remove("botonactivo");
    boton3.classList.remove("botonactivo");
    boton4.classList.remove("botonactivo");
    
    boton1top.classList.remove("topactivo");
    boton2top.classList.remove("topactivo");
    boton3top.classList.remove("topactivo");
    boton4top.classList.remove("topactivo");

    boton1.classList.add("botones");
    boton2.classList.add("botones");
    boton3.classList.add("botones");
    boton4.classList.add("botonaes");

    boton1top.classList.add("top");
    boton2top.classList.add("top");
    boton3top.classList.add("top");
    boton4top.classList.add("top");
}

// Manejador de eventos para cada botón
boton1o.addEventListener("click", function() {
    reset();
    boton1.classList.remove("botones");
    boton1top.classList.remove("top");
    boton1.classList.add("botonactivo");
    boton1top.classList.add("topactivo");
});

boton2o.addEventListener("click", function() {
    reset();
    boton2.classList.add("botonactivo");
    boton2top.classList.add("topactivo");
});

boton3o.addEventListener("click", function() {
    reset();
    boton3.classList.add("botonactivo");
    boton3top.classList.add("topactivo");
});

boton4o.addEventListener("click", function() {
    reset();
    boton4.classList.add("botonactivo");
    boton4top.classList.add("topactivo");
});
