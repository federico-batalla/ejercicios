"use script";



let btnAgregar = document.getElementById("btnAgregar");
btnAgregar.addEventListener("click",agregar);


let btnBorrar = document.getElementById("btnBorrar");
btnBorrar.addEventListener("click",borrar);

inputAgregar = document.getElementById("inputAgregar");

let listaPadre = document.getElementById("listaPadre");

function agregar() {
    let nuevoItem = document.createElement("li");
    
    nuevoItem.innerHTML = inputAgregar.value;

    

    

    btnAgregar.classList.add("rojo");



    listaPadre.appendChild(nuevoItem);
    
    


}

function borrar() {

    listaPadre.innerHTML = ""

    btnAgregar.classList.remove("rojo");
    
    
}